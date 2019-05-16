import React from 'react';
import text from './posts/text';
import video from './posts/video';
import image from './posts/image';
import AddPost from '../../actions/posts/addpost';
import {setFeedData} from '../../../../redux/store/feed/actions';
import {connect} from 'react-redux';

function mappingData(state) {
    return {
        feed: state.feedReducer.feedPosts
    };
}

const mapDispatchToComponent = {
    setFeedData,
};

const MyComponents = {
    text: text,
    image: image,
    video: video
};

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.styles = props.styles;
        console.log(this.props.feed);
    }

    componentDidMount() {
        this.props.setFeedData();
    }

    render() {
        let value = null;
        let thisInstance = this;
        const Post = Object.keys(this.props.feed).map(function(key) {
            value = thisInstance.props.feed[key];
            let MyComponent = MyComponents[value.type];
            return React.createElement(MyComponent, {
                content: value.content,
                by: value.by_username,
                avatar: value.avatar,
                username: value.by_username,
                additional_content: value.additional_content,
                key: key
            });
        });
        //

        return (
            <div className="Timeline" style={this.styles}>
                <AddPost/>
                <div id="furtherPosts">
                </div>
                {Post}
            </div>
        )
    }

}

export default connect(mappingData, mapDispatchToComponent)(Timeline);