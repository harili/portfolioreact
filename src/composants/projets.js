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
                        Java
                    </CardTitle>
                    <CardText>
                        <p>Le Lorem Ipsum est bref... </p>
                    </CardText>
                    <CardActions>
                        <Button colored>Git</Button>
                        
                    </CardActions>
                    <CardMenu>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

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
                        <Button colored href='https://github.com/harili/ScrapingGITRepos' target='_blank'>Git</Button>
                        
                    </CardActions>
                    <CardMenu>
                        <IconButton name='share'/>
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
                        <p>Le Lorem Ipsum est bref... </p>
                    </CardText>
                    <CardActions>
                        <Button colored>Git</Button>
                        
                    </CardActions>
                    <CardMenu style={{color:'#fff' }}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

               
            </div>
            )
        } else if(this.state.activeTab===1){
            return(
                <h1>C'est du Reactjs</h1>
            )

        } else if(this.state.activeTab===2){
            return(
                 <h1>C'est du Python</h1>
            )

        }else if(this.state.activeTab===3){
            return(
                <h1>C'est du PHP</h1>
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