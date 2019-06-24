import { errorHandler } from "./error-handler";
export function configure(Vue) {
  const { config } = Vue;
  config.productionTip = false;
  config.errorHandler = errorHandler;
}
