import React from 'react';
import '../../../css/footer.css'
import Auth from "../../../helpers/Auth";

function Footer() {
    if (!Auth.isAuthenticated) return null;
    return (
        <footer>
            <div className="footerCol">
                <ul>
                    {/*<li><a href="#" title="">Footer Link</a></li>*/}
                    {/*<li><a href="#" title="">Footer Link</a></li>*/}
                    {/*<li><a href="#" title="">Footer Link</a></li>*/}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;