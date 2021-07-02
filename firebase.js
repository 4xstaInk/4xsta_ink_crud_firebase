import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
        apiKey: "AIzaSyBTg7D_K7C1ly6UCKe8JTKf_q56A4YLrQo",
        authDomain: "fouxstarcrud.firebaseapp.com",
        projectId: "fouxstarcrud",
        storageBucket: "fouxstarcrud.appspot.com",
        messagingSenderId: "692294970890",
        appId: "1:692294970890:web:a03d6da05475940ae6f9f3"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user =>{
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users =ref([])
    const close = usersCollection.onSnapshot(snapshot =>{
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}