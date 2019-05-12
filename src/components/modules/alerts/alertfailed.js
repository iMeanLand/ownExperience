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
            setTimeout(function() {
                $('body .AlertFailed').css('right', 0);
            }, 50);
            setTimeout(function() {
                $('body .AlertFailed').css('right', '-50%');
            }, 4500);
            setTimeout(function() {
                ReactDOM.unmountComponentAtNode(document.getElementById('alerts'));
            }, 5500)
        }
    }

}

export default AlertFailed;