
import './scorewrapper.css';

const ScoreWrapper = ({
    refresh,
    winner,
    xIsNext,
    gamePlace
    
}) => {

    const checkWinner = () => {
        if(winner) {  
            return 'Winner ' + winner;
        } else  {
            return "Now  " + (xIsNext ? 'X' : 'O') + " turn"
        }

        
    }
    

    return (
        <div className="score-wrapper">
            <div className="sub-score">{checkWinner()}</div>
            <div className="first-player text">Player1</div>
            <div className="second-player text">Player2</div>
            {refresh()}
        </div>
    );
}

export default ScoreWrapper;
