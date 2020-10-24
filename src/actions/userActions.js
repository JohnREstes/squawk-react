import { INCREMENT, DECREMENT, SIGN_IN, LOGIN_USER, CREATE_NEW_USER, FEED, FRIENDS, EDIT_PROFILE, BIRD_FACTS, CREATE_ACCOUNT, LOAD_FEED } from './types';
import axios from 'axios';

//each action creator is a function
//thunk middleware allows us to call dispatch function directly so we can make asynchronous requests
//dispatch is like resolving a promise; dispatch allows for sending of data

export const increment = number => dispatch => {
    dispatch({
        type: INCREMENT,
        payload: number
    });
};
export const decrement = number => dispatch => {
    dispatch({
        type: DECREMENT,
        payload: number
    });
};
export const loginToggle = () => dispatch => {
    dispatch({
        type: SIGN_IN
    });
};
export const loginUser = info => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload: info
    });
};
export const createNewUser = userInfo => dispatch => {
    axios.post('http://localhost:5000/api/users',
    {
        username: userInfo.username,
        password: userInfo.password,
        emailAddress: userInfo.emailAddress
    })
    .then(res => {
        const allUserInfo = {
            token: res.headers['x-auth-token'],
            ...res.data
        }
        dispatch({
            type: CREATE_NEW_USER,
            payload: allUserInfo
        });
    });
};
export const feed = () => dispatch => {
    dispatch({
        type: FEED,
    });
};
export const friends = () => dispatch => {
    dispatch({
        type: FRIENDS,
    });
};
export const editProfile = () => dispatch => {
    dispatch({
        type: EDIT_PROFILE,
    });
};
export const createAccount = () => dispatch => {
    dispatch({
        type: CREATE_ACCOUNT,
    });
};
// export const createBirdFact = () => dispatch => {
//     fetch('https://some-random-api.ml/facts/bird')
//     .then(res => {
//         console.log(res);
//         dispatch({
//             type: BIRD_FACTS,
//             payload: res.data
//         })
//     })

// };
export const createFeed = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({
            type: LOAD_FEED,
            payload: res.data
        }));
};
export const createBirdFact = () => dispatch => {
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://some-random-api.ml/facts/bird"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(res => {
    let fact = JSON.parse(res)
    console.log(fact.fact);
    dispatch({
        type: BIRD_FACTS,
        payload: fact.fact
    })
})
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}
