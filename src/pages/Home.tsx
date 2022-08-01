import { Header } from '../components/Header'
import { Conteudo } from '../components/Conteudo'
import { GaleriaUse } from '../components/Galeriause'
import { useState } from 'react'
import  Lista  from '../components/modelo/Lista'
import Luz from '../components/modelo/Luz'
import MFixo from '../components/menufx/Fixo'



export function Home () {

  const [ligado, setLigado]=useState(false)

  return(
    <div className=' w-full absolute scroll-smooth'>

      <Header/>
      <MFixo/>

      <div className=''>
        <Conteudo/>
        
        <Luz ligado={ligado} setLigado={setLigado}/>
      
        <GaleriaUse/>
        <Lista/>

      </div>
      


      

    </div>
  )
}