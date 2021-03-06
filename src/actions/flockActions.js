import axios from 'axios'
import { FLOCK_REQUEST, ACCEPT_FLOCK, DECLINE_FLOCK, REMOVE_FLOCK, CANCEL_FLOCK, STATE_UPDATED } from "./types"

export const flockRequest = (usernameOrEmailAddress) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/request-friend',
        headers: { 'x-auth-token': JsonWT },
        data: { usernameOrEmailAddress: usernameOrEmailAddress }
    }

  axios(config).then(res => {
    dispatch({
            type: FLOCK_REQUEST,
            payload: res.data
        }) 
    })
    .then(() => dispatch({
        type: STATE_UPDATED
    }));
}

export const acceptFlock = (username) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/accept-friend-request',
        headers: { 'x-auth-token': JsonWT },
        data: { username: username }
    }

  axios(config).then(res => {dispatch({
            type: ACCEPT_FLOCK,
            payload: res.data
        }) 
    })
    .then(() => dispatch({
        type: STATE_UPDATED
    }));
}

export const declineFlock = (username) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/decline-friend-request',
        headers: { 'x-auth-token': JsonWT },
        data: { username: username}
    }

  axios(config).then((res) => {
    dispatch({
      type: DECLINE_FLOCK,
      payload: res.data,
    });
  })
  .then(() => dispatch({
    type: STATE_UPDATED
}));
}


export const removeFlock = (username) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/remove-friend',
        headers: { 'x-auth-token': JsonWT },
        data: { username: username }
    }

  axios(config).then(res => {dispatch({
            type: REMOVE_FLOCK,
            payload: res.data
        }) 
    })
    .then(() => dispatch({
        type: STATE_UPDATED
    }));
}

export const cancelFlock = (username) => dispatch => {
    const JsonWT = localStorage.getItem("JWT");
    const config = {
        method: 'put',
        url: 'http://localhost:5000/api/users/cancel-friend-request',
        headers: { 'x-auth-token': JsonWT },
        data: { username: username }
    }

  axios(config)
    .then(res => {
        dispatch({
            type: CANCEL_FLOCK,
            payload: res.data
        }) 
    })
    .then(() => dispatch({
        type: STATE_UPDATED
    }));
}

