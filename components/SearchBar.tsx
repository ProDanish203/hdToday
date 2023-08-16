"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const SearchBar = () => {

    const [title, setTitle] = useState("Harry Potter");
    const router = useRouter();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateSearchParams(title);
        setTitle("");
    }

    useEffect(() => {
        handleSubmit
    }, [])

    const updateSearchParams = (title: string,) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(title){
        searchParams.set('title', title)
      }else{
        searchParams.delete('title');
      }

      const newPath = `${window.location.pathname}?${searchParams.toString()}` 
      router.push(newPath);
    }

  return (
    <>
    <form
    onSubmit={handleSubmit}
    className='text-center'>
        <input type="text" placeholder='Search For Movies' 
        className='bg-accent text-bg outline-none shadow-md rounded-full md:px-5 px-3 py-2.5 max-w-[500px] w-full mx-auto'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    </form>
    </>
  )
}
