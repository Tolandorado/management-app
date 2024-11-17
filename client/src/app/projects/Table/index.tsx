import { useGetTasksQuery } from '@/src/state/api';
import React from 'react'
import Header from '../../components/Header';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { dataGridClassNames, dataGridSxStyles } from '@/src/lib/utils';
import { useAppSelector } from '../../redux';
import { PlusSquare } from 'lucide-react';

type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void; 
}

const colums: GridColDef[] = [
    {
        field: "title",
        headerName: "Title",
        width: 100,
    },
    {
        field: "description",
        headerName: "Description",
        width: 200,
    },
    {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => (
            <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                {params.value}
            </span>
        ),   
    },
    {
        field: "priority",
        headerName: "Priority",
        width: 75,
    },
    {
        field: "tags",
        headerName: "Tags",
        width: 120,
    },
    {
        field: "startDate",
        headerName: "Start Date",
        width: 100,
    },
    {
        field: "dueDate",
        headerName: "Due Date",
        width: 100,
    },
    {
        field: "author",
        headerName: "Author",
        width: 150,
        renderCell: (params) => params.value.username || "Unknown"
    },
    {
        field: "assignee",
        headerName: "Assignee",
        width: 150,
        renderCell: (params) => params.value.username || "Unassigned"
    },
]

const Table = ({id, setIsModalNewTaskOpen}: Props) => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)
    const { 
        data:
        tasks,
        isLoading,
        error } = useGetTasksQuery({projectId: Number(id)})
    

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Task loading error...</div> 
  return (
    <div className='h-[540px] w-full px-4 pb-8 xl:px-6'>
    <div className='pt-5'>
        <Header name='Table view' 
         buttonComponent={
            <button
            className='flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600'
            onClick={() => setIsModalNewTaskOpen(true)}
            ><PlusSquare size={18} className='mr-2'/>New Task</button>
        }
        isSmallText/>
    </div>
    <DataGrid 
    rows={tasks || []}
    columns={colums}
    className={dataGridClassNames}
    sx={dataGridSxStyles(isDarkMode)}
    />
    </div>
  )
}

export default Table