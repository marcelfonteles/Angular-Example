var app = angular.module("angularExample");

app.controller("EventsCtrl", ["$scope", "Event", "Evento", function($scope, Event, Evento) {
  $scope.events = Event.query();
  // $scope.eventos = Evento.query({ id: 1});
  
  $scope.filterEvents = function() {
    
  }
  
  
   $scope.addEvent = function() {
    if (!valid()) { return false; }
    // usa o method post, caralho!1!
    Event.save($scope.event,
      function(response, _headers) {
        $scope.events.push(response);
      },
      function(response) {
        alert('Errors: ' + response.data.errors.join('. '));
      }
    );

    $scope.event = {};
  };
   valid = function() {
    return !!$scope.event &&
      !!$scope.event.name && !!$scope.event.event_date &&
      !!$scope.event.description && !!$scope.event.place;
  };
}]);