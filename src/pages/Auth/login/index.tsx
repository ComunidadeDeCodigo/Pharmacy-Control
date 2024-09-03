import { Input } from "../../../components/shadcn/input"
import { MottoFarma } from "../../../components/tools/motto-farma"
import { Link, useNavigate } from "react-router-dom"
import foto from "../../../assets/graphic.avif"



export const Login = () => {
    return (
        <div className="w-full justify-between items-center p-[118px] " style={{backgroundImage:"url('../../src/assets/fundo.svg')"}}>
            <div className="flex justify-around m-auto w-full">
                <div className="p-5 items-center bg-gray-300 rounded-md">
                    <div className="font-sans">
                    <form onSubmit={handleSubmit(handleLogin)}>
                            <MottoFarma />
                            <Input
                                type="text"
                                control={control}
                                mandatory
                                name="name"
                                placeholder="Nome Completo"
                            />

                            <Input
                                type="password"
                                control={control}
                                mandatory
                                name="password"
                                placeholder="Senha"
                            />
                            <div className="flex flex-col w-[100%] items-center justify-center gap-4 mt-2">
                                <button type="submit" className="w-[95%] mt-[5px] border-none text-[#434343] rounded-[4px] bg-[#ffff00] cursor-pointer m-auto p-[10px] font-[600]">
                                    <Link to="/" className="w-full">Entrar</Link>
                                </button>
                                <Link to="/auth/signup" className="text-[14px] m-auto ml-[200px] text-gray-700">Criar uma Conta</Link>
                            </div>
                        </form>
                    </div>
                    <Imagem />
                </div>
            </div>
        </div>
    )
};

export const Imagem = () => {
    return (
        <div className="p-[10px] h-[80vh] w-[66vh]">
            <img className="w-[410px] h-[400px]" src={foto} alt="Imagem" />
        </div>
    )
};