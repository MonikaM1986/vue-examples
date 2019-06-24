export function errorHandler(err, vm, info) {
  const error = {
    component: vm.$options.name,
    trace: err,
    during: info,
    route: vm.$router.currentRoute.fullPath
  };
  console.dir(error);
}
