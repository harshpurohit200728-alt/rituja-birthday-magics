import React from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`control-btn ${isPlaying ? 'playing' : ''}`}
      aria-pressed={isPlaying}
      aria-label="Toggle gentle background music"
    >
      <span aria-hidden="true">{isPlaying ? '🎵' : '🔇'}</span>
      <span>{isPlaying ? 'Music: Playing' : 'Music: Off'}</span>
    </button>
  );
};
