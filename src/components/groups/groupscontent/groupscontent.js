import React from 'react';
import GroupsData from "../../groupsData";

function GroupsContent() {

    const Groups = GroupsData.map((value) => (

        <div className="OneColumn">
            <div className="ProfileGroupBlock">
                <div className="ProfileGroupAvatar"
                     style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/uploads/' + value.image + ')'}}>
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
    )
}

export default GroupsContent;