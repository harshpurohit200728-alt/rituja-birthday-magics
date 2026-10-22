import React from 'react';

export type PeachVariant = 'peek-envelope' | 'dance-duo' | 'bonk-gag' | 'photo-carrier' | 'gift-celebration';

interface PeachCharacterProps {
  variant: PeachVariant;
  speechText?: string;
}

export const PeachCharacter: React.FC<PeachCharacterProps> = ({ variant, speechText }) => {
  return (
    <div className="mochi-wrapper">
      {speechText && <div className="speech-bubble">{speechText}</div>}

      {variant === 'peek-envelope' && (
        <svg className="mochi-svg mochi-bounce" width="220" height="155" viewBox="0 0 220 155" role="img" aria-label="Cute Mochi Peach character peeking beside a glowing envelope">
          <defs>
            <radialGradient id="envGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#E5C158" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#E5C158" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="peachBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFE6EA" />
              <stop offset="100%" stopColor="#FADADD" />
            </linearGradient>
          </defs>
          <circle cx="110" cy="92" r="68" fill="url(#envGlow)" />
          <path d="M42 40 L45 47 L52 50 L45 53 L42 60 L39 53 L32 50 L39 47 Z" fill="#E5C158" />
          <path d="M180 35 L182 40 L187 42 L182 44 L180 49 L178 44 L173 42 L178 40 Z" fill="#FADADD" />
          <g>
            <path d="M78 42 Q72 22 90 32 Z" fill="#FADADD" stroke="#5C3A3A" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M142 42 Q148 22 130 32 Z" fill="#FADADD" stroke="#5C3A3A" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M110 26 Q116 14 123 20 Q117 28 110 26 Z" fill="#76C893" stroke="#2D5A3C" strokeWidth="1.8" />
            <ellipse cx="110" cy="64" rx="42" ry="36" fill="url(#peachBodyGrad)" stroke="#5C3A3A" strokeWidth="2.8" />
            <ellipse cx="86" cy="65" rx="7" ry="4.2" fill="#F2849E" opacity="0.75" />
            <ellipse cx="134" cy="65" rx="7" ry="4.2" fill="#F2849E" opacity="0.75" />
            <circle cx="95" cy="58" r="4.2" fill="#3B2323" />
            <circle cx="125" cy="58" r="4.2" fill="#3B2323" />
            <circle cx="93.5" cy="56.5" r="1.5" fill="#FFFFFF" />
            <circle cx="123.5" cy="56.5" r="1.5" fill="#FFFFFF" />
            <path d="M104 64 Q107 68 110 64 Q113 68 116 64" fill="none" stroke="#3B2323" strokeWidth="2.3" strokeLinecap="round" />
          </g>
          <g transform="translate(55, 76)">
            <rect x="0" y="0" width="110" height="68" rx="9" fill="#FAF6EE" stroke="#E5C158" strokeWidth="2.8" />
            <path d="M2 2 L55 38 L108 2" fill="#F3E5AB" stroke="#E5C158" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="55" cy="36" r="11" fill="#E26D85" stroke="#FAF6EE" strokeWidth="2" />
          </g>
          <ellipse cx="82" cy="77" rx="9" ry="6.5" fill="#FFE6EA" stroke="#5C3A3A" strokeWidth="2.4" />
          <ellipse cx="138" cy="77" rx="9" ry="6.5" fill="#FFE6EA" stroke="#5C3A3A" strokeWidth="2.4" />
        </svg>
      )}

      {variant === 'dance-duo' && (
        <svg className="mochi-svg" width="260" height="155" viewBox="0 0 260 155" role="img" aria-label="Two Mochi Peach characters performing a happy synchronized celebration dance">
          <circle cx="40" cy="35" r="4" fill="#E5C158" />
          <circle cx="225" cy="38" r="4.5" fill="#F4C2C2" />
          <path d="M130 14 L133 22 L141 25 L133 28 L130 36 L127 28 L119 25 L127 22 Z" fill="#E5C158" />
          <g className="mochi-dance" transform="translate(38, 35)">
            <path d="M18 22 Q12 5 28 14 Z" fill="#FADADD" stroke="#5C3A3A" strokeWidth="2.4" />
            <path d="M66 22 Q72 5 56 14 Z" fill="#FADADD" stroke="#5C3A3A" strokeWidth="2.4" />
            <ellipse cx="42" cy="52" rx="34" ry="31" fill="#FFE6EA" stroke="#5C3A3A" strokeWidth="2.6" />
            <path d="M26 44 Q30 39 34 44" fill="none" stroke="#3B2323" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M50 44 Q54 39 58 44" fill="none" stroke="#3B2323" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M36 51 Q42 59 48 51 Z" fill="#E26D85" stroke="#3B2323" strokeWidth="2" />
          </g>
          <g className="mochi-dance" transform="translate(138, 35)">
            <path d="M18 22 Q12 5 28 14 Z" fill="#EDE0D4" stroke="#5C3A3A" strokeWidth="2.4" />
            <path d="M66 22 Q72 5 56 14 Z" fill="#EDE0D4" stroke="#5C3A3A" strokeWidth="2.4" />
            <ellipse cx="42" cy="52" rx="34" ry="31" fill="#FAF3EB" stroke="#5C3A3A" strokeWidth="2.6" />
            <path d="M26 44 Q30 39 34 44" fill="none" stroke="#3B2323" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M50 44 Q54 39 58 44" fill="none" stroke="#3B2323" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M37 52 Q42 57 47 52" fill="none" stroke="#3B2323" strokeWidth="2.4" strokeLinecap="round" />
          </g>
        </svg>
      )}

      {variant === 'bonk-gag' && (
        <svg className="mochi-svg" width="275" height="160" viewBox="0 0 275 160" role="img" aria-label="Playful cartoon gag where one Mochi character gently bonks the other with a soft toy squeaky hammer">
          <g transform="translate(22, 42)">
            <ellipse cx="40" cy="52" rx="33" ry="30" fill="#FFE6EA" stroke="#5C3A3A" strokeWidth="2.6" />
            <circle cx="29" cy="45" r="3.8" fill="#3B2323" />
            <circle cx="51" cy="45" r="3.8" fill="#3B2323" />
            <path d="M35 53 Q40 57 45 53" fill="none" stroke="#3B2323" strokeWidth="2.3" strokeLinecap="round" />
          </g>
          <g className="bonk-mallet">
            <line x1="92" y1="84" x2="132" y2="52" stroke="#D4A373" strokeWidth="5" strokeLinecap="round" />
            <rect x="120" y="34" width="32" height="22" rx="10" transform="rotate(-25 136 45)" fill="#F2849E" stroke="#5C3A3A" strokeWidth="2.4" />
          </g>
          <g className="dizzy-stars">
            <text x="148" y="32" fill="#E5C158" fontSize="16" fontWeight="bold">★</text>
            <text x="176" y="24" fill="#FADADD" fontSize="14" fontWeight="bold">✦</text>
            <text x="202" y="34" fill="#E5C158" fontSize="16" fontWeight="bold">★</text>
          </g>
          <g className="mochi-wobble" transform="translate(148, 48)">
            <ellipse cx="42" cy="50" rx="36" ry="27" fill="#FAF3EB" stroke="#5C3A3A" strokeWidth="2.6" />
            <path d="M25 41 L33 45 L25 49" fill="none" stroke="#3B2323" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M59 41 L51 45 L59 49" fill="none" stroke="#3B2323" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M34 55 Q38 52 42 55 Q46 58 50 55" fill="none" stroke="#3B2323" strokeWidth="2.3" strokeLinecap="round" />
          </g>
        </svg>
      )}

      {variant === 'photo-carrier' && (
        <svg className="mochi-svg mochi-bounce" width="130" height="86" viewBox="0 0 130 86" role="img" aria-label="Mochi Peach holding a tiny photograph">
          <ellipse cx="65" cy="48" rx="30" ry="26" fill="#FFE6EA" stroke="#5C3A3A" strokeWidth="2.4" />
          <circle cx="55" cy="43" r="3.4" fill="#3B2323" />
          <circle cx="75" cy="43" r="3.4" fill="#3B2323" />
          <path d="M61 49 Q65 53 69 49" fill="none" stroke="#3B2323" strokeWidth="2.2" strokeLinecap="round" />
          <g transform="translate(88, 34) rotate(14)">
            <rect x="0" y="0" width="24" height="28" rx="3" fill="#FAF6EE" stroke="#C59B27" strokeWidth="1.8" />
            <rect x="3" y="3" width="18" height="16" fill="#76C893" />
          </g>
        </svg>
      )}

      {variant === 'gift-celebration' && (
        <svg className="mochi-svg" width="220" height="110" viewBox="0 0 220 110" role="img" aria-label="Mochi Peach characters celebrating beside the gift box">
          <g className="mochi-dance" transform="translate(22, 20)">
            <ellipse cx="32" cy="45" rx="26" ry="23" fill="#FFE6EA" stroke="#5C3A3A" strokeWidth="2.4" />
            <circle cx="24" cy="40" r="3" fill="#3B2323" />
            <circle cx="40" cy="40" r="3" fill="#3B2323" />
            <path d="M28 46 Q32 50 36 46" fill="none" stroke="#3B2323" strokeWidth="2.2" strokeLinecap="round" />
          </g>
          <path d="M110 22 L114 34 L126 38 L114 42 L110 54 L106 42 L94 38 L106 34 Z" fill="#E5C158" />
          <g className="mochi-dance" transform="translate(132, 20)">
            <ellipse cx="32" cy="45" rx="26" ry="23" fill="#FAF3EB" stroke="#5C3A3A" strokeWidth="2.4" />
            <circle cx="24" cy="40" r="3" fill="#3B2323" />
            <circle cx="40" cy="40" r="3" fill="#3B2323" />
            <path d="M28 46 Q32 50 36 46" fill="none" stroke="#3B2323" strokeWidth="2.2" strokeLinecap="round" />
          </g>
        </svg>
      )}
    </div>
  );
};
