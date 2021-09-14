import React from 'react';
import './modal.css'

const Modal = ({
    modalActive,
    setModalActive,
}) => {
    return (
        <div className={modalActive ? "modal active" : "modal hide"} onClick={()=>setModalActive(false)}>
            <div className="modal__inner" onClick={(e)=>e.stopPropagation()}>
                <form className="modal__form" action="">
                    <div className="closed" onClick={()=>setModalActive(false)}>x</div>
                    <p>Add your name: Player 1</p>
                    <input className ="modal__input" placeholder="player 1" type="text" value="Player 1" readOnly />
                    <p>Add your name: Player 2</p>
                    <input className ="modal__input" placeholder="player 2" type="text" value="Player 2" readOnly />
                    <button className="send">Send</button>
                </form>
            </div>
      </div> 
    );
}

export default Modal;
