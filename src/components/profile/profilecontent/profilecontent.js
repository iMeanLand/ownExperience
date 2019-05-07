import React from 'react';
import AddPost from '../../actions/posts/addpost';
import Sidebar from '../../sidebar/feed/sidebar';
import Feed from '../../feed/feed';

class ProfileContent extends React.Component {
    render() {
        return (
            <div style={{width: '100%', display: 'flex'}}>
                <Feed/>
            </div>
        )
    }
}

export default ProfileContent;