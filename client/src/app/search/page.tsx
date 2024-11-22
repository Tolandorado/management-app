"use client"

import { useSearchQuery } from '@/src/state/api';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import TaskCard from '../../components/TaskCard';
import ProjectCard from '../../components/ProjectCard';
import UserCard from '../../components/UserCard';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: searchResults, isLoading, isError } = useSearchQuery(searchTerm, {
        skip: searchTerm.length < 3,
    });

    const handleSubmit = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);
        }, 500);

    useEffect(() => {
        return handleSubmit.cancel;
    }, [handleSubmit.cancel])
  return (
    <div className='p-8'>
        <Header name='Search'/>
        <div>
            <input 
            type="text" 
            placeholder='Search...' 
            className='w-1/2 rounded border p-3 shadow dark:bg-dark-secondary dark:text-white dark:border-none'
            onChange={handleSubmit}/>
        </div>
        <div className='p-5'>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error search</p>}
        {!isLoading && !isError && searchResults && (
            <div className='dark:text-white'>
                {searchResults.tasks && searchResults.tasks?.length > 0 && (
                    <h2>Tasks</h2>
                )}
                {searchResults.tasks?.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))}

                {searchResults.projects && searchResults.projects?.length > 0 && (
                    <h2>Projects</h2>
                )}
                {searchResults.projects?.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}

                {searchResults.users && searchResults.users?.length > 0 && (
                    <h2>Users</h2>
                )}
                {searchResults.users?.map((user) => (
                    <UserCard key={user.userId} user={user}/>
                ))}
            </div>
        )}
        </div>
    </div>
  )
}

export default Search