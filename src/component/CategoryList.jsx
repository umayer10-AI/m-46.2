"use client"
import { Data } from '@/context/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const CategoryList = ({p,id}) => {

    const {s,setS} = useContext(Data)
    // console.log(s)

    return (
        <div>
            <Link href={`/cart/${p.category_id}`} onClick={() => setS(p.category_id)} className={`btn w-full ${id===p.category_id && "btn-warning"}`}>{p.category_name}</Link>
        </div>
    );
};

export default CategoryList;