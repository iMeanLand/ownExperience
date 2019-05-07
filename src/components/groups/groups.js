import React from 'react';
import GroupsContent from './groupscontent/groupscontent';
import '../../css/misc.css';
import Sidebar from '../sidebar/feed/sidebar';

function Groups() {
    return (
        <div className="Container">
            <div className="Groups">
                <GroupsContent />
            </div>
            <Sidebar/>
        </div>
    )
}

export default Groups;