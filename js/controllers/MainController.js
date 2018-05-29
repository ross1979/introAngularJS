app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{
    	name: 'The Book of Trees',
    	price: 19,
    	pubdate: new Date('2014', '03', '08'),
    	cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
  	},
  	{
    	name: 'Program or be Programmed',
    	price: 8,
    	pubdate: new Date('2013', '08', '01'),
    	cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
  	},
    {
      name: 'MicroAdventures',
      price: 12,
      pubdate: new Date('2014', '05', '05'),
      cover: 'img/microadventures.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Catch 22',
      price: 10,
      pubdate: new Date('1961', '05', '23'),
      cover: 'img/catch-22.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index) {
   $scope.products[index].likes += 1;
 };
 $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
