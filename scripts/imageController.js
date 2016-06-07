angular.module("app").controller("imageController", function($scope, $stateParams, $location, service) {

  $scope.images = service.getImages();

  $scope.image = $stateParams.imageName;

  $scope.imageObject = $stateParams;

  $scope.imageUrl = $location.path();

  $scope.myImage;

  $scope.imageGrab = function getImage() {

  for ( var i = 0; i < $scope.images.length; i++) {
  if ($scope.images[i].name === $scope.image) {
    $scope.myImage = $scope.images[i];
  }
}
}

  $scope.imageGrab();

});
