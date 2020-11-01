import React from 'react';

const Box = ({title, children}) => {
    return (
        <div className="Box">
            <h6 className="Box__Title">
                {title}
            </h6>
            <div className="Box__Container">
                {children}
            </div>
        </div>
    );
};

export default Box;