import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            gameTitle: '',
            platform: '',
            valid: false,
            game: {
                title: '',
                plaftform: '',
            },
            gamesList: []
        }
    }

    isFormValid = () => {
        return this.state.platform !== '' && this.state.gameTitle !== '' ? this.setState({valid: true}) : this.setState({valid: false})
    }

    handleGameChange = (event) => {
        event.target.value === '' ? this.setState({gameTitle: ''}) : this.setState({gameTitle: event.target.value})
    }

    handlePlatformChange = (event) => {
        event.target.value === '' ? this.setState({platform: ''}) : this.setState({platform: event.target.value})
    }

    handleClick = (event) => {
        event.preventDefault();
        const game = {};

        /*if (this.state.valid === true) {
            game.title = this.state.gameTitle;
            game.platform = this.state.platform;
            this.setState({game : game})
            this.componentDidUpdate = () => {
                console.log(this.state.game)
            }
        }*/
        console.log(this.state.valid)

    }

    render() {

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

                
                <div className="games_list_container">
                    <div className="one_game">
                        <i id="done_not" className="fas fa-exclamation-circle"></i>
                        <span className="game_title">{this.state.game.title}</span>
                        <span className="platform">{this.state.game.platform}</span>
                        <i onClick={this.handleClick} id="delete_game" className="fas fa-trash"></i>
                    </div>
                </div>

            </>

        )

    }
}

export default Form;