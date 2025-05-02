export default function TypeFilter({ types, selected, onChange }) {
    return (
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="">All Types</option>
        {types.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
    );
  }
  