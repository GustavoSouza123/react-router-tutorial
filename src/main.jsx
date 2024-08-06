import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root, {
    loader as rootLoader,
    action as rootAction,
} from './routes/root';
import Contact, { loader as contactLoader } from './routes/contact';
import ErrorPage from './error-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
