import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './global';

/*Local de components*/
import Menu from './components/menu';

import Home from './pages/Home';
import Links from './pages/Links';
import Error from './pages/Error';

 const App = () => (
   <>
    <GlobalStyle/>
      <Menu/>
    <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/links" element={<Links/>}/>
       <Route path="*" element={<Error/>}/>
    </Routes>
   </>
 )

 export default App;

