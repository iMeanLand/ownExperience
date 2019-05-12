import React from 'react';
import Sidebar from '../../sidebar/feed/sidebar';
import ProfileHeader from './profileheader';

function Gallery(props) {

    const currentProfile = props.match.params.username;

    return (
        <div className="Container">
            <ProfileHeader currentProfile={currentProfile}/>
            <div className="PageContainer">
                <div className="PageContainerContent">
                    <div className="PageHeader">
                        Gallery
                    </div>
                    <div className="PageContent">
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Gallery;