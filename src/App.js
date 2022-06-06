import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout";
import './App.css';
import Lyrics from "./components/tracks/Lyric";
import { ContextController } from "./context";
function App() {
    return (
        <ContextController>
            <Navbar/>
                <React.Fragment>
                   <div className={'container'}>
                       <Routes>
                           <Route path={'/'} element={<Index/>}/>
                           <Route  path="/lyrics/track/:id" element={<Lyrics/>} />
                       </Routes>
                   </div>
                </React.Fragment>
        </ContextController>
    );
}

export default App;
