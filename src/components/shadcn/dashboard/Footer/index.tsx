import { FacebookIcon, InstagramIcon, LinkedinIcon, LinkIcon, MailIcon, PhoneCallIcon, PhoneIcon } from "lucide-react";

export const Footer = () => {
    const ano_atual = new Date().getFullYear()
    return (
       <footer id="contactos" className="block m-auto text-center p-10 bg-green-700">
        <div className="flex justify-around gap-3">

            <div className="mb-3 block list-none">
                <h1 className="font-semibold mb-5 text-xl text-white">Redes Sociais</h1>
                <div className="flex gap-3 m-auto items-center justify-center mb-5">

                <FacebookIcon className="text-green-500 cursor-pointer hover:text-white transition-all" />
                <InstagramIcon className="text-green-500 cursor-pointer hover:text-white transition-all" />
                <LinkedinIcon className="text-green-500 cursor-pointer hover:text-white transition-all" />

                </div>
                <li>
                    <a className="text-white hover:text-green-950 hover:scale-105 transition-all" href="">www.facebook.com/farmacia.co</a>
                </li>
                <li>
                    <a className="text-white hover:text-green-950 hover:scale-105 transition-all " href="">www.instagram.com/farmacia</a>
                </li>
                <li>
                    <a className="text-white hover:text-green-950 hover:scale-105 transition-all " href="">www.linkedin.com/farmacia</a>
                </li>
            </div>

            <div className="mb-3 block list-none">
                <h1 className="font-semibold mb-5 text-xl text-white">Contactos</h1>
                <div className="flex gap-3 m-auto items-center justify-center mb-5">
                <MailIcon className="text-green-500 cursor-pointer hover:text-white transition-all" />
                <PhoneIcon className="text-green-500 cursor-pointer hover:text-white transition-all" />
                <PhoneCallIcon className="text-green-500 cursor-pointer hover:text-white transition-all" />
                </div>
                <li>
                    <a className="text-white hover:text-green-950 hover:scale-105 transition-all" href="">farmacia@gmail.com</a>
                </li>
                <li>
                    <a className="text-white hover:text-green-950 hover:scale-105 transition-all " href="">+244 {"931441242"}</a>
                </li>
                <li>
                    <a className="text-white hover:text-green-950 hover:scale-105 transition-all " href="">+244 {"998441242"}</a>
                </li>
            </div>

            <div className="mb-3 block">
                <h1 className="font-semibold mb-5 text-xl text-white">Outros</h1>
                <p className="text-sm flex text-left  text-green-400">
                    <LinkIcon className="flex items-center w-52" />
                    Visite nossas páginas e solicite-nos, ou então, vá até as nosssas instalações e adquira o seu produto de forma calorosa para que a sua saúde fique estável. Estamos localizados em Angola(Luanda), propriamente em Viana nos mulenvos.</p>
            </div>

        </div>
            <nav className="font-bold m-auto text-center text-[14px]">
                <p className="text-white text-base">&copy; Copyright {ano_atual}</p>
            </nav>
       </footer>
    )
}
export default Footer;