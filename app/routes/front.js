import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { set } from '@ember/object';

export default Route.extend({
  templateName: 'fourohfour',
  headData: inject(),
  afterModel() {
    set(this, 'headData.title', 'Page Not found - Annual HR report');
  },
});
