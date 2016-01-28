angular.module 'doorapi'
  .config ($logProvider, toastrConfig) ->
    'ngInject'
    # Enable log
    $logProvider.debugEnabled true
    # Set options third-party lib
    toastrConfig.allowHtml = true
    toastrConfig.timeOut = 3000
    toastrConfig.positionClass = 'toast-top-right'
    toastrConfig.preventDuplicates = true
    toastrConfig.progressBar = true

  .config (AuthProvider) ->
    AuthProvider.loginPath('/api/users/sign_in.json')
    AuthProvider.loginMethod('POST')
    AuthProvider.logoutPath('/api/users/sign_out.json')
    AuthProvider.logoutMethod('DELETE')

  # Have Devise intercept all 401 errors
  #.config (AuthInterceptProvider) ->
    #AuthInterceptProvider.interceptAuth(true)

  .config ($httpProvider) ->
    # Push the 403 interceptor
    $httpProvider.interceptors.push('customInterceptor')
