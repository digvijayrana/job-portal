import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";

import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Components/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/post-job",
        element: <CreateJob />
      },
      {
        path: "/my-job",
        element: <MyJobs />
      },
      {
        path: "/salary",
        element: <SalaryPage />
      }, {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader:({params})=> fetch(`http://localhost:4000/api/v1/jobs/getJobById/${params.id}`).then((res)=> res.json()).then((result)=>   result)

      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
]);






