import React from "react";
import "./News.css";
import Scroller from "./Scroller";
import { Link, Outlet } from "react-router-dom";

function News() {
  return (
    <div className="news">
      <div className="news-header">
        <p>Discover our news</p>
        <Link>View all</Link>
      </div>
      <hr />
      <div>
        <Scroller />
      </div>
    </div>
  );
}

export default News;
