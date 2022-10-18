import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500">
            <div className="w-full flex flex-row items-center ">
                {/* <Link to="/agendamento" className="text-gray-light hover:text-yellow">Agendamento</Link>
                <Link to="/aluguel" className="text-gray-light hover:text-yellow">Aluguel</Link>
                <Link to="/" className="text-gray-light hover:text-yellow">Eventos</Link> */}
            </div>
        </nav>
    )
}
