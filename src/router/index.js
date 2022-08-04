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
  routes: [
    {
      path: "/",
      component: () => import("@/views/app/Index"),
      beforeEnter: authenticate,
      redirect: "/app/pages/Blank",

      children: [
        // {
        //   path: "layout/:layout",
        //   component: () => import("@/views/app/Index")
        // },

        {
          path: "/app/pages",
          component: () => import("@/views/app/pages/Pages"),
          children: [
            {
              path: "blank",
              component: () => import("@/views/app/pages/Blank")
            },
            {
              path: "services",
              component: () => import("@/views/app/pages/Services")
            },
            {
              path: "frequency",
              component: () => import("@/views/app/pages/Frequency")
            },
            {
              path: "addservice",
              component: () => import("@/views/app/pages/AddServices")
            }

          ]
        }
      ]
    },
    {
      path: "/app/sessions",
      component: () => import("@/views/app/sessions/Sessions"),

      children: [
        {
          path: "sign-in",
          component: () => import("@/views/app/sessions/SignIn")
        },
        {
          path: "error",
          component: () => import("@/views/app/sessions/Error")
        },
        {
          path: "forgot",
          component: () => import("@/views/app/sessions/Forgot")
        },
        {
          path: "lockscreen",
          component: () => import("@/views/app/sessions/Lockscreen")
        },
        {
          path: "sign-in-two",
          name: "login",
          component: () => import("@/views/app/sessions/SignInTwo")
        },
        {
          path: "sign-in-three",
          component: () => import("@/views/app/sessions/SignInThree")
        },
        {
          path: "sign-in-four",
          component: () => import("@/views/app/sessions/SignInFour")
        },
        {
          path: "sign-in-five",
          component: () => import("@/views/app/sessions/SignInFive")
        },
        {
          path: "sign-up",
          component: () => import("@/views/app/sessions/SignUp")
        },
        {
          path: "sign-up-2",
          name: "signup",
          component: () => import("@/views/app/sessions/SignUpTwo")
        },
        {
          path: "sign-up-5",
          component: () => import("@/views/app/sessions/SignUpFive")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.
    store.dispatch("changeThemeLoadingState", true);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  // const gullPreLoading = document.getElementById("loading_wrap");
  // if (gullPreLoading) {
  //   gullPreLoading.style.display = "none";
  // }
  // Complete the animation of the route progress bar.
  setTimeout(() => store.dispatch("changeThemeLoadingState", false), 500);
  // NProgress.done();
  // if (isMobile) {
  // if (window.innerWidth <= 1200) {
  //   // console.log("mobile");
  //   store.dispatch("changeSidebarProperties");
  //   if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
  //     store.dispatch("changeSecondarySidebarProperties");
  //   }
  //   if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
  //     store.dispatch("changeCompactSidebarProperties");
  //   }
  // } else {
  //   if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
  //     store.dispatch("changeSecondarySidebarProperties");
  //   }
  //   // store.state.sidebarToggleProperties.isSecondarySideNavOpen = false;
  // }
});

export default router;