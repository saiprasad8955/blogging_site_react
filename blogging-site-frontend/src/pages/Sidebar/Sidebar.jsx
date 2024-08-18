import { ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react";
import LOGO from '/logo.png';
import { Link, useLocation } from "react-router-dom";

export const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-full">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">

                {/* LOGO AND COLLAPSE BUTTON */}
                <div className="p-4 mb-4 flex justify-between items-center">
                    <div className={`flex items-center gap-x-6 overflow-hidden transition-all ${expanded ? "w-30" : "w-0"} `} >
                        <Link to='/home'>
                            <img className="w-10 hover:cursor-pointer" src={LOGO} alt="Logo" />
                        </Link>
                    </div>
                    <button
                        onClick={() => setExpanded((prev) => !prev)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <div className={`${expanded ? 'p-3' : 'w-0 p-0'} overflow-hidden transition-all`}>
                    <p className="font-bold text-indigo-500  hover:text-gray-600" >MANAGEMENT</p>
                </div>


                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-2 ">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside >
    )
}

export function SidebarItem({ icon, title, alert, path }) {
    const { expanded } = useContext(SidebarContext);
    const { pathname } = useLocation();
    let active = pathname === path ? true : false;

    return (
        <Link to={path} style={{
            textDecoration: 'none',
            fontWeight: 'normal',
            color: 'inherit'
        }}>
            <li
                className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                        : "hover:bg-indigo-50 text-gray-600"
                    }
    `}
            >

                {icon}
                <span
                    className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                        }`}
                >
                    {title}
                </span>
                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
                            }`}
                    />
                )}

                {!expanded && (
                    <div
                        className={`
                                      absolute left-full rounded-md px-2 py-1 ml-6
                                     bg-indigo-100 text-indigo-800 text-sm
                                     invisible opacity-20 -translate-x-3 transition-all
                                     group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                                  `}
                    >
                        {title}
                    </div>
                )}
            </li >
        </Link>
    )
}