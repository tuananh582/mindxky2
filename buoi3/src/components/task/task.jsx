import React, { useState } from "react";
import Input from "../input/input";

const Task = ({ status, title, id, onDeleteTask, onCompleteTask, todos }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex justify-start items-center my-4">
      <div className="rounded-full w-[20px] h-[20px] overflow-hidden border border-neutral-400">
        <input
          type="checkbox"
          className="appearance-none w-[20px] h-[20px] checked:bg-blue-500"
          value={status}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            onCompleteTask({ title: title, status: e.target.checked });
          }}
        />
      </div>
      <div className="flex justify-between w-full">
        {/* Không phải là edit task thì hiển thị tên */}
        {!isEdit ? (
          <div
            className={`pl-6 text-lg text-stone-950 ${
              status ? "line-through decoration-4" : ""
            }`}
          >
            {title}
          </div>
        ) : (
          /// nếu là edit task == true thì hiển thị ô input
          <React.Fragment>
            <Input />
          </React.Fragment>
        )}
        {isEdit ? null : (
          <div>
            <button
              className="mr-5"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              cập nhật
            </button>
            <button
              onClick={() => {
                onDeleteTask(id);
              }}
            >
              xóa
            </button>
            <button>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
