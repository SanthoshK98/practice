import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import { TableBody, TableHead, TableRow, TableCell } from "@mui/material";

function Librarianhome() {
  const [data, setData] = useState([]);
  const [approvestatus, setApprovestatus] = useState({});
  const [rejectstatus, setRejectstatus] = useState({});

  const approveHandler = (data) => {
    console.log(data)
    // setApprovestatus({...approvestatus,[data._id]: true})
  };

  const rejectHandler = (data) => {
    // setRejectstatus({...rejectstatus,[data._id]: true})
  };

  useEffect(() => {
    result();
  }, []);

  const result = async () => {
    try {
      const gate = await axios
        .get("http://localhost:5999/librarianbookservice")
        .then((response) => {
          // console.log(response.data.result)
          setData(response.data.result);
          
        });
        console.log(data)
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(data);
  return (
    <div>
      <div className="pope">
        <h1>This is Library Management Application</h1>
        <Link className="core" to="/librarianlogin">
          Logout
        </Link>
      </div>
      <h4>Request For Books</h4>
      <center>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Bookname</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Hod Id</TableCell>
              <TableCell>Librarian ID</TableCell>
              <TableCell>Hod Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item) => {
              return (
                <>
                  <TableRow key={item.librarianid}>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>{item.bookname}</TableCell>
                    <TableCell>{item.studentid}</TableCell>
                    <TableCell>{item.Hodid}</TableCell>
                    <TableCell>{item.librarianid}</TableCell>
                    <TableCell>
                      <p>Pending</p>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="success"
                        disabled={rejectstatus[item?._id]  ? !approvestatus[item?._id]  : approvestatus[item?._id]}
                        onClick={() => approveHandler(item)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        disabled={rejectstatus[item?._id]}
                        onClick={() => rejectHandler(item)}
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </center>
    </div>
  );
}

export default Librarianhome;
