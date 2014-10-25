import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      this.model.rollback();
    },
    submit: function() {
      var _this = this;

      this.model.save().then(function() {
        _this.set('isEditing', false);
      });
    },
    removeImage: function() {
      this.set('image', null);
    }
  }
});
