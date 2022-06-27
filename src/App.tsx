import { useEffect, useState, FC } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import User from './components/user/user';
import { IRoute } from './routeTypes';

const App: FC = () => {

  const routes: IRoute[] = [
    {
        path: "/",
        element: <Login />,
        name: "Login"
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        name: "Dashboard"
    },
    {
        path: `/user/:data`,
        element: <User />,
        name: "User"
    }
  ]

  const [data, setData] = useState<string | null>("")

  useEffect(() => {
    setData(localStorage.getItem("selected_user_id"))
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} element={route.element} key={route.name}/>
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
