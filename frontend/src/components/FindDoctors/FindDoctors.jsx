import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../actions/doctor";
import Navbar from "../Navbar"
import Cards from "./Card";
import Search from "./Search"

export default function FindDoctors() {

    const {
        doctor: { doctors, loading }
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    const [filteredDoctors, setFilteredDoctors] = useState(doctors);

    const handleSearch = (newSearchTerm) => {
        if (newSearchTerm === '') {
            setFilteredDoctors(doctors);
        } else {
            const filtered = doctors.filter(doctor => {
                const name = `${doctor.first_name} ${doctor.last_name}`;
                return name.toLowerCase().includes(newSearchTerm.toLowerCase());
            });
            setFilteredDoctors(filtered);
        }
    };

    const handleSpecChange = (newSpec) => {
        if (newSpec === '') {
            setFilteredDoctors(doctors);
        } else {
            const filtered = doctors.filter(doctor => doctor.speciality === newSpec);
            setFilteredDoctors(filtered);
        }
    };

    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);

    if (loading || doctors === null) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress />
          </Box>
        );
    }

    return(
        <div>
            <Navbar/>
            <Search doctors={doctors} onSpecChange={handleSpecChange} onSearch={handleSearch} />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row" justifyContent="center" alignItems="center" Cards spacing={3}>
                {filteredDoctors.map((doctor) => (
                    <Cards key={doctor._id} doctor={doctor} />
                ))}
            </Grid>
        </div>
    )
}
