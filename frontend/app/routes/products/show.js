import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition: function() {
      var book = this.currentModel;

      if (book.get('isDirty')) {
        book.rollback();
      }
      this.controller.set('isEditing', false);
    }
  }
});
