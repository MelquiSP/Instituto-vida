
import Verde from '../../assets/botão verde.png'
import Vermelho from '../../assets/botão vermelho.png'

export default function Luz (props:any){
  
  return (
    <div className="flex flex-col justify-center items-center">
      <p className='mt-10 p-2 bg-teal-500 text-zinc-50 font-serif rounded-full shadow-lg shadow-teal-500/50'>Como esta sua saúde</p>
      <img src={props.ligado?Verde:Vermelho} className="w-20 mt-8  rounded-full" />
      <button onClick={()=>props.setLigado(!props.ligado)} className="mt-2 flex justify-center items-center border-2 h-8 w-16 rounded-full">
        <p>Click</p>
      </button>

    </div>

  )
}