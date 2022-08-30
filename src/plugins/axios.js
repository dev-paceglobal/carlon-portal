import axios from 'axios'
import store from '../store'

axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
console.log(axios.defaults.baseURL, 'BaseURL');
// eslint-disable-next-line no-unused-expressions
JSON.parse(localStorage.getItem('userDetails')) ? store.commit('setUser', JSON.parse(localStorage.getItem('userDetails'))) : null;
let token = store.getters.StateUser.token;

store.subscribe((mutation, state) => {
    if (mutation.type === 'setUser') {
        token = state.auth.user.token || '';
    }

});

axios.interceptors.request.use(
    config => {
        if (token)
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);