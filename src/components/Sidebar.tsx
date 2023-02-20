import React from "react";
import { Link, useParams } from "react-router-dom";
import { Pages } from "../data/page";

const Sidebar: React.FC = () => {
  const { pageId } = useParams();

  return (
    <aside className="w-64 h-screen border-r-black border-r p-4 flex flex-col gap-2 font-semibold">
      {Pages.map((p) => (
        <Link
          to={`/page/${p.id}`}
          className={`${pageId === p.id && "text-blue-500"}`}
        >
          Page {p.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
