import React from 'react';
import Sidebar from '../../sidebar/feed/sidebar';
import ProfileHeader from './profileheader';

function Groups() {
    return (
        <div className="Container">
            <ProfileHeader/>
            <div className="PageContainer">
                <div className="PageContainerContent">
                    <div className="PageHeader">
                        Groups
                    </div>
                    <div className="PageContent">
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Groups;