import Map from "./map"


export default function Contents (){
    return(
        <>
        <div className="grid grid-cols-12 gap-5  content-normal  h-lvh bg-[#F1F5F9]">
            <div className="flex justify-center col-span-4"><image height='100px' href="../assets/LOGO_RO_NL_RGB_BASIS_BLAUW.svg"/></div>
            <div className="bg-[#E17000] col-span-12 text-white p-3 h-15 flex justify-center content-center text-4xl">Dashboard</div>
            <div className="col-span-10 col-start-2 lg:col-span-4 lg:col-start-8 flex justify-center shadow-lg h-200" > <Map /> </div>
        </div>
        
        </>
    )
}