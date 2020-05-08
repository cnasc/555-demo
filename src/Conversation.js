import React from 'react';
import { Bubble } from './Bubble';
import { FaMicrophone, FaMicrophoneSlash, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import './conversation.css';

export default function Conversation({
    title,
    description,
    isMuted,
}) {
    
    const bubbles = [
        <Bubble key="you" who="you" active={!isMuted} />,
        <Bubble key="them" who="them" active={isMuted} />,
    ]

    return (
        <div className="conversation-wrapper">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="bubble-row">
                {bubbles}
            </div>
            <div className="icon-row">
                <div className="icon red">
                    <FaThumbsDown />
                </div>
                <div className="icon green">
                    <FaThumbsUp />
                </div>
            </div>
            <div className="icon-row">
                {isMuted && (
                    <div className="disabled-icon"><FaMicrophoneSlash /></div>
                )}
                {!isMuted && (
                    <div className="icon orange"><FaMicrophone /></div>
                )}
            </div>
        </div>
    )
}