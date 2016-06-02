angular.module("app").service("service", function() {

  // var categories = [
  //   {
  //     name:
  //     url:
  //
  //   }
  // ]


  var images = [
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: 0,
    },

    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: 0,
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: 0,
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: 0,
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: 0,
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: 0,
    }
  ]


  this.getImages = function() {
    return images;
  };

});
