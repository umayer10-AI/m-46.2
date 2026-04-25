import Link from 'next/link';
import React from 'react';

const CategoryList = ({p}) => {
    return (
        <div>
            <Link href={`/cart/${p.category_id}`} className='btn w-full'>{p.category_name}</Link>
        </div>
    );
};

export default CategoryList;