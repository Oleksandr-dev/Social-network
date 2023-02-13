import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utilits/validators";
import {Textarea} from "../../utilits/InputValidateComponent";


const MyPosts = (props) => {

    let id = 0
    let postElements = props.postElements.map(p => (<Post message={p.message} likeCount={p.likeCount} key={id++}/>))
                                         .reverse()

    const onSubmit = (values) =>{
        props.addPost(values.addPostFormTextArea)
    }

    return (
        <div className={style.postWrapper}>
            <div>
                My posts
            </div>
            <MyPostReduxForm onSubmit={onSubmit}/>
            {postElements}
        </div>
    );
}
let maxLength10 = maxLengthCreator(10)
const MyPostForm = (props) =>{

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.textPost}>
                <Field name={"addPostFormTextArea"}
                       //component={"textarea"}
                       component={Textarea}
                       //className={style.txt}
                       validate={[required,maxLength10]}
                       placeholder={"Enter post"}/>
                <button className={style.btnAdd}>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: "addPostForm"})(MyPostForm)
export default MyPosts;