import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../contextAPI/MyContext";

const Edit = ({ openEditDialog, setOpenEditDialog, selectedUser }) => {
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

  useEffect(() => {
    if (selectedUser) {
      // Pre-fill form with the selected user's data
      setName(selectedUser.name);
      setUsername(selectedUser.username);
      setEmail(selectedUser.email);
      setStreet(selectedUser.address.street);
      setSuite(selectedUser.address.suite);
      setCity(selectedUser.address.city);
      setZipcode(selectedUser.address.zipcode);
      setPhone(selectedUser.phone);
      setWebsite(selectedUser.website);
      setCompanyName(selectedUser.company.name);
      setCatchPhrase(selectedUser.company.catchPhrase);
      setBs(selectedUser.company.bs);
    }
  }, [selectedUser]);

  const handleEditUser = async () => {
    const updatedUser = {
      ...selectedUser,
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
        `https://jsonplaceholder.typicode.com/users/${selectedUser.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedUser),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        const updatedData = await response.json();
        setUserData((prevUsers) =>
          prevUsers.map((user) =>
            user.id === selectedUser.id ? updatedData : user
          )
        );
        window.alert("updated succesfully");
      } else {
        throw new Error("update failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
    setOpenEditDialog(false);
  };

  return (
    <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
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
        <Button onClick={() => setOpenEditDialog(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleEditUser} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Edit;
