export function Chips({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
