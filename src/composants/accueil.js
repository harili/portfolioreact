import React from 'react';
import {Cell, Grid} from 'react-mdl';

class Accueil extends React.Component{
    render(){
        return(
            <div>
                <Grid className="grid-style">
                    <Cell col={12}>
                        <img  src="https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-372-456324.png" alt="avatar" className="img-style"></img>
                        
                            <div className='banner-style2'>
                                <h1>Développeur Web Full Stack</h1>
                                <hr />
                                <p>Java/JEE | Python | Spring (Boot, MVC) | ReactJS</p>
                                <hr />
                                <div className="reseaux">
                                <a href="https://github.com/harili" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-github fa-5x"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/ilies-cha-0b7706199/" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-linkedin fa-5x"></i>
                                </a>
                                </div>
                            </div>
                           
                           
                            {/*<hr />*/}
                            
                            <div className="reseaux-sociaux">
                               
                                
                            </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }


}

export default Accueil;