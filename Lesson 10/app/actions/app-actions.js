/**
 * Created by glenp on 22/11/2016.
 */

import constants from '../constants/app-constants';
import dispatcher from '../dispatcher/dispatcher';

export let incrementActions = {
    incrementCount: () => {
        console.log('INCREMENT action dispatched');
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        });
    }
};