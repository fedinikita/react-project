import s from './MyPosts.module.css';
import React from 'react'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsItems = props.profilePage.posts.map(post => <Post description={post.description} likesCount={post.likesCount} key={post.id}/>)
    let newPostElement = React.createRef();
    window.updateNewPostText = props.updateNewPostText;
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            my posts
            <div>
                <textarea onChange={onPostChange} className={`${s.textInput}`} ref={newPostElement} value={props.profilePage.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>
            <div className={s.posts}>
                {postsItems} 
            </div>
        </div>
    )
}

export default MyPosts;