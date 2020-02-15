import * as ActionTypes from './ActionTypes'
//import { DISHES } from './../shared/dishes'
import { baseURL } from './../shared/baseURL'
//import { actionTypes } from 'react-redux-form';

// export const addFeedback = (feedback) => ({
//     type: ActionTypes.ADD_FEEDBACK,
//     payload: feedback
// })
// export const postFeedback = (values) => (dispatch) => {
//     const newFeedback = {
//         ...values
//     }
//     newFeedback.date = new Date().toISOString();
//     return fetch(baseURL + 'feedback', {
//             method: 'POST',
//             body: JSON.stringify(newFeedback),
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             credentials: 'same-origin'
//         })
//         .then(response => {
//             if(response.ok) {
//                 return response
//             } else {
//                 var error = new Error('Error '+response.status+':'+response.statusText)
//                 error.response = response;
//                 throw error
//             }
//         }, error => {
//             var err = new Error(error.message);
//             throw err
//         })
//         .then(response => response.json())
//         .then(data => dispatch(addFeedback(data)))
//         .catch(error => { console.log('Post feedback', error.message) })        
// }

export const postFeedback = (values) =>  {
    const newFeedback = {
        ...values
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseURL + 'feedback', {
            method: 'POST',
            body: JSON.stringify(newFeedback),
            headers: {
                'Content-Type':'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if(response.ok) {
                return response
            } else {
                var error = new Error('Error '+response.status+':'+response.statusText)
                error.response = response;
                throw error
            }
        }, error => {
            var err = new Error(error.message);
            throw err
        })
        .then(response => response.json())
        .then(data => JSON.stringify(data))
        .catch(error => error.message )
}

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId,
        rating,
        author,
        comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseURL + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type':'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if(response.ok) {
                return response
            } else {
                var error = new Error('Error '+response.status+':'+response.statusText)
                error.response = response;
                throw error
            }
        }, error => {
            var err = new Error(error.message);
            throw err
        })
        .then(response => response.json())
        .then(data => dispatch(addComment(data)))
        .catch(error => { console.log('Post comments', error.message) })
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseURL + 'dishes')
        .then(response => {
            if(response.ok) {
                return response
            } else {
                var error = new Error('Error '+response.status+':'+response.statusText)
                error.response = response;
                throw error
            }
        }, error => {
            var err = new Error(error.message);
            throw err
        })
        .then(response => response.json())
        .then(data => dispatch(addDishes(data)))
        .catch(error => dispatch(dishesFailed(error.message)))
}
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DHISHES,
    payload: dishes
})

export const fetchComments = () => (dispatch) => {    
    return fetch(baseURL + 'comments')
    .then(response => {
        if(response.ok) {
            return response
        } else {
            var error = new Error('Error '+response.status+':'+response.statusText)
            error.response = response;
            throw error
        }
    }, error => {
        var err = new Error(error.message);
        throw err
    })    
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
};
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseURL + 'promotions')
        .then(response => {
            if(response.ok) {
                return response
            } else {
                var error = new Error('Error '+response.status+':'+response.statusText)
                error.response = response;
                throw error
            }
        }, error => {
            var err = new Error(error.message);
            throw err
        })    
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    console.log("asdf")
    dispatch(leadersLoading())
    return fetch(baseURL + 'leaders')
        .then(response => {
            if(response.ok) return response
            else {
                var error = new Error('Error '+response.status+':'+response.statusText)
                error.response = response;
                throw error
            }
        }, error => {
            var err = new Error(error.message);
            throw err
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})
export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})
export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})