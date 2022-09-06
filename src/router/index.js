/*
 * ============================
 * File: index.js
 * Project: Octavia-Admin
 * File Created: Thursday, 9th April 2020 2:11:05 am
 * Author:UILIB
 * AuthorUrl:https://ui-lib.com/
 * -----
 * Last Modified: Saturday, 18th April 2020 9:32:52 pm
 * Modified By: naime hossain (naime.hossain93@gmail.com)
 * -----
 * Copyright 2020 - 2021 UILIB, UILIB
 * ============================
 */

// Imports
import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import authenticate from "@/auth/authenticate";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash };
        if (savedPosition) return savedPosition;

        return { x: 0, y: 0 };
    },
    routes: [{
            path: "/",
            component: () =>
                import ("@/views/app/Index"),
            beforeEnter: authenticate,
            redirect: "/app/login",

            children: [
                // {
                //   path: "layout/:layout",
                //   component: () => import("@/views/app/Index")
                // },

                {
                    path: "/app",
                    component: () =>
                        import ("@/views/app/pages/Pages"),
                    children: [{
                            path: "bookings",
                            name: "Bookings",
                            component: () =>
                                import ("@/views/app/pages/Bookings")
                        },
                        {
                            path: "services",
                            name: 'Services',

                            component: () =>
                                import ("@/views/app/pages/Services")
                        },
                        {
                            path: "frequency",
                            component: () =>
                                import ("@/views/app/pages/Frequency")
                        },
                        {
                            path: "add-service",
                            name: "AddService",
                            component: () =>
                                import ("@/views/app/pages/AddServices")
                        },
                        {
                            path: "profile",
                            name: "Profile",
                            component: () =>
                                import ("@/views/app/pages/Profile")
                        }

                    ]
                }
            ]
        },
        {
            path: "/app",
            component: () =>
                import ("@/views/app/sessions/Sessions"),
            children: [{
                    path: "login",
                    name: 'Login',
                    component: () =>
                        import ("@/views/app/sessions/Login"),
                },
                {
                    path: "forgot",
                    name: 'Forgot',
                    component: () =>
                        import ("@/views/app/sessions/Forgot"),
                },
                {
                    path: "lock",
                    name: 'Lock',
                    component: () =>
                        import ("@/views/app/sessions/Lockscreen"),
                },
                {
                    path: "error",
                    name: 'Error',
                    component: () =>
                        import ("@/views/app/sessions/Error"),
                }
            ],

        },
        // {
        //     path: "/app/sessions",
        //     component: () =>
        //         import ("@/views/app/sessions/Sessions"),

        //     children: [{
        //             path: "sign-in",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignIn")
        //         },
        //         {
        //             path: "error",
        //             component: () =>
        //                 import ("@/views/app/sessions/Error")
        //         },
        //         {
        //             path: "forgot",
        //             component: () =>
        //                 import ("@/views/app/sessions/Forgot")
        //         },
        //         {
        //             path: "lockscreen",
        //             component: () =>
        //                 import ("@/views/app/sessions/Lockscreen")
        //         },
        //         {
        //             path: "sign-in-two",
        //             name: "login",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignInTwo")
        //         },
        //         {
        //             path: "sign-in-three",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignInThree")
        //         },
        //         {
        //             path: "sign-in-four",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignInFour")
        //         },
        //         {
        //             path: "sign-in-five",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignInFive")
        //         },
        //         {
        //             path: "sign-up",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignUp")
        //         },
        //         {
        //             path: "sign-up-2",
        //             name: "signup",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignUpTwo")
        //         },
        //         {
        //             path: "sign-up-5",
        //             component: () =>
        //                 import ("@/views/app/sessions/SignUpFive")
        //         }
        //     ]
        // }
    ]
});
router.beforeEach((to, from, next) => {
    // If this isn't an initial page load.
    if (to.path) {
        // Start the route progress bar.
        store.dispatch("changeThemeLoadingState", true);
    }
    if (to.name !== 'Login' &&
        !store.getters.isAuthenticated
        // && !localStorage.getItem('userInfo')
    ) {
        next({ name: 'Login' })
    } else { next(); }


});

router.afterEach(() => {
    // Complete the animation of the route progress bar.
    setTimeout(() => store.dispatch("changeThemeLoadingState", false), 500);

});

export default router;