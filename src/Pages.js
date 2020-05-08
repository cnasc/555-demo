import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import './pages.css';
import Conversation from './Conversation';

const pages = [
    ({ style }) => {
        return (
            <animated.div className="a-page" style={{ ...style }}>
                <Conversation
                    isMuted
                    title="First Conversation"
                    description="This is the first conversation"
                />
            </animated.div>
        );
    },
    ({ style }) => {
        return (
            <animated.div className="a-page" style={{ ...style }}>
                <Conversation
                    title="Second Conversation"
                    description="This is the second conversation"
                />
            </animated.div>
        );
    },
    ({ style }) => {
        return (
            <animated.div className="a-page" style={{ ...style }}>
                <Conversation
                    isMuted
                    title="Third Conversation"
                    description="This is the third conversation"
                />
            </animated.div>
        );
    },
]

export default function Pages() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (index + 1) % pages.length;
            set(newIndex)
        }, 2000);

        return () => clearInterval(interval);
    });
    return (
        <div className="page" onClick={onClick}>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} />
            })}
        </div>
    )
}