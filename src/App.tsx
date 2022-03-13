import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTicket } from './API'
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';
import MainPage from './components/MainPage'
import Footer from "./components/Footer";
import QRCode from "react-qr-code";
import {encode, decode} from 'node-base64-image';
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITicket[]>([])
  let [code, qr_code] = useState();
  var [showForm, setshowForm] = React.useState(true)

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITicket[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err))
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITicket): void => {
    e.preventDefault()
    addTicket(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Ticket not booked")
        }
        //setTodos(data.todos);
        console.log(data)
        //showForm = false
        //console.log(data)
        //decode(data.ticket, { fname: './photos/example', ext: 'jpg' });
        var matches = data.ticket.toString().match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        var response = {};
        //response.type = matches[1];
        const url = window.URL.createObjectURL(new Blob([data.ticket]));
        //const link = document.createElement('a');
        //link.href = url;
        //link.setAttribute('download', 'ticket.png');
        const linkSource = `${data.ticket}`;
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);

        downloadLink.href = linkSource;
        //downloadLink.target = '_self';
        downloadLink.download = "ticket.png";
        downloadLink.click(); 
        //document.body.appendChild(link);
        //link.click();
      })
      .catch((err) => console.log(err));
  };
  let mystyle= {
    minHeight:"78vh"
  }
  const forceUpdate = useForceUpdate();
  return (
    <main>
      <MainPage />
      <div className="App" style={mystyle}>
      <AddTodo saveTodo={handleSaveTodo} />
      <AddToHomeScreen delayNotify={10} />
      </div>
      <Footer />
    </main>
  );
};
//
export default App;