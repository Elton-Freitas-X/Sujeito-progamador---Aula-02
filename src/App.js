import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './global';
import Home from './pages/Home';
import Links from './pages/Links'
import Menu from './components/menu'

 const App = () => (
   <>
    <GlobalStyle/>
      <Menu/>
    <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/links" element={<Links/>}/>
    </Routes>
   </>
 )

 export default App;

