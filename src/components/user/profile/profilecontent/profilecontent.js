import React from 'react';
import Sidebar from '../../sidebar/profile/sidebar';
import Timeline from '../../feed/feedcontent/timeline';

class ProfileContent extends React.Component {
    render() {

        const styles = {
            width: '70%',
            padding: '20px'
        };

        return (
            <div style={{display: 'flex'}}>
                <Timeline styles={styles}/>
                <Sidebar/>
            </div>
        )
    }
}

export default ProfileContent;