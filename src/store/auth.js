import firebase from '@/firebase';
import db from '@/db';

const state = {
    user: {},
    isLoggedIn: false,
};

const mutations = {
    setUser(state, user){
        state.user = user;
        state.isLoggedIn = true;
    },
};

// bu kisim firebase baglanmak icin ve kullanici giris yaptıktan sonra neleri alsin
const actions = {
    async login({ commit }) {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await firebase.auth().signInWithPopup(provider);
        const setUser = {
            id: user.uid,
            adi: user.displayName,
            image: user.photoURL,
            yaratilis: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection('users').doc(setUser.id).set(setUser);
        commit('setUser', );
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};