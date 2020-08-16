import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import Education from './educations';
import Experience from './experience';
import Skills from './skills';
import Loisir from './loisir';

class Cv extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                            src='https://multigames.advento.ca/wp-content/uploads/2020/04/avatar-372-456324.png'
                            alt='avatar'
                            style={{height:'200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop:'2em'}}> Chafyfy Ilies</h2>
                        <h4 style={{color:'grey'}}>Développeur Fullstack</h4>
                        <hr style={{borderTop:'3px solid #833FB2', width:'50%'}}/>
                        <p>
                            Ayant obtenu mon BTS SIO option SLAM au Lycée Gustave Eiffel de Bordeaux, 
                            je souhaite à présent poursuivre mon cursus de manière plus professionnelle.
                            De ce fait, je recherche un contrat d'alternance d'une durée de 12 mois
                            dans le cadre d'un Bachelor RIL (Responsable en Ingénierie des Logiciels) à
                            l'école du CESI de Bordeaux.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5>Adresse</h5>
                        <p>143 Rue Alexis Labro, 33130 Bègles</p>
                        <h5>Numéro</h5>
                        <p>06.68.40.27.67</p>
                        <h5>Email</h5>
                        <p>ilieschafyfy@gmail.com</p>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Formation</h2>
                        <Education
                        startYear={2018}
                        endYear={2020}
                        schoolName="BTS SIO option SLAM - Lycée Gustave Eiffel"
                        
                        />
                        <Education
                        startYear={2015}
                        endYear={2018}
                        schoolName="Baccalauréat Scientifique option SVT - Lycée Vaclav Havel"
                        
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Expérience</h2>
                        <Experience
                            startYear={"Janvier 2020 - Mars 2020"}
                            jobName="Stage Développeur Java Fullstack - Avista France"
                            jobDescription="- Réalisation d'une interface de mise à jour codé en Java (Bibliothèque graphique - Swing)"
                            jobDescription5="- Réalisation de CDC et de documentations utilisateurs et techniques"
                            jobDescription2="- Utilisation de SQL server 2019 et création de script SQL"
                            jobDescription3="- Réalisation de tests unitaires JUnit"
                            jobDescription4="- Initiation à la notion d'Agilité "
                            
                        />

                        <Experience
                            startYear={"Mai 2019 - Juin 2019"}
                            jobName="Stage Développeur VBA - SNCF"
                            jobDescription="- Mise en place des extractions de logiciels"
                            jobDescription1="- Réalisation de projets (sauvegarde de données dans un tableau dynamique...)"
                            jobDescription2="- Réalisation d'une documentation utilisateur"
                            
                        />
                        <Experience
                            startYear={"Juillet 2018 - Août 2018"}

                            jobName="Manutentionnaire - Groupe CEMOI"
                            jobDescription="- Déplacement des plaquettes de chocolats et leur introduction dans la fonderie"
                            jobDescription1="- Conditionnement : cerclage, étiquetage, filmage"
                            jobDescription2="- Nettoyage des zones de stockage et de travail"
                            jobDescription3="- Signalement des marchandises détériorées ou manquantes"
                        />
                        <Experience
                            startYear={"Juillet 2018 - Août 2018"}
                            jobName="Préparateur de commandes - Groupe CEMOI"
                            jobDescription="- Préparation des boites à chocolats sur la chaîne de distribution"
                            jobDescription1="- Emballage et étiquetage des boîtes de chocolats"
                            jobDescription2="- Filmage des boîtes et déplacement de celles - ci sur des transpalettes."
                            
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Compétences</h2>
                        <Skills
                            skills='Java - J2EE (Servlet, JSP, JSF, JDBC)'
                            progress={85}
                        />
                        <Skills
                            skills='Frameworks : Spring (Boot, MVC), Hibernate, JUnit'
                            progress={85}
                        />
                        <Skills
                            skills='SGBD (mySql, SQL Server 2019, PostgreSQL)'
                            progress={85}
                        />
                        <Skills
                            skills='Python'
                            progress={85}
                        />
                        <Skills
                            skills='HTML/CSS/JS'
                            progress={85}
                        />
                        
                        <Skills
                            skills='Frameworks JS : Angular, React'
                            progress={85}
                        />

                        <Skills
                            skills='Git / Scrum'
                            progress={85}
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Loisirs</h2>
                        <Loisir
                            loisirs=' - Musculation'

                        />
                        <Loisir
                            loisirs=' - Veille Technologique (Java, React..)'
                        />
                        <Loisir
                            loisirs=' - Bénévolat dans un orphelinat'
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }


}

export default Cv;