// import { Grid, Typography } from "@mui/material";
// import React from "react";
// import TodoItemList from "./TodoItemList";

// interface ITodoListProps {
//   todos: ITodo[];
//   toggleTodo: ToggleFn;
//   deleteTodo:DeleteFn
// }
// const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo,deleteTodo }) => {
//   const inProggress = todos.filter((todo) => todo.isDone === false);
//   const completed = todos.filter((todo) => todo.isDone === true);
//   return (
//     <Grid
//       container
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "0.5rem",
//         mt: 3,
//       }}
//     >
//       <Grid
//         size={{ xs: 12, sm: 8, md: 5 }}
//         position="relative"
//         className="myscrool scrool-progress"
//         sx={{
//           minHeight: "350px",
//           maxHeight: "350px",
//           overflow: "auto",
//           border: "1px solid purple",
//           borderRadius: "0.5rem",
//         }}
//       >
//         <Typography
//           className="title"
//           color="secondary"
//           align="center"
//           variant="h4"
//         >
//           InProgress Todos
//         </Typography>
//         {inProggress.length ? (
//           inProggress.map((todo) => (
//             <TodoItemList key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
//           ))
//         ) : (
//           <Typography>No Task</Typography>
//         )}
//       </Grid>
//       {/* ---- */}
//       <Grid
//         size={{ xs: 12, sm: 8, md: 5 }}
//         position="relative"
//         className="myscrool scrool-progress"
//         sx={{
//           minHeight: "350px",
//           maxHeight: "350px",
//           overflow: "auto",
//           border: "1px solid purple",
//           borderRadius: "0.5rem",
//         }}
//       >
//         <Typography
//           className="title"
//           sx={{ color: "green" }}
//           align="center"
//           variant="h4"
//         >
//           Completed Todos
//         </Typography>
//         {completed.length ? (
//           completed.map((todo) => (
//             <TodoItemList key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
//           ))
//         ) : (
//           <Typography>No Task</Typography>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export default TodoList;


import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoItemList from "./TodoItemList";

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  const inProgress = todos.filter((todo) => !todo.isDone);
  const completed = todos.filter((todo) => todo.isDone);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        mt: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        sx={{
          margin:"1rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          p: 2,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography color="secondary" align="center" variant="h5" sx={{ mb: 1 }}>
          In Progress Todos
        </Typography>
        {inProgress.length ? (
          inProgress.map((todo) => (
            <TodoItemList key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))
        ) : (
          <Typography align="center" sx={{ fontSize: "1rem", color: "#888" }}>
            No Task
          </Typography>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        className="myscroll scroll-progress"
        sx={{
          margin:"1rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          p: 2,
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Typography sx={{ color: "green" }} align="center" variant="h5" >
          Completed Todos
        </Typography>
        {completed.length ? (
          completed.map((todo) => (
            <TodoItemList key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))
        ) : (
          <Typography align="center" sx={{ fontSize: "1rem", color: "#888" }}>
            No Task
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;

