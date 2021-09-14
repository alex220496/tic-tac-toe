import React from 'react';
import './modal.css'

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__inner">
                <div className="closed">x</div>
                <p>Add your name Player 1</p>
                <input className ="modal__input" placeholder="player 1" type="text" value="" onChange={true}/>
                <p>Add your name Player 2</p>
                <input className ="modal__input" placeholder="player 2" type="text" value="" onChange={true} />
                <button className="send">Send</button>
            </div>
      </div> 
    );
}

export default Modal;
