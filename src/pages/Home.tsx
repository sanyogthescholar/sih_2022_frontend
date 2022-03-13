import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
import { getTodos, addTicket } from "../API";
import { AddToHomeScreen } from "react-pwa-add-to-homescreen";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
//import registerServiceWorker from ".../serverWorker";
//registerServiceWorker();
//import '../App.css';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<ITicket[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITicket[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITicket): void => {
    e.preventDefault();
    addTicket(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Ticket not booked");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  /*const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! ToDo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! ToDo not deleted");
        }
        setTodos(data.todos);
      })
      .catch(err => console.log(err))
  }*/

  return (
    <main>
      <MainPage />
      <div className="App">
        <AddTodo saveTodo={handleSaveTodo} />
        <AddToHomeScreen delayNotify={10} />
      </div>
      <Footer />
    </main>
  );
};
//
export default Home;
