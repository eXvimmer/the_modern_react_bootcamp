import { FC, useState } from "react";
import { AppBar, Paper, Toolbar, Typography, Grid } from "@mui/material";
import TodoList from "../TodoList";
import { ITodo } from "../TodoItem";
import TodoForm from "../TodoForm";

const initialTodos: ITodo[] = [
  { id: "1", task: "finish the app", completed: false },
  { id: "2", task: "Complete the react colors app", completed: true },
  { id: "3", task: "watch the Great", completed: false },
];

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);

  // useEffect(() => console.log(todos), [todos]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: (Math.random() * Math.random() ** 3).toString(16),
        task: text,
        completed: false,
      },
    ]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" mt="1rem">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
