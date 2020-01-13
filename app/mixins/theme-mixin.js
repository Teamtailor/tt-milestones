import Mixin from '@ember/object/mixin';
import { set } from '@ember/object';

/* eslint-disable ember/no-new-mixins */

export default Mixin.create({
  theme: "light",
  isShowingModal: false,
  location: window.location.href,

  init() {
    this._super(...arguments);

    let modeWatcher = window.matchMedia("(prefers-color-scheme: light)");

    if (!modeWatcher.matches) {
      set(this, "theme", "dark");
    }

    modeWatcher.addListener((e) => {
      this.toggleTheme(e.matches ? "light" : "dark");
    });
  },

  toggleTheme(theme) {
    set(this, "theme", theme);
  },

  actions: {
    handleThemeChange() {
      const currentTheme = this.theme
      const newTheme = currentTheme == "dark" ? "light" : "dark"
      this.set('theme', newTheme);
    },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
