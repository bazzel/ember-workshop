import Ember from 'ember';

export function timeAgoInWords(input) {
  return moment(input).fromNow();
};

export default Ember.Handlebars.makeBoundHelper(timeAgoInWords);
