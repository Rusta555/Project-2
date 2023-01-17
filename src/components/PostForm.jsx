import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton"; 

const PostForm = ({create}) => {

    const [ post, setPost] = useState ( {title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
                ...post, id: Date.now()
        }
        create(newPost)
        setPost( {title: '', body: ''})
        }

    return (

        <form>
                  {/* idare olunan kompanent */}
                <MyInput 
                value={post.title}
                onChange={e => setPost( {...post, title: e.target.value})}
                type="text" 
                placeholder="Postun adi"/>
                  {/* idare olunmayan kompanent */}
                <MyInput 
                value={post.body}
                onChange={e => setPost( {...post, body: e.target.value})}
                type="text" 
                placeholder="Postun tesviri"/>

                <MyButton onClick={addNewPost}>Post yaratmaq</MyButton>
          </form> 

    );
};

export default PostForm;