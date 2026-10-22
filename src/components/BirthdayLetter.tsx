import React, { useState } from 'react';
import { PeachCharacter } from './PeachCharacter';

interface BirthdayLetterProps {
  onReplay: () => void;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ onReplay }) => {
  const [giftOpened, setGiftOpened] = useState(false);

  return (
    <section className="scene-section active" aria-labelledby="letter-heading">
      <div className="letter-scene-wrap">
        <div style={{ textAlign: 'center' }}>
          <div className="eyebrow-badge">💌 Chapter Four · A Note From a Friend 💌</div>
          <h2 id="letter-heading" className="serif-title">A Birthday Note for Rituja</h2>
        </div>

        <article className="ivory-letter-card" aria-label="Birthday letter from Parth">
          <div className="letter-top-bar">
            <div className="wax-seal">
              <span className="wax-seal-icon" aria-hidden="true">✦</span>
              <span>For Rituja · Birthday Keepsake</span>
            </div>
          </div>

          <div className="letter-body">
            <p className="letter-salutation">Hey Rituja,</p>
            <p style={{ fontWeight: 700, fontSize: '1.2rem', color: '#0F291E' }}>Happy Birthday! 🎂</p>
            <p>
              I wanted to do something a little different this time, so I made this tiny website especially for you.
            </p>
            <p>
              It has a little tree, a few memories, some cute chaos, and a whole lot of creative effort behind it. Nothing too fancy to explain — just something made with genuine thought.
            </p>
            <p>
              I hope this new year brings you happiness, good health, exciting opportunities, wonderful people, and plenty of moments worth <span className="word-highlight">cherishing</span>.
            </p>
            <p>
              Keep learning, keep growing, and never stop <span className="word-highlight">smiling</span> at the little things that make life beautiful.
            </p>
            <p>
              Have a supercalifragilisticexpialidocious kind of birthday — full of unexpected <span className="word-highlight">magic</span>, cheerful surprises, and extraordinary memories!
            </p>
            <p>
              Keep <span className="word-highlight">smiling</span>, keep shining, and keep being uniquely you.
            </p>
            <p>
              Wishing you an <span className="word-highlight">awesome</span> year ahead!
            </p>
            <p className="letter-signoff">— Parth 💙</p>
          </div>
        </article>

        <div className="gift-box-card">
          {!giftOpened ? (
            <div>
              <p style={{ color: '#F3DFA2', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Wait… there is one tiny box waiting beside the letter:
              </p>
              <button
                type="button"
                onClick={() => setGiftOpened(true)}
                className="gift-trigger-btn"
                aria-label="Tap to open your final birthday gift box"
              >
                <span style={{ fontSize: '3.2rem' }} role="img" aria-label="Gift box">🎁</span>
                <span>Tap the little gift box ✨</span>
              </button>
            </div>
          ) : (
            <div>
              <PeachCharacter variant="gift-celebration" speechText="Happy Birthday, Rituja! 🎂✨" />
              <p className="serif-title" style={{ fontSize: 'clamp(1.45rem, 3vw, 2rem)', color: '#FAF6EE', maxWidth: 560, margin: '0 auto 1.5rem' }}>
                “One little website. A handful of memories. And a birthday wish made especially for you. ✨”
              </p>
              <div className="btn-row">
                <button type="button" onClick={onReplay} className="btn-primary">
                  <span>Replay the little adventure ↻</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
