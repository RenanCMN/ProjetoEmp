import React from 'react';
import './style.css';
import Header from './components/Header/header';
// import Main from './pages/Vagas/vagas';
import Footer from './components/Footer/footer';
// import Cadastro from './pages/Cadastro/cadastro';

import Routes from './routes';

const App =()=>(
  <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
  </div>
)

export default App;
