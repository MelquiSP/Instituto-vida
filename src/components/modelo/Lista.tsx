import { BsFillPeopleFill } from "react-icons/bs";

const clientes=[
  {nome:"Frida", idade:"18"},
  {nome:"Son Goku", idade:"40"},
  {nome:"Raddan Stormfront", idade:"35"},
  {nome:"Ken Masters", idade:"22"},
  {nome:"Patricia Abravanel", idade:"32"},
  {nome:"Ted Bunddin", idade:"33"},
  {nome:"Marina", idade:"15"},
  {nome:"Ricardo", idade:"28"},
  {nome:"João", idade:"12"},
];

const listaclientes=clientes.map(
  (n,i)=>
  <li className=" flex text-zinc-50 font-serif " key={i}>{i} - {n.nome} - {n.idade}</li>
)

export default function Lista (){
  return(
    <div className="flex justify-center items-center flex-col relative">
      <div id="cliente"className="p-8"></div>
      <div className="rounded-full bg-teal-600 p-4">
        <BsFillPeopleFill className="text-zinc-50 text-[100px] "/>
      </div>
      <div className="bg-pink-500 rounded-lg w-32 flex justify-center items-center mt-10 mb-10">
        <p className="text-zinc-50 text-xl flex items-center justify-center">Clientes</p>
      </div>
      <div className="bg-teal-300 rounded-lg w-[70%] flex justify-center p-5 items-center">
        <p className="text-3xl font-sans text-zinc-700">Nome e idade</p>
      </div>
      <ul className="p-6 text-justify rounded-lg gap-4 flex flex-col items-center justify-center bg-teal-400 w-[85%]">{listaclientes}</ul>

    </div>
  )

}