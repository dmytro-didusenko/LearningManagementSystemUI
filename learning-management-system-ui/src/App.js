import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';
import {Route, Routes} from 'react-router-dom';
import {routes} from './components/Routes';
import User from './components/user/User';
import CoursesPage from './pages/CoursesPage';
import Groups from "./pages/Groups";
import ChatWindow from "./components/chat/ChatWindow";
import {useEffect} from "react";
import ChatService from "./services/ChatService";
import {useDispatch} from "react-redux";
import {addMessages, addMessage} from "./store/chatSlice";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await ChatService.start((m)=>dispatch(addMessage({message: m})));
            await ChatService.Handshake();
            const history = await ChatService.GetChatHistory();
            console.log(history.chatMessages);
            dispatch(addMessages({messages: history.chatMessages}));
        })();
    }, []);

    return (
        <div className="App">
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
                    <Route path={routes.groups} element={<Groups></Groups>}>
                    </Route>

                    //For testing
                    <Route path={routes.chat} element={
                        <ChatWindow></ChatWindow>
                    }>
                    </Route>

                    <Route path='*' element={<div>Not found</div>}>
                    </Route>
                    <Route path='/' element={< div> Home</div>}>
                    </Route>
                </Routes>
            </AppContainer>
        </div>
    );
}

export default App;
