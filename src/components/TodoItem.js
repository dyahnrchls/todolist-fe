import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose, IoCheckbox } from "react-icons/io5";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo } = props;

  const inputRef = useRef(true);

  const [isEdit, setIsEdit] = useState(false);

  const changeFocus = () => {
    setIsEdit(true);
  };

  const update = (id, body, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo(id, body);
      setIsEdit(false);
    }
  };

  const updateStatus = (item) => {
    const body = {
      name: item.name,
      status: item.status === "completed" ? "active" : "completed",
    };
    updateTodo(item._id, body);
  };

  return (
    <motion.li
      // initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      // exit={{
      //   x: "-60vw",
      //   scale: [1, 0],
      //   transition: { duration: 0.5 },
      //   backgroundColor: "rgba(255,0,0,1)",
      // }}
      key={item.id}
      className="card"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        {item.status === "completed" ? (
          <IoCheckbox
            style={{
              height: 25,
              width: 25,
              background: "white",
              cursor: "pointer",
            }}
            onClick={() => updateStatus(item)}
          />
        ) : (
          <div
            style={{
              height: 20,
              width: 20,
              border: "0.5px solid gray",
              cursor: "pointer",
              marginRight: 5,
              borderRadius: 4,
            }}
            onClick={() => updateStatus(item)}
          />
        )}
        {!isEdit ? (
          <p
            style={{
              textDecoration:
                item.status === "completed" ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {item.name}
          </p>
        ) : (
          <input
            ref={inputRef}
            defaultValue={item.name}
            onKeyDown={(e) =>
              update(
                item._id,
                { name: inputRef.current.value, status: item.status },
                e
              )
            }
          />
        )}
      </div>
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <AiFillEdit />{" "}
        </motion.button>
        <motion.button
          // whileHover={{ scale: 1.4 }}
          // whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item._id)}
        >
          {" "}
          <IoClose />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;
