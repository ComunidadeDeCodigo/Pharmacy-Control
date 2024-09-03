import foto from "@/assets/people.png";
import { About } from "../about";


export const Landing = () => {

  return (
    <main className="w-full justify-between relative overflow-hidden bg-fixed bg-white bg-cover bg-center m-auto p-5" style={{backgroundImage:"url('../../src/assets/fundo.svg')"}}>
        <div className="mt-6 font-sans flex justify-around">
          <div className="block items-center">
          <h1 className="m-7 text-4xl items-center font-semibold mb-9">Seja bem-vindo à sua plataforma <br /> de <span className="text-green-800 font-bold">controle</span> e  <span className="text-green-800 font-bold">suporte</span> para <br /> a sua farmácia.</h1>
          <p className="text-gray-700 m-7 text-xs">Aqui você vai poder gerir a sua farmacia, <br />
             Inovação, clareza e dinamismo, tudo em apenas uma plataforma. <br />
             Comece usando o sistema com apenas um clique!
             </p>
             <button className="m-7 p-2 hover:bg-green-800 w-[20%] transition-all bg-green-700 rounded-md text-white" >Começar</button>
          </div>
        <img src={foto} className="w-[450px] rounded-full items-center m-auto max-[320px]:w-[300px] cursor-pointer transition ease-in-out hover:scale-[1.08]" />
        </div>
        <About />
    </main>
  );
};
