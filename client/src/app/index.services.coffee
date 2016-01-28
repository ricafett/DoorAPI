angular.module 'doorapi'
  .factory 'Group', ($resource) ->
    $resource('/api/groups/:id', id: "@id", {
      update: { method: 'PUT' }
    })
    
  .factory 'Employee', ($resource) ->
    $resource('/api/users/:id', id: "@id", {
      update: { method: 'PUT' }
    })

  .factory 'customInterceptor', ($q, $injector, $log) ->
    return {
      responseError: (response) ->
        if (response.status == 403)
          $injector.get('$state').go('home', {error: response.data})

        return $q.reject(response)
    }
