import Link from 'next/link';
import React from 'react';

const ZeroLength = () => {
    return (
        <div>
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">📭 No data found</p>
                <Link href="/" className="text-blue-500 underline">Go Home</Link>
            </div>
        </div>
    );
};

export default ZeroLength;