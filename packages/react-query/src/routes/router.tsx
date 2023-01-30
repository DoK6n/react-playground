import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import WritePost from '../components/WritePost';
import Me from './Me';
import Root from './Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='me' element={<Me />} />
      <Route path='write' element={<WritePost />} />
    </Route>,
  ),
);

export default router;
