import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  change: function (e) {
    var reader = new FileReader(),
         _this = this;

    reader.onload = function (e) {
      var fileToUpload = e.srcElement.result;

      Ember.run(function() {
        _this.set('file', fileToUpload);
      });
    };
    return reader.readAsDataURL(e.target.files[0]);
  }
});
