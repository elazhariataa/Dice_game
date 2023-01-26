import React, { Component } from 'react';

class Jeude extends Component{
    constructor(props){
        super(props);
        this.state ={
            face : null,
            compteur : 0,
            fin : false
        };
        this.jouer = this.jouer.bind(this);
        // this.getimage = this.getimage.bind(this);
        this.initiatiser = this.initiatiser.bind(this)

    }
    jouer(){
        const valeur = Math.floor(Math.random()*6) +1;
        let fin = false;
        if(valeur === this.props.cache){
            fin = true;
        }
        this.setState({
            face : valeur,
            compteur : this.state.compteur+1,
            fin : fin
        });
    }
    getimage(){
        if(this.state.face === null){
            return require("../images/facevide.png");
        }else{
            return require("../images/face"+ this.state.face + ".png");
        }
    }
    initiatiser(){
        this.setState({face : null , compteur : 0 , fin : false});
    }



    render(){
        return(
            <div className='card'>
                <img src={require("../images/jeuDe.png")} alt="jeu de dé" className='logo'/>
                <h1>Jeu de dé</h1>
                <h2>face: {this.state.face}</h2>
                <img src={this.getimage()} alt="jeu de dé" className='pic'/>
                <h2>nombre d'essais: {this.state.compteur}</h2>
                {!this.state.fin ?(
                    <button onClick={this.jouer}>Jouer</button>
                ):(
                    <div className='result'>
                        <p>Bravo vous avez trouvez la face cachée.....</p>
                        <button onClick={this.initiatiser}>Initialiser</button>
                    </div>
                    
                )}
                
                
                
                
            </div>
        )
    }
}

export default Jeude;