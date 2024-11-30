import React, { useEffect } from 'react';

const Base64Image = ({ base64String, classsName = '' }) => {
    return (
        <div>
            <img 
                src={`data:image/png;base64,${base64String}`} 
                alt="Base64 representation" 
                className={classsName}
            />
        </div>
    );
};

export const Base64ImageWrapper = ({ base64String, className, ...props }) => {
    return <Base64Image base64String={base64String} classsName={className} {...props} />;
};


export default Base64Image;