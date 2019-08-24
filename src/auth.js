import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';
import router from './router';

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        if (user.user) {
            user = user.user;
        }
        const setUser = {
            id: user.uid,
            adi: user.displayName,
            image: user.photoURL,
            yaratilis: firebase.firestore.FieldValue.serverTimestamp(),
        };
        db.collection('users').doc(setUser.id).set(setUser);
        store.commit('auth/setUser', setUser);
        router.push('./subs');
    } else {
        store.commit('auth/setUser', null);
    }
});