import Counter from "./counter"
import Map from "./map"
import Navbar from "./navbar"

export default function Contents (){
    return(
        <>
        <div className="grid grid-cols-7 gap-5 content-evenly   h-lvh">
            <div className="bg-[#E17000] col-span-7 text-white h-15  flex justify-center content-center text-4xl">Dashboard</div>
            <div className="col-span-7 md:col-span-5 md:col-start-2 flex justify-center shadow-lg h-200 m-4" > <Map /> </div>
        </div>
        
        </>
    )
}