import React from "react";
import { useParams } from "react-router-dom";
import { Pages } from "../data/page";

const Detail = () => {
  const { pageId } = useParams();
  const currentPage = Pages.find((p) => p.id === pageId);

  if (!currentPage) throw Error("Not Found");

  return (
    <section className="flex-1 flex justify-center items-center font-semibold text-2xl text-blue-500">
      This is Page {currentPage?.name}!
    </section>
  );
};

export default Detail;
