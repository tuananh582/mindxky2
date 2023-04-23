import Task from "../task/task";
import React, { useState, useEffect } from 'react';
const TaskList = ({ todos, onCompleteTask, onDeleteTask }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);


  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  
  const currentTodos = todos.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() => {
   
    const totalPage = Math.ceil(todos.length / 5);
    setTotalPages(totalPage);
  }, [todos]);
  return (
    <div className="flex flex-col h-[500px] overflow-auto mt-4 mb-8">
      
      {currentTodos?.map((value, index) => (
      
        <Task
          key={index}
          id={index}
          status={value.status}
          title={value.title}
          todos={todos}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
       <div className="btn">

       
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
       
      </div>
    </div>
  );
};

export default TaskList;
