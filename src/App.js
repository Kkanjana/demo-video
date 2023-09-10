import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VideoList/>} />
                    <Route path="/video/:id" element={<VideoPlayer/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;