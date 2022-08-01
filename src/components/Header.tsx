
import { BiSearch } from "react-icons/bi";

export function Header() {
  return (
    <div id="header" className="w-full h-28 bg-teal-400 flex justify-between items-center z-50">
      <div className="flex items-center justify-center px-32 gap-2">
        <div className="flex items-center h-24 relative">
          <h3 className='text-4xl font-semibold italic text-zinc-700'> Instituto</h3>

        </div>
        <div className="relative ">
          <blockquote className="text-4xl font-semibold italic text-center">
  
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-pink-500 relavite inline-block">
              <span className="relative text-white">Vida</span>
            </span>
    
          </blockquote>

        </div>

      </div>
      <div id="menu" className="flex justify-center items-center gap-4 ">
        <a href="#galeria" className="flex justify-center items-center text-zinc-50 text-xl  hover:bg-teal-600 px-2 rounded-3xl">Galeria</a>
        <a href="#cliente" className="text-zinc-50 text-xl  hover:bg-teal-600 px-3 rounded-lg">Clientes</a>
        <a href="#" className="text-zinc-50 text-xl  hover:bg-teal-600 px-2 rounded-3xl">Contato</a>

      </div>
      <div id="serch" className="flex justify-center items-center gap-1 pr-8 relative">
        <input type="text" placeholder="pesquise" required className="flex justify-center items-center rounded-2xl px-3 pb-1 "/>
        <button className="bg-zinc-50 rounded-full p-[4px] hover:bg-teal-600">
          <BiSearch className="text-teal-400 hover:text-zinc-50 text-xl"/>
        </button>
      </div>
    </div>
  )
}


