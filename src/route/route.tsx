import App from "@/App";
import EditEvent from "@/components/EventItemManagement/EditEvent";
import AdminLayout from "@/layout/AdminLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import EventItemManagement from "@/pages/EventItemManagement";
import Home from "@/pages/Home";
import ServicesManagement from "@/pages/ServicesManagement";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
           
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
    
            {
                path:'/admin',
                element: <EventItemManagement/>
            },
            {
                path:'event-item-management',
                element: <EventItemManagement/>
            },
            {
                path:'event-item-management/:id',
                element: <EditEvent/>
            },
            {
                path:'services-management',
                element: <ServicesManagement/>
            }
           
        ]
    }
])