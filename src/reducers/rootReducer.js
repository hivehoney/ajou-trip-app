// 액션 타입 정의
import {combineReducers} from "redux";

const SET_DATA = 'SET_DATA';

// 액션 생성자 함수
function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    };
}

// 리듀서
function dataReducer(state = null, action) {
    switch (action.type) {
        case SET_DATA:
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    // 기존의 리듀서들 추가
    data: dataReducer
});

export default rootReducer;