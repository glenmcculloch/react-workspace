import React from 'react';

const Link = ({ href, className, children }) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        window.history.pushState({}, '', href);

        // creates a new event for propagation
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a href={href} className={className} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;