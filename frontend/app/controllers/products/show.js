import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      this.resetModel();
    },
    submit: function() {
      var _this = this;

      this.clearValidationErrors();

      this.model.save().then(function() {
        _this.set('isEditing', false);
      }, function(reason) {
        _this.set('validationErrors', reason.errors);
      });
    },
    removeImage: function() {
      this.set('image', null);
    }
  },
  clearValidationErrors: function() {
    if (!this.model.get('isValid')) {
      this.set('validationErrors', null);
      this.model.rollback();
    }
  },
  cleanModel: function() {
    var model = this.model;

    if (model.get('isDirty')) {
      model.rollback();
    }
  },
  resetModel: function() {
    this.clearValidationErrors();
    this.cleanModel();
  }
});
