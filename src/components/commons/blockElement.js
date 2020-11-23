/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const BlockElement = (props) => {
    return (
        props.data && props.data.map(d => {
           return  (
            <div className="blockelem create-flowy noselect">
                <input
                type="hidden"
                name="blockelemtype"
                class="blockelemtype"
                value={d.value}
                />
                <div className="grabme">
                    <img src={d.image1} />
                </div>
                <div className="blockin">
                    <div className="blockico">
                        <span></span>
                        <img src={d.image2} />
                    </div>
                    <div className="blocktext">
                        <p className="blocktitle">{d.blocktitle}</p>
                        <p className="blockdesc">
                            {d.blockdesc}
                        </p>
                    </div>
                </div>
            </div>
        )})
    )
}

export default BlockElement;