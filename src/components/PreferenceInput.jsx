export default function PreferenceInput({ input, setInput, onSubmit }) {
  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Tell your preference... e.g., phones under 500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={onSubmit}>
        Recommend
      </button>
    </div>
  );
}
