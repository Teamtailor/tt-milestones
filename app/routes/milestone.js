import Route from '@ember/routing/route';
import FetchDataMixin from 'tt-milestones/mixins/fetch-data-mixin';
import { hash } from 'rsvp';

export default Route.extend(FetchDataMixin, {
  queryParams: {
    type: {
      refreshModel: true,
    },
    level: {
      refreshModel: true,
    },
  },

  model({ uuid, secure, type, level }) {
    // return hash({
    //   metadata: this.fetchJson(uuid, secure, 'data', true),
    //   type,
    //   level,
    // });
  },
});
