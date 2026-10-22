import React, { useState } from 'react';
import { Invitation } from './components/Invitation';
import { EnchantedTree } from './components/EnchantedTree';
import { MemoryGallery } from './components/MemoryGallery';
import { BirthdayLetter } from './components/BirthdayLetter';
import { MusicToggle } from './components/MusicToggle';

type SceneKey = 'invitation' | 'tree' | 'gallery' | 'letter';

export default function App() {
  const [scene, setScene] = useState<SceneKey>('invitation');
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <div className="app-shell">
      <header className="top-bar" role="banner">
        <button
          type="button"
          className="brand-badge"
          onClick={() => setScene('invitation')}
        >
          <span aria-hidden="true">🍑✨</span>
          <span className="brand-text">Rituja’s Little World</span>
        </button>

        <nav className="scene-pills" aria-label="Story Chapters">
          <button
            type="button"
            className={`scene-pill ${scene === 'invitation' ? 'active' : ''}`}
            onClick={() => setScene('invitation')}
          >
            1. Invitation
          </button>
          <button
            type="button"
            className={`scene-pill ${scene === 'tree' ? 'active' : ''}`}
            onClick={() => setScene('tree')}
          >
            2. Name Tree
          </button>
          <button
            type="button"
            className={`scene-pill ${scene === 'gallery' ? 'active' : ''}`}
            onClick={() => setScene('gallery')}
          >
            3. Memories
          </button>
          <button
            type="button"
            className={`scene-pill ${scene === 'letter' ? 'active' : ''}`}
            onClick={() => setScene('letter')}
          >
            4. Letter
          </button>
        </nav>

        <div className="top-actions">
          <MusicToggle
            isPlaying={musicPlaying}
            onToggle={() => setMusicPlaying((prev) => !prev)}
          />
        </div>
      </header>

      <main className="story-stage">
        {scene === 'invitation' && (
          <Invitation onProceedToTree={() => setScene('tree')} />
        )}
        {scene === 'tree' && (
          <EnchantedTree onProceedToGallery={() => setScene('gallery')} />
        )}
        {scene === 'gallery' && (
          <MemoryGallery onProceedToLetter={() => setScene('letter')} />
        )}
        {scene === 'letter' && (
          <BirthdayLetter onReplay={() => setScene('invitation')} />
        )}
      </main>
    </div>
  );
}
