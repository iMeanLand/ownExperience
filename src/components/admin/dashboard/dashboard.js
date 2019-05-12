import React from 'react';
import Sidebar from "../sidebar/settings/sidebar";
import Auth from "../../../helpers/Auth";

class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Auth.redirectIfNotAdminAuthenticated();
    }

    render() {
        return (
            <div className="Container">
                <div className="PageContainer">
                    <div className="PageContainerContent">
                        <div className="PageHeader">
                            Dashboard
                        </div>
                        <div className="PageContent">
                        </div>
                    </div>
                </div>
                <Sidebar/>
            </div>
        )
    }

}

export default AdminDashboard;