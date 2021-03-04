import React from "react";
import { FaUserAltSlash } from "react-icons/fa";
import "../Css/SearchMV.css";

const SearchMV = () => {
    return (
        <div className="box-search-mv">
            <p>MV</p>
            <div className="box-none">
                {/* <span>
                    <FaUserAltSlash />
                </span> */}
                <p>Không tìm thấy mv nào !</p>
            </div>
        </div>
    );
};

export default SearchMV;
