//store/modules/auth.js

import axios from "axios";
import router from '@/router'

const state = {
    bookings: [],
    deleteWarning: {
        visiblity: false,
        name: '',
        id: 0,
    },


};
const getters = {
    Bookings: (state) => state.bookings,
};

const actions = {
    async Bookings({ commit }) {
        try {
            const getBookings = await axios.get("admin/services/jobs");
            // console.log(getServices.data.data.services.data," ~ Services from serves")
            await commit("setBookings", getBookings.data.data.jobs.data);
            // localStorage.setItem("", JSON.stringify(login.data));
            // router.push({ name: 'Services' })
        } catch (error) {
            console.error(error);
        }
    },
    async updateWarning({ commit }, data) {
        try {
            await commit("setDeleteWarning", data);
        } catch (error) {
            console.log(error, "~ UpdateWarning in bookings");
        }
    }
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

};
const mutations = {
    setBookings(state, bookings) {
        state.bookings = bookings;
    },
    setDeleteWarning(state, data) {
        state.deleteWarning = data;
    }

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