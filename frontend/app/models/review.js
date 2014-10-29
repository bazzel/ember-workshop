import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  rating: DS.attr('number', { defaultValue: 0 }),
  user: DS.attr(),
  createdAt: DS.attr()
});
