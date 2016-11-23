/**
 * Created by glenp on 23/11/2016.
 */

let initialState = [
    {id: 193, name: 'pizza', cost: 10, category: 'food'},
    {id: 232, name: 'apples', cost: 5, category: 'food'},
    {id: 313, name: 'tv', cost: 1000, category: 'electronics'},
    {id: 424, name: 'phone', cost: 300, category: 'electronics'}
];

export default function products(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
