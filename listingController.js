angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.listing = {
      code: "",
      name: "",
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      address: ""
    };

    $scope.listingsList = [];
    for (i = 0; i < $scope.listings.length; i++)
    {
      $scope.listingsList.push($scope.listings[i]);
    }
  
    $scope.detailedListing = {
      code: "",
      name: "",
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      address: ""
    };

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listingsList.push($scope.listing);
      $scope.listing = {
        code: "",
        name: "",
        coordinates: {
          latitude: 0,
          longitude: 0
        },
        address: ""
      };
    };
    $scope.deleteListing = function(index) {
      var numericalIndex = $scope.listingsList.indexOf(index);
      $scope.listingsList.splice(numericalIndex, 1);
    };
    $scope.showDetails = function(index) {
      $scope.detailedListing = index;
    };
  }
]);