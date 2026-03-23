
function Dice({playerNumber,diceNumber,onRoll})
{

    return(
        <div className='dice'>
            <p>Player {playerNumber}</p>
            <img className={`img${playerNumber}`} src={`/dice${diceNumber}.png`} onClick={onRoll}  style={{ cursor: 'pointer' }} />
        </div>
    );

}

export default Dice;