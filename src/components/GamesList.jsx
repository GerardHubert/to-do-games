import React from 'react';

class GamesList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    handleClick = (event) => {
        event.preventDefault();
    }

    render() {

        return(

            <div className="games_list_container">
                <div className="one_game">
                    <i id="done_not" className="fas fa-exclamation-circle"></i>
                    <span className="game_title">Shadow of the tomb raider</span>
                    <span className="platform">PS4</span>
                    <i onClick={this.handleClick} id="delete_game" className="fas fa-trash"></i>
                </div>
            </div>

        )
    }

}

export default GamesList;