import React from 'react';
import GroupsContent from './groupscontent/groupscontent';
import '../../css/misc.css';
import Sidebar from '../sidebar/feed/sidebar';

function Groups() {
    return (
        <div className="Container">
            <GroupsContent />
            <Sidebar/>
        </div>
    )
}

export default Groups;