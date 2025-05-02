import Counter from "./counter"
import Map from "./map"
import Navbar from "./navbar"

export default function Contents (){
    return(
        <>
        <div className="grid grid-cols-7 gap-5 ">
            <div className="bg-[#E17000] col-span-7 text-white h-10/10 flex justify-center text-4xl shadow-md">Dashboard</div>
            <div className="col-span-5 col-start-3 flex justify-center shadow-md h-200 mr-4" > <Map /> </div>
        </div>
        
        </>
    )
}