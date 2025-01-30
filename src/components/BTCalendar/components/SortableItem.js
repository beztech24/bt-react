import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const SortableItem = ({ id, children, style }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const dynamicStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...style,
  };

  return (
    <div ref={setNodeRef} style={dynamicStyle} {...attributes} {...listeners}>
      {children}
    </div>
  );
};
export default SortableItem;
