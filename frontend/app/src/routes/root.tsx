import { createBrowserRouter } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import { ChannelList } from '../components/ChannelList/ChannelList';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/channels/new',
    element: <Form />
  },
  {
    path: '/channels',
    element: <ChannelList />
  }
]);
