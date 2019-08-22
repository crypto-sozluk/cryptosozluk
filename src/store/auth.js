import firebase from '@/firebase';

const state = {
    user: {},
    isLoggedIn: false,
};

const mutations = {
    setUser(state, user){
        console.log(user);
        state.user = user;
        state.isLoggedIn = true;
    },
};

// bu kisim firebase baglanmak icin ve kullanici giris yaptıktan sonra neleri alsin
const actions = {
    async login({ commit }) {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await firebase.auth().signInWithPopup(provider);
        commit('setUser', {
            id: user.uid,
            name: user.displayName,
            image: user.photoURL,
            yaratilis: firebase.firestore.FieldValue.serverTimestamp(),
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};