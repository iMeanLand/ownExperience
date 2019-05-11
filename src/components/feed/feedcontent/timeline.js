import React from 'react';
import postsData from './posts/postData';
import TextPost from './posts/TextPost';
import AddPost from '../../actions/posts/addpost';

const MyComponents = {
    TextPost: TextPost
};

class Timeline extends React.Component {

    constructor(props) {
        super(props);

        this.styles = props.styles;
    }

    render() {
        let value = null;
        const Post = Object.keys(postsData).map(function(key) {
            value = postsData[key];
            let MyComponent = MyComponents[value.type];
            return React.createElement(MyComponent, {
                content: value.content,
                by: value.by,
                avatar: value.avatar,
                username: key
            });
        });

        return (
            <div className="Timeline" style={this.styles}>
                <AddPost/>
                {Post}
            </div>
        )
    }

}

export default Timeline;