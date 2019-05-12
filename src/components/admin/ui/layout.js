import React from 'react';
import Header from "./header";

class layout extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )

    }

}

export default layout;