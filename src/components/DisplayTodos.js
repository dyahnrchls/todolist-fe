import React, { useCallback, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";
import {
  fetchApiTodos,
  updateApiTodos,
  deleteApiTodos,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    todos: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(deleteApiTodos(id)),
    updateTodo: (id, body) => dispatch(updateApiTodos(id, body)),
    getTodos: (params) => dispatch(fetchApiTodos(params)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("all");

  const getTodos = useCallback(() => {
    let params = {};
    if (sort !== "all") params = { status: sort };
    props.getTodos(params);
  }, [sort]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  useEffect(() => {
    if (props.todos?.refreshData) {
      let params = {};
      if (sort !== "all") params = { status: sort };
      props.getTodos(params);
    }
  }, [props.todos?.refreshData]);

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
          style={{
            background: sort === "all" && "#271c6c",
            color: sort === "all" && "white",
          }}
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
          style={{
            background: sort === "active" && "#271c6c",
            color: sort === "active" && "white",
          }}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
          style={{
            background: sort === "completed" && "#271c6c",
            color: sort === "completed" && "white",
          }}
        >
          Completed
        </motion.button>
      </div>
      <div>
        {" "}
        <ul>
          <AnimatePresence>
            {/* for all items */}
            {props.todos?.data?.length > 0
              ? props.todos?.data?.map((item) => {
                  return (
                    <TodoItem
                      key={item._id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                      todos={props.todos}
                    />
                  );
                })
              : null}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
