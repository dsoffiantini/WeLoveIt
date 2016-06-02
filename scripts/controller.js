angular.module("app").controller("controller", function($scope, service) {

  $scope.categories = service.getCategories();

  $scope.images = service.getImages();

  $scope.addLike = function(image) {
    image.likes++;
  };

});
