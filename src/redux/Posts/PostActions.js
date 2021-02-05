export const FETCH_POSTS = "FETCH_POSTS";
export const NEW_POSTS = "NEW_POSTS";

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            }))
};

export const createPost = (postData) => dispatch => {
    console.log("create post");
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: NEW_POSTS,
                payload: posts
            }));
};