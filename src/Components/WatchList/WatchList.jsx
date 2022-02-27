import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer015";
import "./watchlist2.css"



export function WatchList() {

  return (
    <div className="watchlist-main">
    <Navbar />
<div className="maindiv">
  <p>Watchlist</p>
  <div className="subdiv">
    <div><p>All</p></div>
    <div>
      <span>Sort by:</span>
      <span>
        <select name="" id="">
        <option value="">Most recent Addition</option>
          <option value="">Title: A - Z</option>
          <option value="">Title: Z - A</option>
        </select>
      </span>
    </div>
  </div>
  <div className="watched_items">

  </div>
</div>
<Footer />
</div>
  )
}