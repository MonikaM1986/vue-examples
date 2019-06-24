import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/expressions",
      component: () => import("./examples/expressions/expressions.vue")
    },
    {
      path: "/directives",
      component: () => import("./examples/directives/directives.vue")
    },
    {
      path: "/filters",
      component: () => import("./examples/filters/filters.vue")
    },
    {
      path: "/conditional",
      component: () => import("./examples/conditional/conditional.vue")
    },
    {
      path: "/repeat",
      component: () => import("./examples/repeat/repeat.vue")
    },
    {
      path: "/data",
      component: () => import("./examples/data/data.vue")
    },
    {
      path: "/events",
      component: () => import("./examples/events/events.vue")
    },
    {
      path: "/lifecyce",
      component: () => import("./examples/lifecycle/lifecycle.vue")
    },
    {
      path: "/errors",
      component: () => import("./examples/errors/errors.vue")
    }
  ]
});
