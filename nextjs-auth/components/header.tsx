import React from "react";
import Navbar from "./navbar";
import Login from "./login";
const Header = () => {
    return (
        <div className="w-full flex flex-col items-center bg">
            <Login />
            <Navbar />
        </div>
    );
};

export default Header;
