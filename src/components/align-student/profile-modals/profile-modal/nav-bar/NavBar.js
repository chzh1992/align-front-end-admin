import React from 'react';
import Drag from './Drag';
import NavLinks from './NavLinks';
import CloseButton from './CloseButton';


export default props => (
    <div className={'student-profile-modal-nav-bar'}>
        <Drag startDragging={props.startDragging}
              dragging={props.dragging}
              endDragging={props.endDragging}/>

        <NavLinks display={props.display}
                  changeDisplay={props.changeDisplay}
                  numberOfNotes={props.numberOfNotes}/>

        <CloseButton closeModal={props.closeModal}/>
    </div>
);