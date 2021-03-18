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
            }
        }
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

    handleClick = (event) => {
        event.preventDefault();
        if (this.state.title !== null && this.state.platform !== null) {
            this.setState({isValid: true})
            const title = this.state.title;
            const platform = this.state.platform;
            this.setState({
                game: {
                    title: title,
                    platform: platform
                }
            })
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