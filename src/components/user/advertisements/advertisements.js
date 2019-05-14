import React from 'react';
import Sidebar from '../sidebar/advertisements/sidebar';

class Advertisements extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="PageContainer">
                    <div className="PageContainerContent">
                        <div className="PageHeader">
                            Advertisements
                        </div>
                        <div className="PageContent">
                            <p>
                                Personal data is collected to improve our services and provide a quality service. All
                                personal data is protected and you can delete or edit it. For more information see below
                                Terms of Use, Privacy Policy, Cookie Policy.
                            </p>
                        </div>
                    </div>
                </div>
                <Sidebar/>
            </div>
        );
    }
}

export default Advertisements;