import React from 'react';
import Sidebar from '../../sidebar/feed/sidebar';
import ProfileHeader from './profileheader';

function About() {
    return (
        <div className="Container">
            <ProfileHeader/>
            <div className="PageContainer">
                <div className="PageContainerContent">
                    <div className="PageHeader">
                        About
                    </div>
                    <div className="PageContent">
                        <div className="Row">

                            <div className="ThreeColumn">
                                <span className="InfoHeading text-center">
                                    19
                                </span>
                                <span className="InfoSubHeading">
                                years
                                </span>
                            </div>
                            <div className="ThreeColumn">
                                <span className="InfoHeading text-center">
                                    Chisinau
                                </span>
                                <span className="InfoSubHeading">
                                born in
                                </span>
                            </div>
                            <div className="ThreeColumn">
                                <span className="InfoHeading text-center">
                                    Programming
                                </span>
                                <span className="InfoSubHeading">
                                interested in
                                </span>
                            </div>
                            <div className="ThreeColumn">
                                <span className="InfoHeading text-center">
                                    Codding
                                </span>
                                <span className="InfoSubHeading">
                                hobby
                                </span>
                            </div>
                            <div className="ThreeColumn">
                                <span className="InfoHeading text-center">
                                    future
                                </span>
                                <span className="InfoSubHeading">
                                looking for
                                </span>
                            </div>
                            <div className="ThreeColumn">
                                <span className="InfoHeading text-center">
                                      to work in pentagon
                                </span>
                                <span className="InfoSubHeading">
                                dreams about
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    )
}

export default About;