import Route from '@ember/routing/route';
import FetchDataMixin from 'tt-milestones/mixins/fetch-data-mixin';
import { hash } from 'rsvp';

export default Route.extend(FetchDataMixin, {
  model({ uuid, year, secure }) {
    return hash({
      metadata: this.fetchJson(uuid, year, secure, 'metadata', true),
    });
  },
});
