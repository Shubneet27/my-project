function SearchBox({ value, onChange }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by role"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", width: "250px", fontSize: "16px" }}
      />
    </div>
  );
}
export default SearchBox;