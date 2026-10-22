import React, { useState, useEffect } from 'react';
import { PeachCharacter, PeachVariant } from './PeachCharacter';

interface InvitationProps {
  onProceedToTree: () => void;
}

export const Invitation: React.FC<InvitationProps> = ({ onProceedToTree }) => {
  const [mode, setMode] = useState<'default' | 'yes' | 'no'>('default');
  const [showMaybeLater, setShowMaybeLater] = useState(false);
  const [typedText, setTypedText] = useState('');

  const targetPrompt =
    mode === 'no'
      ? "Arre, suno na! 😂 There's a tiny surprise waiting!"
      : mode === 'yes'
      ? 'Step right into your enchanted birthday forest, Rituja! ✨🌿'
      : 'Rituja, suno… I made a little something for you. Want to see? 💌';

  useEffect(() => {
    setTypedText('');
    let idx = 0;
    const timer = window.setInterval(() => {
      idx += 1;
      setTypedText(targetPrompt.slice(0, idx));
      if (idx >= targetPrompt.length) {
        window.clearInterval(timer);
      }
    }, 26);
    return () => window.clearInterval(timer);
  }, [targetPrompt]);

  const handleYes = () => {
    setMode('yes');
    setShowMaybeLater(false);
    window.setTimeout(() => {
      onProceedToTree();
    }, 1200);
  };

  const handleNo = () => {
    setMode('no');
    setShowMaybeLater(false);
  };

  const variantMap: Record<'default' | 'yes' | 'no', PeachVariant> = {
    default: 'peek-envelope',
    yes: 'dance-duo',
    no: 'bonk-gag',
  };

  const speechMap: Record<'default' | 'yes' | 'no', string> = {
    default: 'Suno suno! ✨',
    yes: 'Yay! Follow us to the Enchanted Forest! ✨🎉',
    no: showMaybeLater ? 'Take your time! 💗' : 'Bonk! Arre, suno na! 😂✨',
  };

  return (
    <section className="scene-section active" aria-labelledby="invitation-heading">
      <div className="glass-panel">
        <div className="eyebrow-badge">✨ A Secret Birthday Storybook ✨</div>
        <h1 id="invitation-heading" className="serif-title">
          A Little World Made Just for Rituja ✨
        </h1>
        <p className="subtitle-text">Some surprises are better experienced than explained.</p>
        <p className="handwritten-sig">Made with a little extra thought.</p>

        <div className="invitation-stage">
          <PeachCharacter variant={variantMap[mode]} speechText={speechMap[mode]} />
        </div>

        <div className="typewriter-box" aria-live="polite">
          <p className="typewriter-text">
            <span>{typedText}</span>
            <span className="cursor-blink" aria-hidden="true" />
          </p>
        </div>

        {mode !== 'no' ? (
          <div className="btn-row">
            <button type="button" onClick={handleYes} className="btn-primary">
              <span>YES, SHOW ME! ✨</span>
            </button>
            <button type="button" onClick={handleNo} className="btn-secondary">
              <span>NO, NOT TODAY 🙈</span>
            </button>
          </div>
        ) : (
          <div className="btn-row">
            <button type="button" onClick={handleYes} className="btn-primary">
              <span>Okay, show me! ✨</span>
            </button>
            <button
              type="button"
              onClick={() => setShowMaybeLater(true)}
              className="btn-secondary"
            >
              <span>Maybe later 💗</span>
            </button>
          </div>
        )}

        {showMaybeLater && (
          <div style={{ marginTop: '1.25rem', padding: '1.15rem', borderRadius: 16, background: 'rgba(250, 246, 238, 0.07)', border: '1px solid rgba(229, 193, 88, 0.28)' }}>
            <p style={{ marginBottom: '0.75rem' }}>
              No rush at all! This little world is saved right here whenever you feel like taking a peek. 🌿💗
            </p>
            <button type="button" onClick={handleYes} className="btn-primary">
              <span>Actually, show me now! ✨</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
