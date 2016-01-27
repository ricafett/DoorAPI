angular.module "doorapi"
  .controller "EmployeesCtrl", ($scope, $state, $log, Employee) ->
    $scope.employees = Employee.query(
      ((result) ->
        # YAY
      ),
      ( (error) ->
        $log.log("Query Error")
        $log.log(error)
      )
    )


  .controller "NewEmployeeCtrl", ($scope, $location, Employee, $log) ->
    $scope.employee = new Employee
    $scope.addEmployee = ->
      Employee.save(
        $scope.employee,
        ( (result) ->
          $log.log("Saved")
          $location.path('/employees/' + result.id)
        ),
        ( (error) ->
          $log.log("Error")
          $log.log(error)
        )
      )

  .controller "ShowEmployeeCtrl", ($scope, $stateParams, Employee, $log) ->
    $scope.employee = Employee.get({ id: $stateParams.id })
    $scope.employee.admin = true
    $scope.employee.role = if $scope.employee.admin then "Administrator" else "User"
    $scope.deleteEmployee = (employee) ->
      Employee.remove(
        employee,
        ((result) ->
          $log.log("Deleted")
          $state.go('users')
        ),
        ( (error) ->
          $log.log("Error")
          $log.log(error)
        )
      )

  .controller "EditEmployeeCtrl", ($scope, $stateParams, $location, Employee, $log) ->
    $scope.employee = Employee.get({ id: $stateParams.id })
    $scope.updateEmployee = ->
      Employee.update(
        $scope.employee,
        ((result) ->
          $log.log("Saved")
          $location.path('/employees/' + result.id)
        ),
        ( (error) ->
          $log.log("Error")
          $log.log(error)
        )
      )
