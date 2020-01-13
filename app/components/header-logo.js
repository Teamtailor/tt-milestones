import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  classNames: ['header__logo'],
  classNameBindings: ['formatClass'],
  elementId: 'header-logo',

  logoUrl: null,
  alt: null,
  imageFormat: null,

  formatClass: computed('imageFormat', function() {
    let format = get(this, 'imageFormat') || 'hidden';
    return `header__logo--${format}`;
  }),

  updateImageFormat(image) {
    if (image.width > image.height) {
      set(this, 'imageFormat', 'landscape');
    } else if (image.width < image.height) {
      set(this, 'imageFormat', 'portrait');
    } else {
      set(this, 'imageFormat', 'square');
    }
  },

  didInsertElement() {
    this._super(...arguments);
    let image = document.getElementById('header-logo-image');
    if (image) {
      image.addEventListener('load', () => {
        this.updateImageFormat(image);
      });
    }
  },
});
