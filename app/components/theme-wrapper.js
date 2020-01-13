import Component from "@ember/component";
import { computed, get } from "@ember/object";

export default Component.extend({
  classNameBindings: ["themeClass"],
  theme: "light",

  themeClass: computed("theme", function() {
    return `theme--${get(this, "theme")}`;
  })
});
