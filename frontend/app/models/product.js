import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
  category: DS.belongsTo('category'),
  categoryName: function() {
    return this.get('category.name');
  }.property('category'),
  averageRating: function() {
    var reviews = this.get('reviews');
    var ratings = reviews.mapBy('rating');
    var average = 0;
    ratings.forEach(function(val){
      average = average + val;
    });
    return Math.round(average / ratings.length);
  }.property('reviews.@each.rating')
});
