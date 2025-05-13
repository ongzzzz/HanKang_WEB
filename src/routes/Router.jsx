import { BrowserRouter, Route, Routes } from 'react-router';

import Home from '../pages/home/Home';
import AboutHer from '../pages/about_her/AboutHer';
import Carousel from '../pages/about_books/Carousel';
import Vegetarian from '../pages/about_books/Vegetarian';
import White from '../pages/about_books/White';
import Yeosu from '../pages/about_books/Yeosu';
import Mayof from '../pages/about_books/Mayof';
import HerItem from '../components/about_her/HerItem';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouther" element={<AboutHer />}/>
        <Route path="/aboutbooks" element={<Carousel />}/>
        <Route path="/aboutbooks/vegetarian" element={<Vegetarian />}/>
        <Route path="/aboutbooks/white" element={<White />}/>
        <Route path="/aboutbooks/yeosu" element={<Yeosu />}/>
        <Route path="/aboutbooks/mayof" element={<Mayof />}/>
        <Route path="/her" element={<HerItem />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;