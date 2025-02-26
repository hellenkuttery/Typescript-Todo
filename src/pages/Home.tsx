import { useEffect, useState } from "react";
import Header from "../components/Header";
import Addtodo from "./../components/Addtodo";
import TodoList from "./../components/TodoList";
import axios from "axios";

const url = "https://6350438378563c1d82bde74a.mockapi.io/api/task";

//Interface objeler için

interface ITodo {
  task: string;
  isDone: boolean;
  id: string;
}

// Type fonksyionlar için kullanıyoruz.

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTodos(data);
  };

  // type AddFn=(task:string)=>Promise<void>;

  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleTodo: ToggleFn = async (todo) => {
    console.log(todo);
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo:DeleteFn=async(id)=>{
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header />
      <Addtodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
export default Home;
