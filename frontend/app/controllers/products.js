import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],
  queryParams: ['category'],
  category: '',
  categories: Ember.computed.mapBy('model', 'category'),
  uniqCategories: Ember.computed.uniq('categories'),
  search: Ember.computed.alias('controllers.application.search'),
  filteredContent: function() {
    var products = this.model,
        search = new RegExp(this.get('search'), 'i'),
        category = this.get('category');

    products = products.filter(function(product) {
      var str = product.get('title') + product.get('description');
      return search.test(str);
    });

    if (category) {
      products =  products.filterBy('category.name', category);
    }

    return products;
  }.property('@each.isDirty', 'search', 'category')
});
