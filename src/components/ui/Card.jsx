import React from 'react';

export const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`card-3d ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
