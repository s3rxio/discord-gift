import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Gift = React.lazy(() => import("./pages/Gift/Gift"));

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />\
            <Route path="/gifts/:videoId" element={<Gift />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;