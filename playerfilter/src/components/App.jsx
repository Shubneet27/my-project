import { useState } from "react";
import SearchBox from "./SearchBox.jsx";   
import PlayerList from "./PlayerList.jsx";

function App() {
  const [filterText, setFilterText] = useState('');

  const players = [
    { id: 1, name: "Shubneet", role: "Batsman" },
    { id: 2, name: "Anniee", role: "Bowler" },
    { id: 3, name: "Ashish", role: "Wicket Keeper" },
    { id: 4, name: "Paras", role: "All-Rounder" }
  ];

  const filteredPlayers = players.filter(player =>
    player.role.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sports Team Players</h1>
      <SearchBox value={filterText} onChange={setFilterText} />
      <PlayerList players={filteredPlayers} />
    </div>
  );
}

export default App;
