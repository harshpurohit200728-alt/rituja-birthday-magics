import React from 'react';
import { NameLetterItem } from '../data/memories';

interface NameLetterProps {
  item: NameLetterItem;
  index: number;
  isVisited: boolean;
  isSelected: boolean;
  onSelect: (index: number) => void;
}

export const NameLetter: React.FC<NameLetterProps> = ({
  item,
  index,
  isVisited,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`letter-pill-btn ${isVisited ? 'visited' : ''} ${isSelected ? 'selected' : ''}`}
      aria-label={`Letter ${item.letter} — ${item.title}`}
    >
      {item.letter}
    </button>
  );
};
