import axios from "axios";
import { setAlert } from "./alert";
import {
    ADD_ARTICLE,
    GET_ARTICLES,
    GET_ARTICLE,
    ARTICLE_ERROR,
    DELETE_ARTICLE,
} from "./types";

// Get articles
export const getArticles = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8000/api/articles_list/");
        dispatch({
            type: GET_ARTICLES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: ARTICLE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
}

// Get article
export const getArticle = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8000/api/articles/${id}`);

        dispatch({
            type: GET_ARTICLE,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: ARTICLE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
}

// Add article 
export const addArticle = (formData, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8000/api/articles", formData);

        dispatch({
            type: ADD_ARTICLE,
            payload: res.data,
        });

        dispatch(setAlert("Article Created", "success"));

        history.push("/articles");
    } catch (err) {
        dispatch({
            type: ARTICLE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
}

// Delete article
export const deleteArticle = (id) => async dispatch => {
    try {
        await axios.delete(`http://localhost:8000/api/articles/${id}`);

        dispatch({
            type: DELETE_ARTICLE,
            payload: id,
        });

        dispatch(setAlert("Article Deleted", "success"));
    } catch (err) {
        dispatch({
            type: ARTICLE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
}