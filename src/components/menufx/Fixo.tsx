import { AiOutlineYoutube } from "react-icons/ai";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


export default function MFixo (){
  return(
    <div className="fixed w-full flex flex-col justify-center items-end p-3 z-50">
      <div className="flex w-5 flex-col justify-center items-center rounded-lg border-2 bg-slate-500/50 gap-4 p-4">
        <a href="https://www.youtube.com/channel/UCKQ4WmsLaGJ9Jj0tRyjyz2Q" target='_blank'>
          <AiOutlineYoutube className="text-[25px] text-red-500"/>

        </a>
        <a href="#header">
          <FaRegArrowAltCircleUp className="text-[25px] text-teal-700"/>

        </a>

      </div>

    </div>
  )
}