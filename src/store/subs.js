import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
    subs: [],
};

const actions = {
    init: firestoreAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('subs', db.collection('subscrypto'));
    }),
};

console.log(actions)

export default {
    namespaced: true,
    state,
    actions
};