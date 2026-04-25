import Context from '@/context/Context';
import React from 'react';

const MyProvider = ({children}) => {
    return (
        <div>
            <Context>
                {children}
            </Context>
        </div>
    );
};

export default MyProvider;