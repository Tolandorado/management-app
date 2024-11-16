"use client";

import React, { useState } from 'react'
import ProjectHeader from '@/src/app/projects/ProjectHeader';
import BoardView from '../Board';
import List from '../List';
import Deadline from '../Deadline';
import Table from '../Table';

type Props = {
    params: {id: string};
}

const Project = ({params}: Props) => {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
        {/* Modal form for new task */}
     <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} /> 
     
      {  activeTab === "Board" && (
            <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}

      {  activeTab === "List" && (
            <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}

      {  activeTab === "Deadline" && (
            <Deadline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}

      {  activeTab === "Table" && (
            <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
    </div>
  )};

export default Project;