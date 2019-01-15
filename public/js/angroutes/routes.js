app.config(($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{templateUrl:'views/home.html'})
    .when('/registers',{templateUrl:'views/signups.html'})
    .when('/contactus',{templateUrl:'views/contactus.html'})
    .when('/faq',{templateUrl:'views/faq.html'})
    .when('/tnc',{templateUrl:'views/tnc.html'})
    .when('/forgetpss',{templateUrl:'views/forgetpss.html'})
    .otherwise({template:'SOMETHING WRONG TRY AGAIN...'})
})