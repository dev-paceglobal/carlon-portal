//store/modules/auth.js

import axios from "axios";
import router from '@/router'

const state = {
    user: {
        token: null,
    },
};
const getters = {
    isAuthenticated: (state) => !!state.user.token,
    StateUser: (state) => state.user,
};

const actions = {
    async LogIn({ commit }, User) {
        try {
            console.log(axios.defaults.baseURL, 'from store');
            const login = await axios.post("login", User);
            await commit("setUser", login.data);
            localStorage.setItem("userDetails", JSON.stringify(login.data));
            router.push({ name: 'Services' })
        } catch (error) {
            console.error(error);
        }
    },
    // async Register({ dispatch }, form) {
    //     try {
    //         const {
    //             firstName,
    //             middleName,
    //             lastName,
    //             registerationEmail,
    //             registerationPassword,
    //             registerationRepeatPassword,
    //         } = form;
    //         await axios.post('register', {
    //             first_name: firstName,
    //             middle_name: middleName,
    //             last_name: lastName,
    //             email: registerationEmail,
    //             password: registerationPassword,
    //             password_confirmation: registerationRepeatPassword,
    //             role_id: 2,
    //         });
    //         await dispatch("LogIn", {
    //             email: form.registerationEmail,
    //             password: form.registerationPassword,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },
    async LogOut({ commit }) {
        commit('LogOut');
        localStorage.removeItem('userDetails');
        router.push('/app/login');
    }
};
const mutations = {
    setUser(state, userDetails) {
        state.user = userDetails;
    },
    LogOut(state) {
        state.user = { token: null };
    },
    // logger(state) {
    //     state.user = true;
    // },
};
export default {
    state,
    getters,
    actions,
    mutations,
};