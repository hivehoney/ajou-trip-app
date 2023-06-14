/*
import { createStore } from 'redux';
import rootReducer from "./rootReducer";

// 초기 상태 설정 (optional)
const initialState = {
    data: '',
};
const SET_DATA = 'SET_DATA';

// 액션 생성자 함수
export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

// 리듀서 함수
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

// Redux store 생성
const store = createStore(rootReducer, initialState);

export default store;*/

import { createStore } from 'redux';
import rootReducer from './rootReducer';
// 액션 타입 정의
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SET_DATA = 'SET_DATA';

// 액션 생성자 함수
export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

// 액션 생성자 함수
function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    };
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    };
}
const store = createStore(rootReducer);

const currentState = store.getState();
console.log(currentState);

store.dispatch(addTodo('Buy groceries'));
store.dispatch(removeTodo(1));


export default store;