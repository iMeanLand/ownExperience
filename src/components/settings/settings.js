import React from 'react';
import Sidebar from '../sidebar/settings/sidebar';

class Settings extends React.Component {

    render() {
        return (
            <div className="Container">
                <div className="PageContainer">
                    <div className="PageContainerContent">
                        <div className="PageHeader">
                            Main settings
                        </div>
                        <div className="PageContent">
                            <div className="Row">
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar/>
            </div>

        );
    }

}

export default Settings;