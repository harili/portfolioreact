
import React from 'react';
import './App.css';
import Main from './composants/main';
import {Link, HashRouter} from 'react-router-dom';
import  {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App(){
    return (
      <div className="demo-big-content">
      <HashRouter basename='/accueil'>
         <Layout>
             <Header className = "header-style"title="Mon Portfolio" scroll>
                 <Navigation>
                   <Link to="accueil">Accueil</Link>
                   <Link to="cv">CV</Link>
                   <Link to="projets">Projets</Link>
                   <Link to="contact">Contact</Link>
                     
                 </Navigation>
             </Header> 
             <Drawer title="Mon Portfolio">
                 <Navigation>
                     <Link to="accueil">Accueil</Link>
                     <Link to="cv">CV</Link>
                     <Link to="projets">Projets</Link>
                     <Link to="contact">Contact</Link>
                 </Navigation>
             </Drawer>
             <Content>
                 <div className="page-content" />
                 <Main></Main>
             </Content>
         </Layout>
       </HashRouter> 
 </div>
   );
 }

 
 export default App;