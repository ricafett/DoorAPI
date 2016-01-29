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
          $location.path('/employees/' + result.id)
        ),
        ( (error) ->
          $scope.formErrors = error.data
        )
      )

  .controller "ShowEmployeeCtrl", ($scope, $state, $stateParams, Employee, $modal, $log) ->
    $scope.employee = Employee.get({ id: $stateParams.id })
    $scope.employee.$promise.then(
      ((data) ->
          #YAY
      ),((error) ->
        $scope.error = error.data.error
      )
    )

    $scope.deleteEmployee = (employee) ->
      Employee.remove(
        employee,
        ((result) ->
          $state.go('employees')
        ),
        ( (error) ->
          $scope.error = error.data.error
        )
      )

    $scope.openFingerprint =  () ->
      modalInstance = $modal.open(
        animation: true,
        templateUrl: 'app/views/employees/fingerprints.html',
        controller: 'FingerprintCtrl',
        size: "lg",
        resolve:
          employee: () ->
            $scope.employee
      )

  .controller "FingerprintCtrl", ($scope, $modalInstance, employee, $log) ->
    $scope.employee = employee

    if !employee.fingerprint1
      $scope.fingernumber = 1
    else if employee.fingerprint1 && !employee.fingerprint2
      $scope.fingernumber = 1


    $scope.ok =  () ->
      $modalInstance.close()
    $scope.cancel =  () ->
      $modalInstance.dismiss('cancel')


  .controller "EditEmployeeCtrl", ($scope, $stateParams, $location, Employee, $log) ->
    $scope.employee = Employee.get({ id: $stateParams.id })
    $scope.employee.$promise.then(
      ((data) ->
          #YAY
      ),((error) ->
        $scope.error = error.data.error
      )
    )

    $scope.updateEmployee = ->
      Employee.update(
        $scope.employee,
        ((result) ->
          $location.path('/employees/' + result.id)
        ),
        ( (error) ->
          $scope.formErrors = error.data
        )
      )
