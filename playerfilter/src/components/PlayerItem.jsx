function PlayerItem({ player }) {
  return (
    <li style={{
      padding: "8px",
      borderBottom: "1px solid #ccc"
    }}>
      {player.id} - {player.name} ({player.role})
    </li>
  );
}
export default PlayerItem;