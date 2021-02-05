import React, {useState, useEffect} from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {createPost} from "../redux/Posts/PostActions";

const url = "https://jsonplaceholder.typicode.com";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);
    }

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    //
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     //postData({title: title, body: body});
    //     createPost({title: title, body: body})
    // };

    // const postData = (dataPost) => {
    //     console.log(dataPost);
    //     axios.post(`${url}/posts`, dataPost, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //         .then(response => {
    //             console.log(response.data);
    //         });
    // };

    // const handleChangeTitle = (event) => {
    //     setTitle(event.target.value);
    // };
    // const handleChangeBody = (event) => {
    //     setBody(event.target.value);
    // };
    render() {
        return (
            <div className="container">
                <form
                    onSubmit={this.onSubmit}
                >
                    <div>
                        <label htmlFor="">Title: </label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                            placeholder="Title"
                            className="form-control m-3"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Body: </label>
                        <input
                            type="text"
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                            placeholder="Body"
                            className="form-control m-3"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-success m-3"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);