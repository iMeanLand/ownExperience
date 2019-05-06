import React from 'react';
import Dashboard from './dashboard';

class Kanban extends React.Component {

    componentWillMount() {
        // Preloader
    }

    render() {
        return (
            <Dashboard/>
        )
    }
}

export default Kanban;