import React from 'react';
import postData from './posts/postData';
import TextPost from './posts/TextPost';
import AddPost from '../../actions/posts/addpost';


const MyComponents = {
    TextPost: TextPost
};

class feedContent extends React.Component {

    render() {

        const Post = postData.map((value) => {
            let MyComponent = MyComponents[value.type];
            return React.createElement(MyComponent, {
                content: value.content,
                by: value.by,
                avatar: value.image
            });
        });

        return (
            <div className="FeedContent">
                <AddPost/>
                {Post}
            </div>
        )
    }

}

export default feedContent;