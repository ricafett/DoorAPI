angular.module 'doorapi'
  .filter('yesNo', ->
      return (text, length, end) ->
          if (text)
              return 'Yes'
          return 'No'
  )
  .filter('employeeRole', ->
      return (text, length, end) ->
          if (text)
              return 'Administrator'
          return 'Regular User'
  )
