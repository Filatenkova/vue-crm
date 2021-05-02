export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$message = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html });
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$error = function (html) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};
