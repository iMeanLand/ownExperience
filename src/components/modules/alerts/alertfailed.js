import React from 'react';
import $ from 'jquery';
import ReactDOM from "react-dom";

class AlertFailed {

    static displayAlert(heading = 'Failed', content = 'Oops, something went wrong, please try again later') {
        if (heading && content) {
            let alertTemplate = (
                <div className="AlertFailed">
                    <div className="alertHeading">
                        {heading}
                    </div>
                    <div className="alertContent">
                        {content}
                    </div>
                </div>
            );
            ReactDOM.render(alertTemplate, document.getElementById('alerts'));
            $('body .AlertFailed').css('right', 0);
            setTimeout(function() {
                ReactDOM.unmountComponentAtNode(document.getElementById('alerts'));
            }, 3000)
        }
    }

}

export default AlertFailed;