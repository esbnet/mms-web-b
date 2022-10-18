import { Logo } from "../Logo";
import { Navbar } from "../Navbar";

import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="w-[1100px] flex justify-around items-center bg-gray-dark">
            <Logo />
            <Navbar />
        </div>
    )
}