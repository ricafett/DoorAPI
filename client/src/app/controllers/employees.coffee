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

  .controller "ShowEmployeeCtrl", ($scope, $state, $stateParams, Employee, socket, $modal, $log) ->
    getEmployee = () ->
      employee = Employee.get({ id: $stateParams.id })
      employee.$promise.then(
        ((data) ->
          $scope.employee = data
        ),((error) ->
          $scope.error = error.data.error
        )
      )
    getEmployee()

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

    $scope.deletePrint = (employee, printN) ->
      socket.emit('deleteFingerprint', {user: employee, printN: printN})
      socket.on('deleteFingerprintUpdate', (data) ->
        if data.status == 'error'
          alert(data.error)
        else
          getEmployee()
      )


    $scope.openFingerprint =  () ->
      modalInstance = $modal.open(
        animation: true,
        templateUrl: 'app/views/employees/fingerprints.html',
        controller: 'FingerprintCtrl',
        size: "lg",
        backdrop: 'static',
        resolve:
          employee: () ->
            $scope.employee
      )
      modalInstance.result.then(() ->
        getEmployee()
      )

  .controller "FingerprintCtrl", ($scope, $modalInstance, employee, socket, $log) ->
    $scope.btnFinish = false
    $scope.progress = 0
    $scope.type = 'primary'

    socket.emit('addFingerprint', {user: employee})
    socket.on('addFingerprintUpdate', (data) ->
      $scope.status = data.status
      $scope.progress = data.progress
      if data.progress >= 100
        $scope.btnFinish = true
        $scope.type = 'success'
      if data.error
        $scope.error = data.error
        $scope.type = 'danger'
    )

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
