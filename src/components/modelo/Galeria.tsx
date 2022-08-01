export function Galeria ({img, text}:any) {
  return (
    <div className="">

      <div className=" mx-10 py-8 mb-10  lg:gap-4 lg:col-span-4 lg:grid ">
        <div className="flex flex-col lg:flex lg:justify-center ">
          <div className="flex justify-center items-center m-6">
            <img src={img} className='h-80 rounded-lg shadow-xl' />
          </div>
          <div className=" bg-pink-500 m-6 shadow-xl shadow-pink-500/50 rounded-lg px-1">
            <p className="p-2 text-justify flex justify-center text-zinc-50">{text}</p>

          </div>
        </div>


      </div>
    </div>
  )
}
