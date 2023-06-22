import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../env";

function Home() {
  let [leagues, setLeagues] = useState<any[]>([]);

  // populate leagues
  useEffect(function() {
    axios.get(SERVER_URL + "/leagues")
      .then(res => setLeagues(res.data));
  }, []);

  return (
    <div id="Home">
      <div className="px-60 space-y-6">
        <h3 className="text-3xl">Your Leagues</h3>
        <div id="leagues" className="grid grid-cols-3 gap-4">
          {leagues.map((league, key) => (
            <div key={key} className="shadow-md p-6">
              <h4 className="text-2xl text-teal-500">{league.name}</h4>
              <p className="text-gray-600">{league.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;