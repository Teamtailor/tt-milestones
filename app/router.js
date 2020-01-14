import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('milestone', { path: ':uuid/:secure' });
  this.route('not-found');
  this.route('fourohfour', { path: '*path' });
});
