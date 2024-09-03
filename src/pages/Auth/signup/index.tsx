import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterValidation } from '../../../utils/validations/signup.validations';
import { Link } from "react-router-dom";
import { CitationFarma } from '@/components/tools/citation-farma';


type IFormDataProps = {
  name: string;
  password: string;
  email: string;
  phoneNumber: string
}


export const SignUp = () => {
  const {  handleSubmit } = useForm<IFormDataProps>({
    resolver: zodResolver(RegisterValidation)
  })

  const handleCreateNewAccount = (data: IFormDataProps) => {
    console.log(data);
  }

    return(
    <div className='w-full justify-between items-center p-[118px]' style={{backgroundImage:"url('../../assets/fundo.svg')"}}>
    <div className="flex justify-around m-auto  w-full  ">
     <div className="items-center p-5 bg-gray-300 rounded-md">
      <div className="font-sans">
      <div className='p-[10px] items-center'>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleCreateNewAccount)}>
          <input
            type='text'
            name="name"
            placeholder='Digite o seu nome'
            className='m-auto block p-[10px] w-[95%] mt-[15px] mb-[8px] box-border border-none rounded-md outline-none'
          />
          <select className=' text-gray-400 m-auto block mt-[15px] p-[10px] w-[95%] mb-[8px] box-border border-none rounded-md outline-none cursor-pointer' name="" id="">
            <option className='' value="Farmacêutico(a)">Farmacêutico(a)</option>
            <option className='' value="Gerente">Gerente</option>
            <option className='' value="Balconista">Balconista</option>
            <option className='' value="Limpeza">Limpeza</option>

          </select>
          <input
            type='password'
            name="password"
            placeholder='Digite a sua senha'
            className='m-auto block p-[10px] w-[95%] mt-[15px] mb-[8px] box-border border-none rounded-md outline-none'
          />
          <div className='flex flex-col w-[100%] items-center justify-center gap-4 mt-2 '>
            <button 
            type="submit" 
            className='w-[95%] mt-[5px] border-none hover:scale-105 transition-all rounded-[4px] bg-green-700 text-white cursor-pointer m-auto p-[10px] font-[600]'>
              <Link to="/" className="w-full">Criar conta</Link>
          </button>
          </div>
        </form>
      </div>
      </div>
      </div>
      <div className="p-[10px] items-center w-[66vh] block"> 
      <CitationFarma  />
        <p className='mb-8 text-gray-400'>
        Caso já tenhas criado uma conta na nossa plataforma , averigue ou então faça login na  plataforma pressionando o botão abaixo!
        </p>
        <Link to="/auth/login" className='text-[14px] m-auto'>
        <button className=' text-green-700 hover:scale-105 transition-all font-sans font-bold p-3 border rounded-md'>
         Já tenho uma conta</button>
         </Link>
        </div>
    </div>
    </div>
  );
}

