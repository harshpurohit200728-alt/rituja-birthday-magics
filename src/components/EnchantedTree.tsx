import React, { useState } from 'react';
import { NAME_LETTERS } from '../data/memories';
import { NameLetter } from './NameLetter';

interface EnchantedTreeProps {
  onProceedToGallery: () => void;
}

export const EnchantedTree: React.FC<EnchantedTreeProps> = ({ onProceedToGallery }) => {
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const handleSelectLetter = (index: number) => {
    setSelectedIdx(index);
    setVisited((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  const handleRevealAll = () => {
    setVisited(new Set(NAME_LETTERS.map((_, i) => i)));
    setSelectedIdx(NAME_LETTERS.length - 1);
  };

  const activeItem = NAME_LETTERS[selectedIdx] || NAME_LETTERS[0];
  const allRevealed = visited.size === NAME_LETTERS.length;

  return (
    <section className="scene-section active" aria-labelledby="tree-heading">
      <div className="tree-layout">
        <div className="tree-header">
          <div className="eyebrow-badge">🌿 Chapter Two · The Enchanted Canopy 🌿</div>
          <h2 id="tree-heading" className="serif-title">The Enchanted Name Tree</h2>
          <p className="subtitle-text">
            Tap each glowing golden letter along the branches to unlock its keepsake meaning.
          </p>
          <div className="progress-bar-wrap" role="status" aria-live="polite">
            <span>Keepsakes Revealed: {visited.size} / {NAME_LETTERS.length}</span>
            <span>·</span>
            <button
              type="button"
              onClick={handleRevealAll}
              style={{ background: 'none', border: 'none', color: '#F4C2C2', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
            >
              Reveal All 6 ✨
            </button>
          </div>
        </div>

        <div className="tree-stage-card">
          <div className="tree-svg-container">
            <svg className="tree-svg" viewBox="0 0 800 500" role="img" aria-label="An enchanted glowing forest tree bearing the six golden letters R, I, T, U, J, A">
              <defs>
                <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3D2618" />
                  <stop offset="55%" stopColor="#6B442A" />
                  <stop offset="100%" stopColor="#B08948" />
                </linearGradient>
              </defs>
              <path d="M0 462 Q260 420 520 455 T800 450 L800 500 L0 500 Z" fill="#123324" />
              <g className="canopy-cluster">
                <ellipse cx="400" cy="185" rx="250" ry="125" fill="#184330" opacity="0.8" />
                <circle cx="325" cy="135" r="92" fill="#1A4733" opacity="0.75" />
                <circle cx="475" cy="135" r="92" fill="#1A4733" opacity="0.75" />
              </g>
              <path className="tree-path-grow" d="M350 482 Q385 462 400 420 L400 240" fill="none" stroke="url(#trunkGrad)" strokeWidth="24" strokeLinecap="round" />
              <path className="tree-path-grow tree-branch-delay-1" d="M396 310 Q310 275 210 230" fill="none" stroke="url(#trunkGrad)" strokeWidth="12" strokeLinecap="round" />
              <path className="tree-path-grow tree-branch-delay-1" d="M404 310 Q490 275 590 230" fill="none" stroke="url(#trunkGrad)" strokeWidth="12" strokeLinecap="round" />
              <path className="tree-path-grow tree-branch-delay-2" d="M398 270 Q330 205 275 150" fill="none" stroke="url(#trunkGrad)" strokeWidth="10" strokeLinecap="round" />
              <path className="tree-path-grow tree-branch-delay-2" d="M402 270 Q470 205 525 150" fill="none" stroke="url(#trunkGrad)" strokeWidth="10" strokeLinecap="round" />
              <path className="tree-path-grow tree-branch-delay-3" d="M400 250 Q370 170 355 105" fill="none" stroke="url(#trunkGrad)" strokeWidth="8.5" strokeLinecap="round" />
              <path className="tree-path-grow tree-branch-delay-3" d="M400 250 Q430 170 445 105" fill="none" stroke="url(#trunkGrad)" strokeWidth="8.5" strokeLinecap="round" />

              {NAME_LETTERS.map((item, idx) => (
                <g
                  key={item.letter}
                  className={`letter-orb-group ${visited.has(idx) ? 'visited' : ''}`}
                  transform={`translate(${item.x}, ${item.y})`}
                  onClick={() => handleSelectLetter(idx)}
                >
                  <circle className="letter-orb-pulse" cx="0" cy="0" r="26" />
                  <circle className="letter-orb-circle" cx="0" cy="0" r="25" />
                  <text className="letter-orb-text" x="0" y="1">{item.letter}</text>
                </g>
              ))}
            </svg>
          </div>

          <div className="letter-buttons-bar" role="group" aria-label="Letters in Rituja's name">
            {NAME_LETTERS.map((item, idx) => (
              <NameLetter
                key={item.letter}
                item={item}
                index={idx}
                isVisited={visited.has(idx)}
                isSelected={selectedIdx === idx}
                onSelect={handleSelectLetter}
              />
            ))}
          </div>

          <div className="keepsake-card" aria-live="polite">
            <span className="keepsake-badge">
              Golden Keepsake {selectedIdx + 1} of {NAME_LETTERS.length} · Letter {activeItem.letter}
            </span>
            <h3 className="keepsake-title">
              {activeItem.letter} — {activeItem.title}
            </h3>
            <p className="keepsake-quote">“{activeItem.meaning}”</p>
          </div>
        </div>

        {allRevealed && (
          <div className="tree-celebration-banner">
            <div className="mochi-wrapper" style={{ marginBottom: '0.5rem' }}>
              <div className="speech-bubble">Smile, birthday star!</div>
            </div>
            <h3 className="serif-title" style={{ color: '#F3DFA2', marginBottom: '0.6rem' }}>
              HAPPY BIRTHDAY, RITUJA! 🎂
            </h3>
            <p className="subtitle-text" style={{ color: '#FAF6EE', maxWidth: 560, marginBottom: '1.5rem' }}>
              May your next chapter be filled with happiness, beautiful surprises, new adventures, and countless reasons to smile.
            </p>
            <button type="button" onClick={onProceedToGallery} className="btn-primary">
              <span>There's more to this little story →</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
