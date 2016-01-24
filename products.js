(function() {
  var app = angular.module('store-products', []);

    app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;

        this.setCurrent = function(index){
          this.current = index;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function() {
        this.tab = 1;

        this.setTab = function(tab){
          this.tab = tab;
        };

        this.isSet = function(tab){
          return (this.tab === tab);
        };
      },
      controllerAs: 'tab'
    }
  })

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);

      this.review = {};
    };
  });

})();