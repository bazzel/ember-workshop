import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  starred: function() {
    return new Array(this.get('starCount'));
  }.property('starCount'),
  unstarred: function() {
    return new Array(5-this.get('starCount'));
  }.property('starCount')
});
