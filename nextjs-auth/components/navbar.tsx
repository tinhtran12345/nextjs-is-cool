import React from "react";
import Link from "next/link";
import styles from "./components.module.css";

const Navbar = () => {
    return (
        <div className="w-full bg-sky-700 flex items-center justify-center">
            <ul className="flex flex-start items-center w-[80%] text-[white] ">
                <li className="px-4 py-3 hover:bg-red-500 ">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-500">
                    <Link href={"/client"}>Client</Link>
                </li>
                <li className="px-4 py-3 hover:bg-red-500 ">
                    <Link href={"/server"}>Server</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
