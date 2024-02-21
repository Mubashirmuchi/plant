import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Authlayout from "./Layout/Authlayout";
import Userlayout from "./Layout/Userlayout";
import Homepage from "./Pages/User/Homepage";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Detailpage from "./Pages/User/DetailPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Userlayout />}>
                <Route path="" element={<Homepage />} />
                <Route path="plant/:id" element={<Detailpage />} />
            </Route>

            <Route path="/" element={<Authlayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
