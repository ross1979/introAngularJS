describe('myApp', function(){

  beforeEach(module('myApp'));

  it('Did you set $scope.products equal to an array of objects?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    expect(scope.products.length).toBe(2);
  }));

  it('In $scope.products, did you add "The Book of Trees" object?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});
    var product = scope.products[0];
    expect(product).toEqual({ name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg'
    });
  }));

  it('In $scope.products, did you add the "Program or be Programmed" object?', inject(function($controller) {
    var scope = {},
          ctrl = $controller('MainController', {$scope:scope});

    var product = scope.products[1];
    expect(product).toEqual({
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg'
  } );
  }));
});
