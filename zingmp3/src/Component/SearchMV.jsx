import React from "react";
import { FaUserAltSlash } from "react-icons/fa";
import "../Css/SearchMV.css";

const SearchMV = (props) => {
    return (
        <div className="box-search-mv">
            <p>MV</p>
            <div className="box-none">
                <p>{props.title}</p>
            </div>
        </div>
    );
};

export default SearchMV;
