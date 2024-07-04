import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Handle from "./component/Handle";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Description</h4>
          <h4>Action</h4>
        </div>
        {data.map((item, key) => (
          <Handle
            name={item.name}
            email={item.email}
            index={key}
            key={key}
            removeData={removeData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
