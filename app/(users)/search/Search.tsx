'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={search}
        placeholder='Enter the Search term'
        className="bg-gray-50 text-gray-900 text-sm rounded-lg border-blue-500 focus:ring-blue-500
          focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-40 mr-2 mb-1
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-500
            md:w-2/3 lg:w-1/3 sm:w-96 xs:w-2/3"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn text-white bg-sky-600
          hover:bg-sky-400 hover:text-white
            hover:rounded-xl transition-all duration-300
            cursor-pointer font-bold py-2 px-4 rounded-lg'>
        Search
      </button>
    </form>
  )
}

export default Search