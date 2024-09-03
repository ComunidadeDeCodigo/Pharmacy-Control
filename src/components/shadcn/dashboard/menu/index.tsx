import { MenuItems } from "@/utils/constants/menuItems";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const DashboardMenu = () => {

    useEffect(() => {
        const handleScroll = (evento: MouseEvent) => {
            const target = evento.target as HTMLElement;
            const href = target.getAttribute("href");

            if(href === "#about" || href === "#contactos" || href === "#") {
                evento.preventDefault();
            const targetElement = document.querySelector(href);
            if(targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        }
    }
    document.addEventListener("click", handleScroll);
    return () => {
        document.removeEventListener("click", handleScroll);
    }
    },[])

    return(
            <header className="bg-red-500 bg-transparent h-20 relative px-5  font-sans flex items-center justify-between w-full">
            <nav className="w-full flex items-center">
                <ul className="m-auto">
                    {MenuItems.map((item)=>(
                        <a
                        className="font-bold text-lg cursor-pointer text-green-800 px-4  hover:underline hover:underline-offset-8 " 
                        href={item.path}
                        >
                            {item.title}
                        </a>
                ))}
                </ul>
            </nav>
            <div className="flex gap-5 ml-[-300px]">
            <button className="w-full hover:bg-green-800 transition-all  p-2 m-auto bg-green-700 rounded-md text-white">
                <Link to={"/auth/signup"} >
                Criar conta
                </Link>
            </button>
            <button className="text-green-700 hover:bg-green-700 transition-all hover:text-white border border-green-700 p-2 m-auto rounded-md">Entrar</button>
            </div>
        </header>
    );
};