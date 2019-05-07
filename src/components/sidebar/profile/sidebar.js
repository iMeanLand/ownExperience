import React from 'react';
import '../../../css/sidebar.css';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="ProfileEvents">
                <div className="SomePageHeader">
                    Events
                </div>
                <div className="SomePageContent">
                    No events..
                </div>
            </div>
            <div className="ProfilePlaces">
                <div className="SomePageHeader">
                    Places
                </div>
                <div className="SomePageContent">
                    No places..
                </div>
            </div>
            <div className="Advertisement">
                <div className="AdvertisementHeader">
                    <h3>Just an Add</h3>
                </div>
                <div className="AdvertisementContent">
                    <p>Some text content here</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;