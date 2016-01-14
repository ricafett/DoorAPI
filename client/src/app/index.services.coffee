angular.module 'doorapi'
  .factory 'Group', ($resource) ->
    $resource('/api/groups/:id', id: "@id", {
      update: { method: 'PUT' }
    })
