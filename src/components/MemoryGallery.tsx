import React, { useState } from 'react';
import { MEMORIES } from '../data/memories';
import { PeachCharacter } from './PeachCharacter';

interface MemoryGalleryProps {
  onProceedToLetter: () => void;
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ onProceedToLetter }) => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const activePhoto = lightboxIdx !== null ? MEMORIES[lightboxIdx] : null;

  return (
    <section className="scene-section active" aria-labelledby="gallery-heading">
      <div className="gallery-container">
        <div style={{ textAlign: 'center', maxWidth: 660 }}>
          <div className="eyebrow-badge">📸 Chapter Three · The Scrapbook 📸</div>
          <h2 id="gallery-heading" className="serif-title">Little moments. Lovely memories.</h2>
          <p className="subtitle-text">Some photographs keep a little more than a picture.</p>
          <PeachCharacter variant="photo-carrier" speechText="Memory unlocked!" />
        </div>

        <div className="scrapbook-grid">
          {MEMORIES.map((item, idx) => (
            <article
              key={item.id}
              className="polaroid-card"
              tabIndex={0}
              role="button"
              onClick={() => setLightboxIdx(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIdx(idx);
                }
              }}
              aria-label={`View larger photo: ${item.caption}`}
            >
              <div className="washi-tape" />
              <div className="polaroid-img-wrap">
                <img
                  className="polaroid-img"
                  src={item.imagePath}
                  alt={item.altText}
                  loading="lazy"
                />
                <span className="zoom-pill">🔍 Tap to enlarge</span>
              </div>
              <div className="polaroid-meta">
                <span className="polaroid-tag">{item.tag}</span>
                <p className="polaroid-caption">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-footer-card">
          <div className="mochi-wrapper" style={{ marginBottom: '0.45rem' }}>
            <div className="speech-bubble">One last surprise…</div>
          </div>
          <h3 className="serif-title" style={{ fontSize: '1.95rem', marginBottom: '1.15rem' }}>
            Parth, Mitra… ready for one last little surprise?
          </h3>
          <button type="button" onClick={onProceedToLetter} className="btn-primary">
            <span>Open your birthday letter 💌</span>
          </button>
        </div>
      </div>

      {activePhoto && lightboxIdx !== null && (
        <div
          className="modal-backdrop open"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIdx(null);
          }}
        >
          <div className="lightbox-dialog">
            <div className="lightbox-top">
              <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0F291E' }}>
                Memory {lightboxIdx + 1} of {MEMORIES.length}
              </span>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setLightboxIdx(null)}
              >
                Close ✕
              </button>
            </div>
            <div className="lightbox-img-stage">
              <img
                className="lightbox-img"
                src={activePhoto.imagePath}
                alt={activePhoto.altText}
              />
            </div>
            <div className="lightbox-bottom">
              <div>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#526B5C', fontWeight: 700 }}>
                  {activePhoto.tag}
                </p>
                <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.65rem', fontWeight: 700, color: '#0F291E' }}>
                  {activePhoto.caption}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setLightboxIdx((lightboxIdx - 1 + MEMORIES.length) % MEMORIES.length)}
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setLightboxIdx((lightboxIdx + 1) % MEMORIES.length)}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
