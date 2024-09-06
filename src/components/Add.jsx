import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { MyContext } from "../contextAPI/MyContext";
import { useContext } from "react";

const Add = ({ title, openAddDialog, setOpenAddDialog }) => {
  const { userData, setUserData } = useContext(MyContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");

  const handleAddUser = async () => {
    const newUser = {
      id: userData.length + 1,
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase,
        bs,
      },
    };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        console.log("New User:", newUser);
        setUserData((prevUsers) => [...prevUsers, newUser]);
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error  adding user:", error);
    }
    setOpenAddDialog(false);
  };

  return (
    <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {/* Form Fields */}
        <form style={{ fontSize: "12px" }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Street"
            variant="outlined"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Suite"
            variant="outlined"
            value={suite}
            onChange={(e) => setSuite(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Zipcode"
            variant="outlined"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Website"
            variant="outlined"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Catch Phrase"
            variant="outlined"
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
          <TextField
            fullWidth
            label="Business Strategy"
            variant="outlined"
            value={bs}
            onChange={(e) => setBs(e.target.value)}
            margin="dense"
            InputProps={{ style: { fontSize: "12px" } }}
          />
        </form>
      </DialogContent>
      <DialogActions>
        {/* Buttons */}
        <Button onClick={() => setOpenAddDialog(false)} color="primary">
          Close
        </Button>
        <Button onClick={handleAddUser} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Add;
