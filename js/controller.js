


//Hospital controllers
app.controller('eventscontroller', function($scope,$rootScope){

  $('.toggle-menu').bind('click', function(){
    var r = angular.element( document.querySelector( '.sidebar-menu' ) );
    r.removeClass('hide-menu');
    var a = angular.element( document.querySelector( '#back-cover' ) );
    a.addClass('back-cover');
  })
  $('#cancel').bind('click', function(){
    var r = angular.element( document.querySelector( '#back-cover' ) );
    r.removeClass('back-cover');
    var a = angular.element( document.querySelector( '.sidebar-menu' ) );
    a.addClass('hide-menu');
  })
  $('#back-cover').bind('click', function(){
    var r = angular.element( document.querySelector( '#back-cover' ) );
    r.removeClass('back-cover');
    var a = angular.element( document.querySelector( '.sidebar-menu' ) );
    a.addClass('hide-menu');
  })

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

});



app.controller('eventdetailscontroller', function($scope, $rootScope){

  $scope.pageClass = 'page-trans';
  //back button
  $scope.goback = function(){
     window.history.back();
  };
  //toggle btw show more & show less img
  $scope.toggle1 = true;

  $scope.$watch('toggle1', function(){
      $scope.toggleText1 = $scope.toggle1 ? 'Show More' : 'Show Less';
      $scope.imgurl1 = $scope.toggle1 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })
  //toggle btw know more & know less img
  $scope.toggle2 = true;

  $scope.$watch('toggle2', function(){
      $scope.toggleText2 = $scope.toggle2 ? 'Know more' : 'Know less';
      $scope.imgurl2 = $scope.toggle2 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })
  //toggle btw All reviews & Less reviews
  $scope.toggle4 = true;

  $scope.$watch('toggle4', function(){
      $scope.toggleText4 = $scope.toggle4 ? 'All Reviews' : 'Less Reviews';
      $scope.imgurl4 = $scope.toggle4 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })

  //map card
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("mapimage"),mapProp);
    // map marker
    var marker = new google.maps.Marker({
       position: new google.maps.LatLng(51.508742,-0.120850),
       map: map,
    });

     //get directions
     $scope.get_dir = function(){
       console.log("get directions");
       launchnavigator.navigate("London, UK");
     };

     var d = angular.element( document.querySelector('#bottomBar'));
     d.css('display','none');
     //display buynow bar
     $scope.dispbottbar = function(){
       var d = angular.element( document.querySelector('#bottomBar'));
       d.css('display','block');
     }

});



//news controllers
app.controller('newscontroller', ['$scope','$window','$sce', function($scope,$window,$sce){

  $('.toggle-menu').bind('click', function(){
    var r = angular.element( document.querySelector( '.sidebar-menu' ) );
    r.removeClass('hide-menu');
    var a = angular.element( document.querySelector( '#back-cover' ) );
    a.addClass('back-cover');
  })
  $('#cancel').bind('click', function(){
    var r = angular.element( document.querySelector( '#back-cover' ) );
    r.removeClass('back-cover');
    var a = angular.element( document.querySelector( '.sidebar-menu' ) );
    a.addClass('hide-menu');
  })
  $('#back-cover').bind('click', function(){
    var r = angular.element( document.querySelector( '#back-cover' ) );
    r.removeClass('back-cover');
    var a = angular.element( document.querySelector( '.sidebar-menu' ) );
    a.addClass('hide-menu');
  })

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

 $scope.sourcelink = 'http://coldplay.com/tour/';

  $('#newscard').bind('click', function(){
    console.log("hello");
    $scope.source_link = 'http://coldplay.com/tour/';
  })

  $scope.shownews = function(){
    console.log("hello");
    return $sce.trustAsResourceUrl(src);
    $scope.sourcelink = 'http://coldplay.com/tour/';
  }



  //detect online , offline
  $scope.offline = false;

  window.addEventListener("offline", function () {
    console.log("u r offline");
    $scope.offline = true;
  });
  window.addEventListener("online", function () {
    console.log("u r online");
    $scope.offline = false;
  });

}]);
