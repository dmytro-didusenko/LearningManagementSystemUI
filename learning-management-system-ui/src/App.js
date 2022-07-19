import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import { Route, Routes } from 'react-router-dom';
import { routes } from './components/Routes';
import User from './components/user/User';
import CoursesPage from './pages/CoursesPage';
import {Chat} from "@mui/icons-material";

function App() {
  return (
    <div className="App" >
      <AppContainer>
        {/* <Box position="fixed" zIndex={999}>
            {messages.map((message) => (
              <InfoMessage message={message}>{}</InfoMessage>
            ))}
          </Box> */}
        <Routes>
          <Route path={routes.home} element={<div>Home</div>}>
          </Route>
          <Route path={routes.users} element={<User></User>}>
          </Route>
          <Route path={routes.courses} element={<div><CoursesPage/></div>}>
          </Route>
          <Route path={routes.groups} element={<div>groups</div>}>
          </Route>
          //For testing
          <Route path='/chat' element={<Chat></Chat>}>
          </Route>
          <Route path='*' element={<div>Not found</div>}>
          </Route>
          <Route path='/' element={< div > Home</div>}>
          </Route>
        </Routes>
      </AppContainer >
    </div >
  );
}

export default App;
