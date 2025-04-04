import {
    createBrowserRouter,
    RouterProvider,
    

} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../component/About";
import Blog from "../component/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../component/Signup";
import Login from "../component/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../component/Logout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
    },
    {
        path: "/admin/dashboard/",
        element: <DashBoardLayout/>,
        children: [
            {
                path: "/admin/dashboard/",
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks/>
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },  
        ]
    },
    {
        path: "/sign-up",
        element: <Signup/>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "/logout",
        element: <Logout/>
    }
])

export default router


