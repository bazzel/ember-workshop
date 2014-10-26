import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],
  search: Ember.computed.alias('controllers.application.search'),
  filteredContent: function() {
    var products = this.model,
        search = new RegExp(this.get('search'), 'i');

    products = products.filter(function(product) {
      var str = product.get('title') + product.get('description');
      return search.test(str);
    });
    return products;
  }.property('@each.title', '@each.description', 'search')
});
