export default function ({value, onChange, onSearch }) {

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={() => onSearch(value)}>Search</button>
    </div>
  );
}
