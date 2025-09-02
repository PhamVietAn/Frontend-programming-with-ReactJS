import React from "react";

function ListItemComponent({ index, selected, onSelect }: { index: number; selected: boolean; onSelect: (index: number) => void }) {
  console.log(`Render item ${index}`);
  return (
    <div style={{
      padding: "8px",
      margin: "4px",
      background: selected ? "#ffd700" : "#f0f0f0",
      border: selected ? "2px solid #ffa500" : "1px solid #ccc",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <span>Item {index + 1}</span>
      <button onClick={() => onSelect(index)}>
        {selected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

const ListItem = React.memo(ListItemComponent, (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected && prevProps.index === nextProps.index;
});

export default ListItem;
