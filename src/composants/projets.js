import React from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projets extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeTab : 0
        }
    }




    afficherProjet(){
        if(this.state.activeTab === 0){ 
            return(
                <div style={{display:'flex', justifyContent:'space-between', padding:'0.5em'}}>
                

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{background:'url(https://www.alwaysdata.com/static/img/technologies/languages/java.svg)',
                                        backgroundPosition : 'center',
                                        backgroundSize:'cover',
                                         height:'200px',
                                         color:'#000'}}>
                        Web Scraping
                    </CardTitle>
                    <CardText>
                        <p>Projet visant à réaliser une petite application permettant l'extration de données grâce à l'API Github </p>
                    </CardText>
                    <CardActions>
                        <Button colored href='https://github.com/harili/ScrapingGITRepo' target='_blank'>Git</Button>
                        
                    </CardActions>
                    <CardMenu>
                        {/*<IconButton name='share'/>*/}
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{background:'url(https://www.alwaysdata.com/static/img/technologies/languages/java.svg)',
                                        backgroundPosition : 'center',
                                        backgroundSize:'cover',
                                         height:'200px',
                                         color:'#000'}}>
                        Java
                    </CardTitle>
                    <CardText>
                        <p>Réservation de Bungalow en Java et Angular (en cours)</p>
                    </CardText>
                    <CardActions>
                        <Button colored href='https://github.com/harili/reservation_project' target='_blank'>Git</Button>
                        
                    </CardActions>
                    <CardMenu style={{color:'#fff' }}>
                        {/*<IconButton name='share'/>*/}
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{background:'url(https://www.alwaysdata.com/static/img/technologies/languages/java.svg)',
                                        backgroundPosition : 'center',
                                        backgroundSize:'cover',
                                         height:'200px',
                                         color:'#000'}}>
                        Java
                    </CardTitle>
                    <CardText>
                        <p>Application de migration de version (stage)</p>
                    </CardText>
                    <CardActions>
                        <Button colored href="https://github.com/harili/MAJ_test" target='_blank'>Git</Button>
                        
                    </CardActions>
                    <CardMenu style={{color:'#fff' }}>
                        {/*<IconButton name='share'/>*/}
                    </CardMenu>
                </Card>

               
            </div>
            )
        } else if(this.state.activeTab===1){
            return(
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{background:'url(https://l2capp-production.s3.amazonaws.com/uploads/workshop/image/23/Reactjs_logo.png)',
                                        backgroundPosition : 'center',
                                        backgroundSize:'cover',
                                         height:'200px',
                                         color:'#000'}}>
                        ReactJS
                    </CardTitle>
                    <CardText>
                        <p>Application méteo</p>
                    </CardText>
                    <CardActions>
                        <Button colored href="https://github.com/harili/meteoappReactjs" target='_blank'>Git</Button>
                        
                    </CardActions>
                    <CardMenu style={{color:'#fff' }}>
                        {/*<IconButton name='share'/>*/}
                    </CardMenu>
                </Card>
            )

        } else if(this.state.activeTab===2){
            return(
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{background:'url(https://th.bing.com/th/id/OIP.Kq4q4LVa122v4g0GvHiOkAHaHa?pid=Api&rs=1)',
                                    backgroundPosition : 'center',
                                    backgroundSize:'cover',
                                     height:'200px',
                                     color:'#000'}}>
                    Motus
                </CardTitle>
                <CardText>
                    <p>Jeu qui se base sur la série télévisé : Motus</p>
                </CardText>
                <CardActions>
                    <Button colored href="https://github.com/harili/motusTVGame_Python" target='_blank'>Git</Button>
                    
                </CardActions>
                <CardMenu style={{color:'#fff' }}>
                    {/*<IconButton name='share'/>*/}
                </CardMenu>
            </Card>

            
            
            )

        }else if(this.state.activeTab===3){
            return(
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{background:'url(https://th.bing.com/th/id/OIP.z7EjzrMoD64iALwOcRgY5wHaD7?pid=Api&rs=1)',
                                    backgroundPosition : 'center',
                                    backgroundSize:'cover',
                                     height:'200px',
                                     color:'#000'}}>
                    IFRA
                </CardTitle>
                <CardText>
                    <p>Site web catégorisant une liste de plantes médicinales</p>
                </CardText>
                <CardActions>
                    <Button colored href="https://github.com/harili/sitePHP-Plante" target='_blank'>Git</Button>
                    
                </CardActions>
                <CardMenu style={{color:'#fff' }}>
                    {/*<IconButton name='share'/>*/}
                </CardMenu>
            </Card>
            )
    
        }
        
    }
    render(){
        return(
            <div>
                {/** activeTab est par default à 0. A chaque fois que l'on changera de valeur, on aura le changement voulu */}
                <Tabs actionTab={this.state.activeTab} onChange={(tabId)=>this.setState ({activeTab:tabId})}>
                    <Tab>Java/JEE</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>Python</Tab>
                    <Tab>PHP</Tab>
                </Tabs>
                <section>
                    {this.afficherProjet()}
                </section>
            </div>
        )
    }


}

export default Projets;