import React from "react";
import Background from "./components/Background/Background";
import Router from "./Router";

const App = () => {
    return (
        <>
            <Background />
            <main className="main">
                <Router />
            </main>
        </>
    );
};

export default App;