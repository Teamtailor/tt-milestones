import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('front', { path: '/' });
  this.route('report', { path: ':uuid/:year/:secure' });
  this.route('preview', { path: ':uuid/:year/:secure/preview' });
  this.route('not-found');
  this.route('fourohfour', { path: '*path' });
});
