tdashapp.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/alltest.html'})
    .when('/addTest',{templateUrl:'views/addTest.html'})
    .when('/chngepss',{templateUrl:'views/chngepss.html'})
    .otherwise({template:'SOMETHING WRONG TRY AGAIN...'})
})