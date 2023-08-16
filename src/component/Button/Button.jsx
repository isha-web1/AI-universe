import React from 'react';

const Button = ({children}) => {
    return (
        <div className='mt-8'>
            <button className="btn btn-active btn-secondary">{children}</button>
        </div>
    );
};

export default Button;