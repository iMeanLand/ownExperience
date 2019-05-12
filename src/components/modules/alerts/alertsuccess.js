import React from 'react';
import $ from 'jquery';
import ReactDOM from "react-dom";

class AlertSuccess {

    static displayAlert(heading = 'Done', content = 'Action is done successfully') {
        if (heading && content) {
            let alertTemplate = (
                <div id="AlertSuccess" className="AlertSuccess">
                    <div className="alertHeading">
                        {heading}
                    </div>
                    <div className="alertContent">
                        {content}
                    </div>
                </div>
            );
            ReactDOM.render(alertTemplate, document.getElementById('alerts'));
            setTimeout(function() {
                $('body .AlertSuccess').css('right', 0);
            }, 50);
            setTimeout(function() {
                $('body .AlertSuccess').css('right', '-50%');
            }, 4500);
            setTimeout(function() {
                ReactDOM.unmountComponentAtNode(document.getElementById('alerts'));
            }, 5500)
        }
    }

}

export default AlertSuccess;