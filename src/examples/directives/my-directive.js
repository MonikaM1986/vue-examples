const displays = {
  vertical: "column",
  horizontal: "row"
};

export const MyDirective = {
  bind(el, binding) {
    const { arg } = binding;
    el.style.display = "flex";
    el.style["flex-direction"] = displays[arg];
  },
  update(el, binding) {
    const { arg } = binding;
    const direction = displays[arg];
    if (el.style["flex-direction"] !== direction) {
      el.style["flex-direction"] = direction;
    }
  }
};
