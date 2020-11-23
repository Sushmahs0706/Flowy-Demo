/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Close from '../assets/close.svg';
import Dropdown from "../assets/dropdown.svg";
import Checkon from "../assets/checkon.svg";
import Checkoff from "../assets/checkoff.svg";
import {flowy} from '../flowy.min';

const Propwrap = (props) => {
    const handleDelete = () => {
        flowy.deleteBlocks();
    }

    const handleClose = () => {
        document.getElementById("properties").classList.remove("expanded");
        document.getElementById("propwrap").classList.remove("itson");
    }

    return (
    <div id="propwrap">
        <div id="properties">
            <div id="close">
                <img src={Close} onClick={() => handleClose()} />
            </div>
            <p id="header2">Properties</p>
            <div id="propswitch">
                <div id="dataprop">Data</div>
                <div id="alertprop">Alerts</div>
                <div id="logsprop">Logs</div>
            </div>
            <div id="proplist">
                <p className="inputlabel">Select database</p>
                <div className="dropme">Database 1 <img src={Dropdown} /></div>
                <p className="inputlabel">Check properties</p>
                <div className="dropme">All<img src={Dropdown} /></div>
                <div className="checkus"><img src={Checkon} /><p>Log on successful performance</p></div>
                <div className="checkus"><img src={Checkoff} /><p>Give priority to this block</p></div>
            </div>
            <div id="divisionthing"></div>
            <div id="removeblock" onClick={() => handleDelete()}>Delete blocks</div>
        </div>
    </div>
    );
}

export default Propwrap;