import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './SideDrawer.css';
import Auxi from "../../../hoc/Auxi";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = ( props ) => {
    let attachedClasses = ['SideDrawer',
        'Close'];
    console.log(props.open);
    if (props.open){
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" marginBottom="32px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );
};

export default SideDrawer;