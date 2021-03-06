import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  ajax: Ember.inject.service(),
  user: Ember.inject.service(),
  errorHandler: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      missions: this.get('ajax').request('/admin/missions', {
        data: {
          apikey: this.get('user').getApiKey()
        }
      }).then((result) => {
        return result.missions;
      }),
      
      localUser: this.get('user').getUserInfo()
    }).catch((err) => {
      this.get('errorHandler').handleError(err, 'Unable to retrieve list of missions.');
      return {};
    });
  }
});
