angular.module("app").controller("controller", function($scope, service) {

  $scope.images = service.getImages();

  $scope.addLike = function(image) {
    image.likes++;
  };

});
