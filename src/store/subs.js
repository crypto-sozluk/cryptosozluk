import { firebaseAction } from 'vuexfire';
import db from '@/db';

const state = {
    subs: [],
};

const actions = {
    init: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('subs', db.collection('subs'));
    }),
};

export default {
    namespaced: true,
    state,
    actions,
};