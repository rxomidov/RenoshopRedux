import React, {useState, useEffect} from 'react';
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

function PostForm(props) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        postData({title: title, body: body});
    };

    const postData = (dataPost) => {
        console.log(dataPost);
        axios.post(`${url}/posts`, dataPost, {
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => {
                console.log(response.data);
            });
    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleChangeBody = (event) => {
        setBody(event.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title: </label>
                    <input
                        type="text"
                        name="body"
                        onChange={handleChangeTitle}
                        value={title}
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
                        onChange={handleChangeBody}
                        value={body}
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

export default PostForm;