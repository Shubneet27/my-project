import PlayerItem from "./PlayerItem";
function PlayerList({ players }) {
  if (players.length === 0) {
    return <p>No players found.</p>;
  }
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {players.map(player => (
        <PlayerItem key={player.id} player={player} />
      ))}
    </ul>
  );
}
export default PlayerList;