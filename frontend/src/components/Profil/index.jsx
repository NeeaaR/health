import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserById } from "../../actions/profile"
import Navbar from "../Navbar"
import User from "./User"
import UserAvailability from "./UserAvailability"
import UserHeader from "./UserHeader"

const Profil = () => {

    //get id from url
    const { id } = useParams();

    const {
        profile: { profile, loading },
        auth
    } = useSelector(state => state);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch, id]);
    const { user } = auth;


    if (loading || profile === null) {
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <Navbar/>
            <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
                <UserHeader profile={profile.profile}/>
            </Box>
            <User profile={profile.profile}/>
            <UserAvailability appointments={profile.appointments}/>
        </div>  
    )
}

export default Profil;