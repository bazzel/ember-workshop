import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function() {
      this.controller.resetModel();
      this.controller.set('isEditing', false);
    }
  }
});
