import React from 'react';

function Column(props) {

    let columnHeading = props.heading;
    let columnData = props.content;

    return (
        <div className="column">
            <h3>{columnHeading}</h3>
            <p>{columnData}</p>
        </div>
    )
}

export default Column;