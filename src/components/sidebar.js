/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import BlockElement from './commons/blockElement';
import Database from "../assets/database.svg";
import Action from "../assets/action.svg";
import Twitter from "../assets/twitter.svg";
import Grabme from '../assets/grabme.svg';
import Eye from '../assets/eye.svg';
import Time from '../assets/time.svg';
import Errors from '../assets/error.svg';
import CloseLeft from '../assets/closeleft.svg';
import Search from '../assets/search.svg';
import Heart from '../assets/heart.svg';
import Log from '../assets/log.svg';
import {flowy} from '../flowy.min';

const Sidebar = () => {
    const [selectItem, setSelectItem] = useState("triggers");
    const [list, setList] = useState(null);
    const triggerList = [
        {
            value: 1,
            image1: Grabme,
            image2: Eye,
            blocktitle: 'New visitor',
            blockdesc: 'Triggers when somebody visits a specified page',
        },
        {
            value: 2,
            image1: Grabme,
            image2: Action,
            blocktitle: 'Action is performed',
            blockdesc: 'Triggers when somebody performs a specified action',
        },
        {
            value: 3,
            image1: Grabme,
            image2: Time,
            blocktitle: 'Time has passed',
            blockdesc: 'Triggers after a specified amount of time',
        },
        {
            value: 4,
            image1: Grabme,
            image2: Errors,
            blocktitle: 'Error prompt',
            blockdesc: 'Triggers when a specified error happens',
        },
    ];

    const actionList = [
        {
            value: 5,
            image1: Grabme,
            image2: Database,
            blocktitle: 'New database entry',
            blockdesc: 'Adds a new entry to a specified database',
        },
        {
            value: 6,
            image1: Grabme,
            image2: Database,
            blocktitle: 'Update database',
            blockdesc: 'Edits and deletes database entries and properties',
        },
        {
            value: 7,
            image1: Grabme,
            image2: Action,
            blocktitle: 'Perform an action',
            blockdesc: 'Performs or edits a specified action',
        },
        {
            value: 8,
            image1: Grabme,
            image2: Twitter,
            blocktitle: 'Make a Tweet',
            blockdesc: 'Makes a tweet with a specified query',
        },
    ];

    const loggerList = [
        {
            value: 9,
            image1: Grabme,
            image2: Log,
            blocktitle: 'Add new log entry',
            blockdesc: 'Adds a new log entry to this project',
        },
        {
            value: 10,
            image1: Grabme,
            image2: Log,
            blocktitle: 'Update logs',
            blockdesc: 'Edits and deletes log entries in this project',
        },
        {
            value: 11,
            image1: Grabme,
            image2: Errors,
            blocktitle: 'Prompt an error',
            blockdesc: 'Triggers a specified error',
        },
    ];

    useEffect(() => {
        displayList();
    }, [selectItem]);

    useEffect(()=>{
        flowy(document.getElementById("canvas"));
    },[]);

    const displayList = () => {
        if(selectItem === 'triggers') {
            setList(triggerList);
        } else if (selectItem === 'actions') {
            setList(actionList);
        } else {
            setList(loggerList);
        }
    }

    const handleNavClick = (e) => {
        setSelectItem(e.target.id);
    }

    return (
        <div id="leftcard">
        <div id="closecard">
            <img src={CloseLeft} />
        </div>
        <p id="header">Blocks</p>
        <div id="search">
            <img src={Search} />
            <input type="text" placeholder="Search blocks" />
        </div>
        <div id="subnav" onClick={e => handleNavClick(e)}>
            <div id="triggers" className="side">Triggers</div>
            <div id="actions" className="side">Actions</div>
            <div id="loggers" className="side">Loggers</div>
        </div>
        <div id="blocklist">
           <BlockElement data={list} />
        </div>
        <div id="footer">
            <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
            <span>·</span>
            <a href="https://twitter.com/alyssaxuu/status/1199724989353730048" target="_blank">Twitter</a>
            <span>·</span>
            <a href="https://alyssax.com" target="_blank"><p>Made with</p><img src={Heart} /><p>by</p> Alyssa X</a>
        </div>
    </div>
    );
}

export default Sidebar;