import { Funcionarios } from "../funcionarios";

export const About = () => {
  return (
    <main id="about" className="mt-5 m-7">
        <p className="font-semibold text-3xl text-green-800">Sobre Nós</p>
        <p className="text-sm text-gray-700">
          Somos uma empresa confiável,e de trato fácil!
        </p>

        <div className="mt-5 p-2 justify-between flex">
          <div className="flex items-center gap-5">
            <div className="block items-center m-auto justify-center">
          <img className="font-semibold w-[450px] p-3  rounded-full" src="../src/assets/gerente.png" alt="gerente" />
          <p className="text-xl text-gray-800 mb-2 text-center relative top-[-75px]">Gerente</p>
          </div>
          <div className="block">
            <h1 className="text-2xl font-semibold mb-4 text-[#434343]">{"Mateus E. L. Manuel"}</h1>
          <p className="text-xs text-gray-700 italic mb-5">Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Cupiditate recusandae laboriosam <br /> ex cum magnam ab nesciunt iste ratione eaque in, minima vero. Dolorum iusto, molestiae perferendis amet minus in natus!</p>
          <h2 className="text-lg text-gray-700">{"Lic. em Enfermagem"}</h2>
          </div>
          </div>
        </div>

        <div className="mt-[-40px] p-2">
          <p className="text-2xl text-center text-green-700 font-semibold mb-6">Clientes Satisfeitos</p>
          <div className="justify-between flex m-auto gap-3">
            <div className="border rounded-lg p-8">
              <p className="italic mb-5 text-gray-700 text-end">Gostei muito de visitar a farmácia,  fui  bem atendido  e recomendo a vistarem a mesma!</p>
              <span className="text-end m-auto italic text-green-700">{"Adolfo Manuel"}</span>
            </div>

            <div className="border rounded-lg p-8">
              <p className="italic mb-5 text-gray-700 text-end">A princípio, não gostava  de ir a farmácia, porque pensava muito nos preços... até  encontrar esta com preços acessíveis!</p>
              <span className="text-end m-auto italic text-green-700">{"Nyingika Paulo"}</span>
            </div>

            <div className="border rounded-lg p-8">
              <p className="italic mb-5 text-gray-700 text-end">Um autentico baratucho! Recomendo aos que gostam de economizar e também aos que gostam de bons produtos e bons serviços!</p>
              <span className="text-end m-auto italic text-green-700">{"Lausio Watela"}</span>
            </div>

          </div>
        </div>
        <div className="mt-5 p-2">
          <p className="text-2xl text-center text-green-700 font-semibold mb-6">FeedBack</p>
         
          <div className="justify-around flex">
          <div className="block gap-3">
            <input className="border rounded-md p-2 mb-2 w-full" type="text" placeholder="Nome Completo" />
            <input className="border rounded-md p-2 w-full" type="tel" placeholder="Telefone" />
          </div>
          <div className="block">
          <textarea name="" className="border h-20 w-full p-2 rounded-md mb-2" placeholder="O que achou da farmácia?" id=""></textarea>
          <button className="bg-green-700 hover:bg-green-600 transition-all hover:scale-105 p-2 w-full rounded-md text-white" >Enviar</button>
          </div>
          </div>
        </div>

        <Funcionarios />

    </main>
  );
};
