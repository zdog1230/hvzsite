import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  user: Ember.inject.service(),
  errorHandler: Ember.inject.service(),

  model(params) {
    return this.get('ajax').request('/admin/users/' + params.playerId, {
      data: {
        apikey: this.get('user').getApiKey()
      }
    }).then((result) => {
      var player = result.user;
      player.avatar = config.APP.apiURL + '/api/v2/avatar/' + params.playerId;
      return {player: player};
    }).catch((err) => {
      this.get('errorHandler').handleError(err, 'Unable to retrieve player profile.');
      return {player: {}};
    });
  },

  actions: {
    generateId(id) {
      Ember.$('#generateButton').hide();

      this.get('ajax').post('/admin/users/' + id + '/generateId', {
        data: {
          apikey: this.get('user').getApiKey()
        }
      }).then(() => {
        this.get('toast').success('Generated new human id.');
        this.refresh();
        Ember.$('#generateButton').show();
      }).catch((err) => {
        this.get('errorHandler').handleError(err, 'There was a problem generating a new human id.');
        Ember.$('#generateButton').show();
      });
    }
  }
});