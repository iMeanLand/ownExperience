import React from 'react';
import $ from 'jquery';
import ReactDOM from "react-dom";

class AlertSuccess {

    static displayAlert(heading, content) {
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
            $('body .AlertSuccess').css('right', 0);
            setTimeout(function() {
                ReactDOM.unmountComponentAtNode(document.getElementById('alerts'));
            }, 3000)
        }
    }

}

export default AlertSuccess;