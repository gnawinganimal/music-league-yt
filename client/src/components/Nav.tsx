import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as bars } from "@fortawesome/free-solid-svg-icons/faBars";

function Nav() {
    return (
        <div id="Nav" className="w-full px-20 py-6 flex flex-wrap items-center justify-between">
            <div className="space-x-6">
                <FontAwesomeIcon icon={bars} />
            </div>
            <div className="space-x-6">
                <FontAwesomeIcon icon={bars} />
            </div>
        </div>
    );
}

export default Nav;