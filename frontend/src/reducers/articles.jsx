import {
    ADD_ARTICLE,
    GET_ARTICLES,
    GET_ARTICLE,
    ARTICLE_ERROR,
    DELETE_ARTICLE,
} from "../actions/types";

const initialState = {
    articles: [],
    article: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: payload,
                loading: false,
            };
        case GET_ARTICLE:
            return {
                ...state,
                article: payload,
                loading: false,
            };
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [payload, ...state.articles],
                loading: false,
            };
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter((article) => article._id !== payload),
                loading: false,
            };
        case ARTICLE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
