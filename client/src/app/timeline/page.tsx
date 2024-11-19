"use client"

import { useGetProjectsQuery } from '@/src/state/api';
import React, { useMemo, useState } from 'react'
import { useAppSelector } from '../redux';
import { DisplayOption, Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import Header from '../components/Header';

type TaskTypeItems = "task" | "milestone" | "project"

const Deadline = () => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const { data: projects, isLoading, isError } = useGetProjectsQuery();
   

    const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
       viewMode: ViewMode.Month,
       locale: "en",
    });

    const formattedTasks = useMemo(() => {
        return (
            projects?.map(
                (project) => ({
                    start: new Date(project.startDate as string),
                    end: new Date(project.endDate as string),
                    name: project.name,
                    id: `Project-${project.id}`,
                    type:"Project" as TaskTypeItems,
                    progress: 50,
                    isDisabled: false
                })) || []
        );
    }, [projects]);

    const handleViewChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setDisplayOptions((pr) => ({
            ...pr,
            viewMode: event?.target.value as ViewMode,
        }));
    };

    if (isLoading) return <div>Loading...</div>
    if (isError || !projects) return <div>Project loading error...</div>  
  return (
    <div className='max-w-full p-8'>
        <header className='mb-4 flex items-center justify-between'>
            <Header name="Projects Timeline" />
            <div className='relative inline-block w-64'>
                <select
                value={displayOptions.viewMode}
                onChange={handleViewChange}
                className='focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white'>
                    <option value={ViewMode.Month}>Month</option>
                    <option value={ViewMode.Week}>Week</option>
                    <option value={ViewMode.Day}>Day</option>
                </select>
            </div>
        </header>

        <div className='overflow-hidden rounded-md bg-white shadoow dark:bg-dark-secondary dark:text-white'>
            <div className='deadline'>
                <Gantt
                tasks={formattedTasks}
                {...displayOptions}
                columnWidth={displayOptions.viewMode === ViewMode.Month ? 150 : 100}
                listCellWidth="100px"
                projectBackgroundColor={isDarkMode ? "#101214": "#1f2937"} 
                projectProgressColor={isDarkMode ? "#1f2937" : "#aeb8c2"}
                projectProgressSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
                />
            </div>
        
        </div>
    </div>
  )
}

export default Deadline;