import React from 'react';
import FeedContent from './feedcontent/feedcontent';
import '../../css/feed.css';
import Sidebar from '../sidebar/feed/sidebar';

class Feed extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // Empty
        }
    }

    render() {

        return (
            <div className="Container">
                <div className="Feed">
                    <FeedContent/>
                </div>
               <Sidebar/>
            </div>
        )
    }

}

export default Feed;