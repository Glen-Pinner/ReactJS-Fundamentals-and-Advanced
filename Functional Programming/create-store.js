/**
 * Created by glenp on 23/11/2016.
 */

function createStore(reducer, initialState) {
    let state = initialState;
    let subscribers = [];
    
    function getState() {
        return state;
    }

    function subscribe(callback) {
        subscribers.push(callback);
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(subscriber => {
            subscriber();
        })
    }

    // object returned using ES6 expanded object literal
    return { getState, subscribe, dispatch };

}

let reducer = require('./reducer');
let store = createStore(reducer, 0);

store.subscribe(() => console.log(`Current state: ${store.getState()}`));

store.dispatch({type: 'INCREMENT_COUNT'});
store.dispatch({type: 'INCREMENT_COUNT'});
store.dispatch({type: 'INCREMENT_COUNT'});
