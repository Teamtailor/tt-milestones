import Route from '@ember/routing/route';
import FetchDataMixin from 'tt-milestones/mixins/fetch-data-mixin';
import { inject } from '@ember/service';
import { set } from '@ember/object';
import { hash } from 'rsvp';

export default Route.extend(FetchDataMixin, {
  headData: inject(),

  model({ uuid, year, secure }) {
    return hash({
      metadata: this.fetchJson(uuid, year, secure, 'metadata', true),
      activeEmployees: this.fetchJson(uuid, year, secure, 'active-employees'),
      activities: this.fetchJson(uuid, year, secure, 'activities'),
      applied: this.fetchJson(uuid, year, secure, 'applied'),
      connected: this.fetchJson(uuid, year, secure, 'connected'),
      daysToHire: this.fetchJson(uuid, year, secure, 'days-to-hire'),
      hires: this.fetchJson(uuid, year, secure, 'hires'),
      openJobs: this.fetchJson(uuid, year, secure, 'open-jobs'),
      socialImages: this.fetchJson(uuid, year, secure, 'social-images'),
      sourced: this.fetchJson(uuid, year, secure, 'sourced'),
      tshirts: this.fetchJson(uuid, year, secure, 'tshirts'),
      visits: this.fetchJson(uuid, year, secure, 'visits'),
    });
  },

  afterModel(model) {
    set(this, 'headData.title', model.metadata.name);
    if (model.socialImages) {
      set(this, 'headData.image', model.socialImages.facebook_image_url);
    }
  },
});
