// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngRoute','ngCordova','angularLazyImg','ngAnimate'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });


  // BACK button
  $ionicPlatform.registerBackButtonAction(function (event) {
      window.history.back();
  }, 100);

  //


})



//routing
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
   $routeProvider
   .when('/',{
     templateUrl:'news.html',
     controller:'newscontroller'
   })
   .when('/news',{
   templateUrl:'news.html',
   controller:'newscontroller'
   })
   .when('/events',{
   templateUrl:'events.html',
   controller:'eventscontroller'
   })
   .when('/clinics',{
   templateUrl:'clinics.html',
   controller:'clinicscontroller'
   })
   .when('/pharmacies',{
   templateUrl:'pharmacies.html',
   controller:'pharmaciescontroller'
   })
   .when('/hospitaldetails/:name',{
   templateUrl:'hospitaldetails.html',
   controller:'hospdetailcontroller'
   })
   .when('/eventdetails',{
   templateUrl:'eventdetails.html',
   controller:'eventdetailscontroller'
   })
   .when('/pharmaciesdetails',{
   templateUrl:'pharmaciesdetail.html',
   controller:'pharmaciesdetailcontroller'
  })
   .when('/myorders',{
   templateUrl:'myorder.html',
   controller:'myorderscontroller'
   })
   .when('/checkout',{
   templateUrl:'checkout.html',
   controller:'checkoutcontroller'
   })
   .when('/discount',{
   templateUrl:'discount.html',
   controller:'discountcontroller'
   })
   .when('/activeorder',{
   templateUrl:'activeorder.html',
   controller:'activecontroller'
   })
   .when('/expireorder',{
   templateUrl:'expireorder.html',
   controller:'expirecontroller'
   })
   .when('/cancelledorder',{
   templateUrl:'cancelledorder.html',
   controller:'cancelledcontroller'
   })
   .when('/redeemedorder',{
   templateUrl:'redeemed.html',
   controller:'redeemedcontroller'
   })
   .when('/search',{
   templateUrl:'search.html',
   controller:'searchcontroller'
   })
   .when('/location',{
   templateUrl:'location.html',
   controller:'locationcontroller'
   })
   .when('/profile',{
   templateUrl:'profile.html',
   controller:'profilecontroller'
   })
   .when('/register',{
   templateUrl:'register.html',
   controller:'registercontroller'
   })
   .when('/otp',{
   templateUrl:'otp.html',
   controller:'registercontroller'
   })
   .when('/login',{
   templateUrl:'login.html',
   controller:'registercontroller'
   })
   .when('/show',{
   templateUrl:'show.html',
   controller:'NotificationController'
   });
 }]);


 app.controller('NotificationController', function($scope,$location,$cordovaLocalNotification, $ionicPlatform) {

   $ionicPlatform.ready(function () {

       $scope.scheduleSingleNotification = function () {
         $cordovaLocalNotification.schedule({
           id: 1,
           title: 'Notification',
           text: 'Go to clinics page',
           data: {
             customProperty: 'custom value'
           }
         }).then(function (result) {
           console.log('Notification 1 triggered');
         });

         cordova.plugins.notification.local.on("click", function (notification, state) {
           $location.path('/clinics');
         }, this)

       };
     });

 });

  $(document).ready(function(){

    $("#cancel").click(function(){
      $(".sidebar-menu").addClass("hide-menu");
      $("#back-cover").removeClass("back-cover");
    });
    /*$(".toggle-menu").click(function(){
      $(".sidebar-menu").removeClass("hide-menu");
      $("#back-cover").addClass("back-cover");
    });*/

  });
