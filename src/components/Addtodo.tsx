import React, { useState } from "react";
import { Box, Button, TextField, Paper } from "@mui/material";

interface IaddTodoProps {
  addTodo:AddFn
}

const Addtodo: React.FC<IaddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        maxWidth: 600,
        mx: "auto",
        mt: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          value={task}
          onChange={handleChange}
          placeholder="Enter a task..."
          variant="outlined"
          fullWidth
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#fff",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default Addtodo;
