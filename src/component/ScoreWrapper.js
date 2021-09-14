
import './scorewrapper.css';

const ScoreWrapper = ({
    refresh,
    winner,
    xIsNext,
    gamePlace,
    setgamePlace
    
}) => {

    let status;
    if(winner && winner !== 'draw'){
        status = 'Winner: ' + winner;
    } else if (winner && winner === 'draw'){
        status = "It's a " + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    

    return (
        <div className="score-wrapper">
            <div className="sub-score">{status}</div>
            <div className="first-player text">Player1</div>
            <div className="second-player text">Player2</div>
            {refresh()}
        </div>
    );
}

export default ScoreWrapper;
