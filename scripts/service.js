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
    },
    {
      name: "Fashion",
      url: "https://pixabay.com/static/uploads/photo/2015/02/04/17/18/space-624054_960_720.jpg",
    }
  ];

  this.getCategories = function() {
    return categories;
  };

  var images = [
    {
      name: "Space",
      url: "./img/space.jpg",
      likes: randomNum()
    },

    {
      name: "City",
      url: "./img/city.jpg",
      likes: randomNum()
    },
    {
      name: "Closeup Portrait",
      url: "./img/closeup.jpg",
      likes: randomNum()
    },
    {
      name: "Brooklyn Bridge",
      url: "./img/bridge.jpg",
      likes: randomNum()
    },
    {
      name: "Teacher in Class",
      url: "./img/teaching.jpg",
      likes: randomNum()
    },
    {
      name: "Swimming",
      url: "./img/swimming.jpg",
      likes: randomNum()
    }
  ];


  this.getImages = function() {
    return images;
  };

});
