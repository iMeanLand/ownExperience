import React from 'react';
import PagesContent from './pagescontent/pagescontent';
import '../../../css/misc.css';
import Sidebar from '../../user/sidebar/feed/sidebar';

function Pages() {
    return (
        <div className="Container">
            <div className="Pages">
                <PagesContent />
            </div>
            <Sidebar/>
        </div>
    )
}

export default Pages;