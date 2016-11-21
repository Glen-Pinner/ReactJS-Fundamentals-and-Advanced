/**
 * Created by glenp on 21/11/2016.
 */

const ENDPOINT = 'http://localhost:3000/profiles';

export function getProfiles() {
    return fetch(ENDPOINT)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}