import { Task, useGetTasksQuery } from '@/src/state/api';
import TaskCard from "@/src/components/TaskCard";
import React from 'react'
import Header from '../../../components/Header';
import { PlusSquare } from 'lucide-react';

type ListProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const ListView = ({id, setIsModalNewTaskOpen}: ListProps) => {
    const { data: tasks, error, isLoading } = useGetTasksQuery({ projectId: Number(id) });
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Task list loading error...</div>    
  return (
    <div className='px-4 pb-8 xl:px-6'>
        <div className='pt-5'>
            <Header name="List"
            buttonComponent={
                <button
                className='flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600'
                onClick={() => setIsModalNewTaskOpen(true)}
                ><PlusSquare size={18} className='mr-2'/>New Task</button>
            }
            isSmallText
            />
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
            {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
        </div>    
    </div>
  )
}

export default ListView