import { BrowserRouter, Route, Routes } from 'react-router';

import Home from '../pages/home/Home';
import Vegetarian from '../pages/about_books/Vegetarian';
import White from '../pages/about_books/White';
import Yeosu from '../pages/about_books/Yeosu';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutbooks/vegetarian" element={<Vegetarian/>}/>
        <Route path="/aboutbooks/white" element={<White />}/>
        <Route path="/aboutbooks/yeosu" element={<Yeosu />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;