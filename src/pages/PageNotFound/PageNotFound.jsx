import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2 className="PageNotFound">
        Sorry. Page not found or not yet created! Come back and try again!
      </h2>
     <Link style={{color:'black'}} to='../'>← back</Link>
    </div>
  );
};

export default PageNotFound;
