import React, { useState, useEffect } from "react";

const Home = () => {
    let [leagues, setLeagues] = useState<any[]>([]);

    useEffect(() => {
        const loadLeagues = async () => {
            try {
                console.log("fetching...");
                let res = await fetch("http://localhost:8080/leagues");
                console.log("jsoning...");
                let json = await res.json();
                console.log(json);
                setLeagues(json);
            } catch (error) {
                console.log("Error in the membrain!");
                console.log(error);
            }
        };

        loadLeagues();
    }, []);

    return (
        <div id="Home" className="bg-red-300 px-60">
            <div id="content">
                <h1>Home</h1>
                {leagues.map((league, index) => (
                    <div key={index}>
                        <h3>{league.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;