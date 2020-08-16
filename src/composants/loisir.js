import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Loisir extends Component{
    render(){
        return(
            <Grid>
                <Cell col ={12}>
                    <div style={{display:'flex'}}>
                        <p>{this.props.loisirs}</p>
                   
                        
                        </div>
                </Cell>
            </Grid>
        )
    }
}

export default Loisir;