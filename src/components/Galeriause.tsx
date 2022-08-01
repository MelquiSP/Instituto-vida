import Saude from '../assets/foto1.png'
import Saude2 from '../assets/foto2.jpg'
import Saude3 from '../assets/foto3.jpg'
import Saude4 from '../assets/foto4.jpg'
import { Galeria } from '../components/modelo/Galeria'

export function GaleriaUse (){
  return (
    <div  className='relative'>
      <div id='galeria' className='mt-10 p-8'>

      </div>
      <div className='bg-teal-400 grid grid-cols-2 gap-4  mt-20 m-24 rounded-xl'>


      <div className='col-span-2 relative flex justify-center items-center py-10'>
            <div  className="bg-pink-500 rounded-lg relative w-32 flex justify-center items-center -mt-36">
               <h1 className=' text-zinc-50 text-xl flex items-center justify-center'>Galeria</h1>

            </div>

      </div>
         <div>
            <Galeria img={Saude} text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim. "/>
            
            <Galeria img={Saude3} text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim. "/>
            
         </div>
         <div>
            <Galeria img={Saude2} text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim. "/>
                
            <Galeria img={Saude4} text="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim. "/>

         </div>
      </div>
       
            
    </div>
  )
}