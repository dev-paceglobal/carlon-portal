//store/modules/auth.js

import axios from "axios";
import router from '@/router'

const state = {
    services: [],
    loading: true,
    deleteService: {},
    servicesSnackbarOptions: {
        text: '',
        visiblity: false,
        color: '',

    },
    serviceDrawer: false,



};
const getters = {
    Services: (state) => state.services,
    serviceloading: (state) => state.loading,
    serviceSnackbarOptions: (state) => state.serviceSnackbarOptions,
    serviceDrawer: (state) => state.serviceDrawer,
};

const actions = {
    async Services({ commit }) {
        try {
            await commit("setLoading", true);
            const getServices = await axios.get("admin/services/services");
            // console.log(getServices.data.data.services.data," ~ Services from serves")
            await commit("setServices", getServices.data.data.services.data);
            await commit("setLoading", false);
            // localStorage.setItem("", JSON.stringify(login.data));
            // router.push({ name: 'Services' })
        } catch (error) {
            console.error(error);
        }
    },
    async addService({dispatch, commit}, service,headers){
        await commit("setLoading",true)
        // console.log(service.data, ' SERVICE DATA FROM STORE ACTION');
        // return console.log(service, ' SERVICE DATA FROM STORE ');
        const addService = await axios.post('admin/services/services',service,headers)
        await dispatch("Services");
        await commit("setLoading",false)
        await dispatch("openServiceDrawer",false);
    },
    async deleteService({ commit }, data) {
        try {
            await commit("setLoading", true);
            const deleteService = await axios.delete("admin/services/services/" + data.id);
            await commit("deleteService", data);
            await commit("setLoading", false);
            const snackBarOptions = {
                text: data.name + ' has been deleted successfully!',
                visiblity: true,
                color: 'success',

            }
            await commit("setSnackBar", snackBarOptions)

        } catch (error) {
            const snackBarOptions = {
                text: 'something goes wrong! ~ ' + error,
                visiblity: true,
                color: 'error',

            }
            await commit("setSnackBar", snackBarOptions)
                // console.log(error, "~ UpdateWarning in bookings");
        }
    },
    async openServiceDrawer({commit}, value) {
      await commit("updateServiceDrawer", value);
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
    setServices(state, services) {
        state.services = services;
    },
    deleteService(state, data) {
        state.deleteService = data;
        const index = state.services.findIndex(item => item.id === data.id);
        console.log(index, "index of the service tobe delete");
        if (index > -1) return state.services.splice(index, 1);

    },
    setLoading(state, value) {
        state.loading = value;
    },
    setSnackBar(state, value) {
        state.servicesSnackbarOptions = value;
    },
    updateServiceDrawer(state,value){
      state.serviceDrawer = value;
    }

    // logger(state) {
    //     state.user = true;
    // },
};
export default {
    state,
    getters,
    mutations,
    actions,
};