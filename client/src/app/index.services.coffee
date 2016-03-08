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

  .factory 'socket', ($rootScope, $http, $log) ->
    socket = io.connect() #192.168.1.103:8080

    socket.on('connect', () ->
      $http.get("api/websocketauth").then((response) ->
        $log.log(response.data)
        socket.emit('authentication', response.data)
        socket.on('authenticated', () ->
          $log.log('socket authenticated')
        )
      )
    )


    return {
      on: (eventName, callback) ->
        socket.on(eventName, () ->
          args = arguments
          $rootScope.$apply( () ->
            callback.apply(socket, args)
          )
        )

      emit: (eventName, data, callback) ->
        socket.emit(eventName, data, () ->
          args = arguments
          $rootScope.$apply( () ->
            if callback
              callback.apply(socket, args)
          )
        )
    }
