import React from 'react';
import Sidebar from '../../sidebar/feed/sidebar';
import ProfileHeader from './profileheader';
import GroupsData from '../../groupsData';

function Groups() {

    const Groups = GroupsData.map((value) => (

        <div className="OneColumn">
            <div className="ProfileGroupBlock">
                <div className="ProfileGroupAvatar" style={{backgroundImage: 'url('+ process.env.PUBLIC_URL + '/uploads/' + value.image +')'}}>
                </div>
                <div className="ProfileGroupContent">
                    <span className="ProfileGroupName">
                       {value.name}
                    </span>
                    <span className="ProfileGroupDescription">
                        {value.description}
                     </span>
                    <span className={value.status + ' ProfileGroupStatus'}>
                        {value.status === 'Public' ? <i class="fas fa-unlock"></i> : <i class="fas fa-lock"></i>}
                    </span>
                </div>
            </div>
        </div>

    ));

    return (
        <div className="Container">
            <ProfileHeader/>
            <div className="PageContainer">
                <div className="PageContainerContent">
                    <div className="PageHeader">
                        Groups
                    </div>
                    <div className="PageContent">
                        <div className="Row">
                            {Groups}
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Groups;