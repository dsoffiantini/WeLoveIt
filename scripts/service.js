angular.module("app").service("service", function() {

  function randomNum() {
      return Math.floor(Math.random() * 1000);
  }

  var categories = [
    {
      name: "Art",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    },

    {
      name: "Architecture",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    },
    {
      name: "Nature",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    },
    {
      name: "Food",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    },
    {
      name: "Business",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    },
    {
      name: "Animals",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    },
    {
      name: "People",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    }
  ];

  this.getCategories = function() {
    return categories;
  };

  var images = [
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: randomNum()
    },

    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: randomNum()
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: randomNum()
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: randomNum()
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: randomNum()
    },
    {
      name: "Space",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
      likes: randomNum()
    }
  ];


  this.getImages = function() {
    return images;
  };

});
