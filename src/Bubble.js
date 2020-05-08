import React from 'react';
import './bubble.css';

export function Bubble({ active, who }) {
return <div className={`bubble ${active ? 'active' : ''} ${who}`}>{who}</div>
}