'use client'
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'

const Book = () => {
    const [books, setBooks]=useState([]);
    useEffect(()=> {
        const query=`*[_type=="books"]{
        book_name
        }`;
        const getBook=async ()=>{
            const res= await client.fetch(query);
            setBooks(res);
        };
        getBook();
    },[]);
    console.log(books);

  return (
    <div>Book</div>
  )
}

export default Book;