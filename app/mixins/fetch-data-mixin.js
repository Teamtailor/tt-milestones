import Mixin from '@ember/object/mixin';

/* eslint-disable ember/no-new-mixins */

export default Mixin.create({
  async fetchJson(uuid, secure, filename, redirectOnError = false) {
    return fetch(
      `https://tt-milestones.s3-eu-west-1.amazonaws.com/${uuid}/${secure}/${filename}.json`
    )
      .then(response => {
        return response.json();
      })
      .catch(() => {
        if (redirectOnError) {
          return this.transitionTo('not-found');
        }
      });
  },
});
