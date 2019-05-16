import React from 'react';
import Timeline from './timeline';

class feedContent extends React.Component {

    render() {

        const styles = {
            width: '100%'
        };

        return (
            <div className="FeedContent">
                <Timeline styles={styles}/>
            </div>
        )
    }

}

export default feedContent;