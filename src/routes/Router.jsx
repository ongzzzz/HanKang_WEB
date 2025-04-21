import { BrowserRouter, Route, Routes } from 'react-router';

import Home from '../pages/home/Home';
import Vegetarian from '../pages/about_books/Vegetarian';
import VegetarianAni from '../components/about_books/VegetarianAni';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutbooks/vegetarian" element={<Vegetarian/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;