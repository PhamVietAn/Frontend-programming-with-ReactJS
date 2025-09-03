
import ListItem from "./ListItem";

export default function LargeList({ selectedIndex, onSelect }: { selectedIndex: number; onSelect: (index: number) => void }) {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, idx) => (
        <ListItem
          key={idx}
          index={idx}
          selected={selectedIndex === idx}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
