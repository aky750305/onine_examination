dashapp.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/testhome.html'})
    .when('/testmarks',{templateUrl:'views/testmarks.html'})
    .when('/chngepss',{templateUrl:'views/chngepss.html'})
    .otherwise({template:'SOMETHING WRONG TRY AGAIN...'})
})