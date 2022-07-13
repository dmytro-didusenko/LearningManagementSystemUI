import React, { useState, useEffect, useRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useFetching } from "../hooks/useFetching";
import CoursesModule from "../services/modules/CoursesModule";
import Cours from "../components/CoursAccordion";
import { Box, Button } from "@mui/material";
import AddButton from "../components/coursespage/AddButton";
import Modall from "../components/coursespage/Modall";
import AddUserModel from "../components/coursespage/AddUserModel";
import BasicDatePicker from "../components/coursespage/DatePikecker";
import ErrorMessage from "../components/coursespage/ErrorMessage";

const CoursesPage = () => {
  const [courses, setUsers] = useState([]);
  useEffect(() => {
    fetching();
  }, []);

 const container = useRef(null);

  const [fetching, userError] = useFetching(async () => {
    const response = await CoursesModule.getAllCourses();
    setUsers(response.data);
  });

  console.log(userError);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
    
      {userError && <div>Error{userError}</div>}
      <Box sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}>
        {courses.map((cours) => (
          <Cours cours={cours} key={cours.id} /> 
        ))} 
      </Box>
      <Box position="fixed" sx={{ bottom: "10%", right: "5%", zIndex: 998 }}>
        <AddButton onClick={handleOpen} />
        <Modall handleClose={handleClose} open={open}>
          <AddUserModel handleClose={handleClose} container={container}/>
        </Modall>
      </Box>
    </div>
  );
};

export default CoursesPage;
