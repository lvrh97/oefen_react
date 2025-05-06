import Map from "./map"


export default function Contents (){
    return(
        <>
        <div className="grid grid-cols-12   ">
            <div className="bg-[#E17000] col-span-12 text-white  h-20 flex justify-center  text-4xl items-center ">Dashboard</div>
            <div className="col-span-10 col-start-2 lg:col-span-4 lg:col-start-8 flex justify-center shadow-lg h-120 lg:h-200 mt-10 " > <Map /> </div>
        </div>
        
        </>
    )
}