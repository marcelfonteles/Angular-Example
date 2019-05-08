var app = angular.module("angularExample");

app.factory("Event", ["$resource", function($resource) {
  return $resource("/api/events/:id.json", { id: "@id"});
}])
  .factory("Evento", ["$resource", function($resource) {
    return $resource("/api/events/1/:id.json", {id: "@id"})
  }])