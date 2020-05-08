import React from 'react';
import { Bubble } from './Bubble';
import { FaMicrophone, FaMicrophoneSlash, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import './conversation.css';

function Item({ children }) {
    return (
        <div className="conversation-item">
            {children}
        </div>
    )
}

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
            <Item>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Item>
            <Item>
                <div className="bubble-row">
                    {bubbles}
                </div>
            </Item>
            <Item>
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
            </Item>
        </div>
    )
}