import firebase from '@/firebase';
import store from '@/store';

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.commit('auth/setUser', user);
    } else {
        store.commit('auth/setUser', null);
    }
});