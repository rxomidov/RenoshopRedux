import React, {useEffect, useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchPosts} from "../redux/Posts/PostActions";

class Posts extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    // const [posts, setPosts] = useState([]);
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //         .then(response => {
    //             console.log(response.data)
    //             setPosts(response.data);
    //         })
    //     //console.log(posts)
    // },[]);
    // ))

    render() {
        const postItem = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);