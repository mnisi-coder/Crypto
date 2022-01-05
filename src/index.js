import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import List from './pages/List';
import About from './pages/About';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import DetailView from './pages/DetailView';
import Calculator from './pages/Calculator';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="List" element={<List/>} />
          <Route path="About" element={<About/>} />
          <Route path="Footer" element={<Footer/>} />
            <Route path="calculator" element={<Calculator/>} />
          <Route path="detailView/:coin" element={<DetailView/>}  render={() => <DetailView/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
