import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isValid: false,
            title: null,
            platform: null,
            game: {
                title: '',
                plaftform: '',
            },
            games: localStorage.getItem('games')
        }
    }

    componentDidMount() {
        console.log('STATE : ' + this.state.games);
        console.log('STORAGE : ' + localStorage.getItem('games'))
    }

    handleGameChange = (event) => {
        event.target.value.length === 0
            ? this.setState({title: null})
            : this.setState({title: event.target.value})
    }

    handlePlatformChange = (event) => {
        event.target.value.length === 0 
            ? this.setState({platform: null})
            : this.setState({platform: event.target.value});
    }

    /**
     * 
     * au click, on met à jour le state en enregistrant le titre du jeu et la plateforme saisis
     * on ajoute jeu+plateforme au tableau jeu, pour affichage dans la liste des jeux à faire
     */

    handleClick = (event) => {  
        event.preventDefault();

        if (this.state.title !== null && this.state.platform !== null) {
            this.setState({isValid: true})
            const game = {title: this.state.title, platform: this.state.platform}
            this.setState({
                game: game
            })

            let games = JSON.parse(this.state.games); // on récupère l'état de la liste des jeux
            games === null ? games = [game] : games.push(game); // on créée un tableau ou onn ajoute le nouveau jeu à la liste
            localStorage.setItem('games', JSON.stringify(games)); // on enregistre la nouvelle liste dans le storage
        }
    }

    render() {

        const isValid = this.state.isValid;
        let gameElement;
        if (isValid) {
            gameElement =
                <div className="games_list_container">
                    <div className="one_game">
                        <i id="done_not" className="fas fa-exclamation-circle"></i>
                        <span className="game_title">{this.state.game.title}</span>
                        <span className="platform">{this.state.game.platform}</span>
                        <i id="delete_game" className="fas fa-trash"></i>
                    </div>
                </div>
        }
        
        return(

            <>
                <form className='game_form_container'>
                    <input
                        onChange={this.handleGameChange} 
                        className='game_input' type="text" name="game_input" placeholder="Ajouter un jeu à faire" />
                    <input
                        onChange={this.handlePlatformChange}
                        type="text" className="machine_input" placeholder="Sur quelle plateforme ?" />
                    <input onClick={this.handleClick}
                        type="submit" className='submit' value='Valider' />
                </form>
                {gameElement}
            </>

        )

    }
}

export default Form;