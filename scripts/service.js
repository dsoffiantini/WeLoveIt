angular.module("app").service("service", function() {

  function randomNum() {
      return Math.floor(Math.random() * 1000);
  }

  var categories = [
    {
      name: "Holidays",
      url: "./img/holidays.jpg",
    },

    {
      name: "Architecture",
      url: "./img/architecture.jpg",
    },
    {
      name: "Nature",
      url: "./img/nature.jpg",
    },
    {
      name: "Food & Drink",
      url: "./img/food.jpg",
    },
    {
      name: "Business",
      url: "./img/business.jpg",
    },
    {
      name: "Animals",
      url: "./img/animals.jpg",
    },
    {
      name: "People",
      url: "./img/people.jpg",
    },
    {
      name: "Fashion",
      url: "./img/fashion.jpg",
    }
  ];

  this.getCategories = function() {
    return categories;
  };

  var images = [
    {
      name: "Space",
      url: "./img/space.jpg",
      likes: randomNum(),
      category: "Space",
      description: "The Milky Way Galaxy",
      tags: ['space', 'galaxy', 'amazing', 'pretty']
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

  this.getTags = function() {
    return images["tags"];
  }

});
