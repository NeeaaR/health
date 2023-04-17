import { Button, Container, Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import Cards from "./Card";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("http://localhost:8000/api/users/")
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded(true);
          setUsers(result);
        });
    }
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.first_name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Container>
    <Box sx={{
      marginY: "100px",
    }}>
    <TextField id="outlined-basic" label="Outlined" defaultValue="" onChange={handleSearch}>
        Rechercher
      </TextField>
    </Box>
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: "center"
     }}>
        {filteredUsers.map((user) => (
          <Cards key={user.id} user={user} />     
        ))}
    </Box>
    <Button sx={{ marginY: '25px' }}>UPDATE</Button>
    </Container>
  );
}
