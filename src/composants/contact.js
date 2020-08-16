import React from 'react';
import { Grid, Cell, List, ListItem,ListItemContent } from 'react-mdl';

class Contact extends React.Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}> 
                        <h2>CHAFYFY Ilies</h2>
                        <img src='https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-372-456324.png'
                        alt='avatar'
                        style={{height:'250px'}}></img>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                        Ayant obtenu mon BTS SIO option SLAM au Lycée Gustave Eiffel de Bordeaux, 
                        je souhaite à présent poursuivre mon cursus de manière plus professionnelle. 
                        De ce fait, je recherche un contrat d'alternance d'une durée de 12 mois dans 
                        le cadre d'un Bachelor RIL (Responsable en Ingénierie des Logiciels) à l'école 
                        du CESI de Bordeaux.
                        </p>
                    </Cell>
                    <Cell col={6}> 
                        <h2>Contactez-Moi</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>
                                        06.68.40.27.67
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        ilieschafyfy@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-github' aria-hidden='true'/>
                                        harili
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                       
                        
                    </Cell>
                </Grid>
            </div>
        )
    }


}

export default Contact;