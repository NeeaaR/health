import Navbar from "../Navbar";
import Cards from "./Cards";
import Pharmarcies from "./Pharmacies";
import Search from "./Search";

export default function FindPharmacy() {
    return(
        <div>
            <Navbar/>
            <Search/>
            <Pharmarcies/>
        </div>
    )
}