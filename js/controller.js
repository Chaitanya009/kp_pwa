app.controller('myCtrl', function($scope){
  $scope.toggleClass = function() {
	  var s = angular.element( document.querySelector( '#myDropdown' ) );
	  s.toggleClass('show');
  }
  $('#page').bind('click', function(){
    var r = angular.element( document.querySelector( '#myDropdown' ) );
    r.removeClass('show');
  })
})


//icon toggle

app.controller('changeicon', function($scope,$rootScope){
  /*
   $scope.img1 = 'img/healthtips-01.png';
   $scope.img2 = 'img/hospital-01.png';
   $scope.img3 = 'img/clinic-01.png';
   $scope.img4 = 'img/pharmacy-01.png';

   $scope.toggleimage1 = function(){
     $scope.img1 = 'img/healthtips-01.png';
     $scope.img2 = 'img/hospital-01.png';
     $scope.img3 = 'img/clinic-01.png';
     $scope.img4 = 'img/pharmacy-01.png';
   }

   $scope.toggleimage2 = function(){
    $scope.img2 = 'img/hospitalcolour-01.png';
    $scope.img1 = 'img/healthtipsun-01.png';
    $scope.img3 = 'img/clinic-01.png';
    $scope.img4 = 'img/pharmacy-01.png';
  }

   $scope.toggleimage3 = function(){
    $scope.img3 = 'img/cliniccolour-01.png';
    $scope.img1 = 'img/healthtipsun-01.png';
    $scope.img2 = 'img/hospital-01.png';
    $scope.img4 = 'img/pharmacy-01.png';
   }
   $scope.toggleimage4 = function(){
    $scope.img4 = 'img/pharmacycolour-01.png';
    $scope.img1 = 'img/healthtipsun-01.png';
    $scope.img2 = 'img/hospital-01.png';
    $scope.img3 = 'img/clinic-01.png';
   }*/



});

/*My Location controllers
app.controller('mylocation', function($scope,$http){
   $http.get('https://freegeoip.net/json/?callback=')
   .then(function(response){
     console.log('Response: ' + JSON.stringify(response))
     $scope.location = response;
     $scope.city = response.data.city;
     $scope.region_name = response.data.region_name;
   });
});*/

//Heaalthtips controllers
app.controller('htipscontroller', function($scope){
  $scope.htips=[
    {
      image:"http://www.freewebdestinations.com/wp-content/uploads/2016/07/f30ed19e4386481594a479f300aa5595a8d4e759.jpeg",
      heading:"Few Intresting Facts About Your Health",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      source:"www.oldschool.com"
    },
    {
      image:"http://www.freewebdestinations.com/wp-content/uploads/2016/07/f30ed19e4386481594a479f300aa5595a8d4e759.jpeg",
      heading:"Few Intresting Facts About Your Health",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      source:"www.oldschool.com"
    },
    {
      image:"http://www.freewebdestinations.com/wp-content/uploads/2016/07/f30ed19e4386481594a479f300aa5595a8d4e759.jpeg",
      heading:"Few Intresting Facts About Your Health",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      source:"www.oldschool.com"
    }
  ]

  window.addEventListener("offline", function () {
    console.log("u r offline");
  }, false);

  window.addEventListener("online", function () {
    console.log("u r online");

  }, false);

});


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
//Clinics controllers
app.controller('clinicscontroller', function($scope){

  $scope.clinics=[
    {
     image:"http://www.chainstoreage.com/sites/chainstoreage.com/files/field_main_image/2016-01/healthcare_clinic.jpg",
     name:"Sakara Clinic",
     type:"Dental Clinic",
     location:"Hebbal",
     star:"3.5",
     dis:"25",
     nocoup:"2",
     pricecoup:"150"
   },
   {
    image:"http://www.chainstoreage.com/sites/chainstoreage.com/files/field_main_image/2016-01/healthcare_clinic.jpg",
    name:"Sakara Clinic ",
    type:"Dental Clinic",
    location:"Hebbal",
    star:"3.5",
    dis:"25",
    nocoup:"2",
    pricecoup:"150"
  },
  {
   image:"http://www.chainstoreage.com/sites/chainstoreage.com/files/field_main_image/2016-01/healthcare_clinic.jpg",
   name:"Sakara Clinic ",
   type:"Dental Clinic",
   location:"Hebbal",
   star:"3.5",
   dis:"25",
   nocoup:"2",
   pricecoup:"150"
 }
];


});
//Pharmacies controllers
app.controller('pharmaciescontroller', function($scope){

  $scope.pharmacies=[
    {
     image:"https://static1.squarespace.com/static/5347fd2be4b0bb0f73fa8604/t/534c042de4b02ba40e32be16/1397490735325/pharmacy1.jpg?format=1500w",
     name:"FamilyMedicals",
     location:"Hebbal",
     star:"3.5",
     dis:"25",
     nocoup:"2",
     pricecoup:"150"
   },
   {
    image:"https://static1.squarespace.com/static/5347fd2be4b0bb0f73fa8604/t/534c042de4b02ba40e32be16/1397490735325/pharmacy1.jpg?format=1500w",
    name:"FamilyMedicals",
    location:"Hebbal",
    star:"3.5",
    dis:"25",
    nocoup:"2",
    pricecoup:"150"
  },
  {
   image:"https://static1.squarespace.com/static/5347fd2be4b0bb0f73fa8604/t/534c042de4b02ba40e32be16/1397490735325/pharmacy1.jpg?format=1500w",
   name:"FamilyMedicals",
   location:"Hebbal",
   star:"3.5",
   dis:"25",
   nocoup:"2",
   pricecoup:"150"
 }
];


});


app.controller('hospdetailcontroller', function($scope, $rootScope,$routeParams){

  $scope.pageClass = 'page-trans';
  //back button
  $scope.goback = function(){
     window.history.back();
  };
  //route parameter
  $scope.hospname = $routeParams.name;
  $scope.hospimage = $routeParams.image;
  //toggle btw show more & show less img
  $scope.toggle1 = true;

  $scope.$watch('toggle1', function(){
      $scope.toggleText1 = $scope.toggle1 ? 'Show More' : 'Show Less';
      $scope.imgurl1 = $scope.toggle1 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.cardshow = $scope.toggle1 ? false : true;

  })
  //toggle btw know more & know less img
  $scope.toggle2 = true;

  $scope.$watch('toggle2', function(){
      $scope.toggleText2 = $scope.toggle2 ? 'Know more' : 'Know less';
      $scope.imgurl2 = $scope.toggle2 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.cardshow2 = $scope.toggle2 ? false : true;
  })
  $scope.toggle21 = true;

  $scope.$watch('toggle21', function(){
      $scope.toggleText21 = $scope.toggle21 ? 'Know more' : 'Know less';
      $scope.imgurl21 = $scope.toggle21 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.cardshow21 = $scope.toggle21 ? false : true;
  })
  //toggle btw All reviews & Less reviews
  $scope.toggle4 = true;

  $scope.$watch('toggle4', function(){
      $scope.toggleText4 = $scope.toggle4 ? 'All Reviews' : 'Less Reviews';
      $scope.imgurl4 = $scope.toggle4 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.cardshow4 = $scope.toggle4 ? false : true;
  })
  //
  var d = angular.element( document.querySelector('#bottomBar'));
  d.css('display','none');
  //display buynow bar
  $scope.dispbottbar = function(){
    var d = angular.element( document.querySelector('#bottomBar'));
    d.css('display','block');
  }
  //display knowmore card
  $scope.cardshow1 = function(){
    $scope.cardshow=!false;
  };

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

});

app.controller('eventdetailscontroller', function($scope, $rootScope){

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

});

app.controller('pharmaciesdetailcontroller', function($scope, $rootScope){

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


});

 //my orders controller

 //Hospital controllers
 app.controller('myorderscontroller', function($scope){

   $scope.pageClass = 'page-trans';

   $scope.hospital=[
     {
      image:"img/hospital/sakara1.jpg",
      name:"Sakara Hospital",
      type:"Alopathy",
      location:"Hebbal",
      star:"3.5",
      dis:"25",
      nocoup:"2",
      pricecoup:"150",
      coupStatus:"active"
    },
    {
     image:"img/hospital/vedanta.jpg",
     name:"Vedanta Hospital",
     type:"Alopathy",
     location:"Hebbal",
     star:"3.5",
     dis:"25",
     nocoup:"2",
     pricecoup:"150",
     coupStatus:"expired"
   },
   {
    image:"img/hospital/sakara1.jpg",
    name:"Sakara Hospital",
    type:"Alopathy",
    location:"Hebbal",
    star:"3.5",
    dis:"25",
    nocoup:"2",
    pricecoup:"150",
    coupStatus:"cancelled"
  },
  {
   image:"img/hospital/sakara1.jpg",
   name:"Sakara Hospital",
   type:"Alopathy",
   location:"Hebbal",
   star:"3.5",
   dis:"25",
   nocoup:"2",
   pricecoup:"150",
   coupStatus:"redeemed"
 }

 ];

 //back button
 $scope.goback = function(){
    window.history.back();
 };

 });

 //checkout controller
 app.controller('checkoutcontroller', function($scope){

   $scope.pageClass = 'page-trans';
   //back button
   $scope.goback = function(){
      window.history.back();
   };
   //show loader
   $scope.showloader = function(){
      $scope.show = true;
   };
   //toggle btw know more & know less img
   $scope.toggle1 = true;

   $scope.$watch('toggle1', function(){
       $scope.toggleText1 = $scope.toggle1 ? 'Know more' : 'Know less';
       $scope.imgurl1 = $scope.toggle1 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
       $scope.cardshow1 = $scope.toggle1 ? false : true;
   })
   $scope.toggle2 = true;

   $scope.$watch('toggle2', function(){
       $scope.toggleText2 = $scope.toggle2 ? 'Know more' : 'Know less';
       $scope.imgurl2 = $scope.toggle2 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
       $scope.cardshow2 = $scope.toggle2 ? false : true;
   })
   $scope.toggle3 = true;

   $scope.$watch('toggle3', function(){
       $scope.toggleText3 = $scope.toggle3 ? 'Know more' : 'Know less';
       $scope.imgurl3 = $scope.toggle3 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
       $scope.cardshow3 = $scope.toggle3 ? false : true;
   })

 });
//active controllers
app.controller('activecontroller', function($scope){

  $scope.pageClass = 'page-trans';

  //back button
  $scope.goback = function(){
    window.history.back();
  };
  //toggle btw know more & know less img
  $scope.toggle = true;

  $scope.$watch('toggle', function(){
      $scope.toggleText = $scope.toggle ? 'Know more' : 'Know less';
      $scope.imgurl = $scope.toggle ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })

});
//expire controllers
app.controller('expirecontroller', function($scope){

  $scope.pageClass = 'page-trans';

  //back button
  $scope.goback = function(){
    window.history.back();
  };
  //toggle btw know more & know less img
  $scope.toggle = true;

  $scope.$watch('toggle', function(){
      $scope.toggleText = $scope.toggle ? 'Know more' : 'Know less';
      $scope.imgurl = $scope.toggle ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })

});
//cance controllers
app.controller('cancelledcontroller', function($scope){
  $scope.pageClass = 'page-trans';

  //back button
  $scope.goback = function(){
    window.history.back();
  };
  //toggle btw know more & know less img
  $scope.toggle = true;

  $scope.$watch('toggle', function(){
      $scope.toggleText = $scope.toggle ? 'Know more' : 'Know less';
      $scope.imgurl = $scope.toggle ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })

});
//redeemed controllers
app.controller('redeemedcontroller', function($scope){
  $scope.pageClass = 'page-trans';

  //back button
  $scope.goback = function(){
    window.history.back();
  };
  //toggle btw know more & know less img
  $scope.toggle = true;

  $scope.$watch('toggle', function(){
      $scope.toggleText = $scope.toggle ? 'Know more' : 'Know less';
      $scope.imgurl = $scope.toggle ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
  })

});

//search controllers
app.controller('searchcontroller', function($scope){
  $scope.pageClass = 'page-trans-2';

  //back button
  $scope.goback = function(){
    window.history.back();
  };

});

//profile controllers
app.controller('profilecontroller', function($scope){
  $scope.pageClass = 'page-trans';

  //back button
  $scope.goback = function(){
    window.history.back();
  };



});

//register controllers
app.controller('newscontroller', ['$scope','$location','$http','$ionicPopup','$window', function($scope,$location,$http, $ionicPopup,$window){

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


  $scope.user = {};


  //register
  $scope.register = function(){

    console.log('registered');
    console.log($scope.user);
    window.localStorage.setItem("mobile_no", $scope.user.mobile_no);
    $scope.loading = true;

  //  $localStorage.mobile_no = $scope.user.mobile_no;
   /*$http.post('http://52.37.155.102:7777/register/user.name/user.email/user.mobile_no/user.device_type', $scope.user)
      .success(function (data){
         console.log($scope.user);
      })
      .error(function (data){
        console.log("error");
      });
*/

   $http.get('http://52.37.155.102:7777/register/'+$scope.user.name+'/'+$scope.user.email+'/'+window.localStorage.getItem("mobile_no")+'/android')
     .success(function (data) {
        $scope.api_data = data;
        $scope.status = data.status;
        console.log($scope.status);

        if($scope.status=="User exists"){
           $location.path('/');
           $scope.loading = false;
        }
        else {
          $location.path('/otp');
        }

      })
     .error(function (data) {
        $scope.errorMessage = "Error";
      })
      .finally(function (){
        //$scope.loadingpage = false;
      });

   };

   //login
   $scope.login = function(){
     console.log('login');
     $scope.loading = true;
     window.localStorage.setItem("mobile_no", $scope.user.mobile_no);
     console.log(window.localStorage.getItem("mobile_no"));

     $http.get('http://52.37.155.102:7777/login/'+window.localStorage.getItem("mobile_no"))
      .success(function (data) {
         $scope.api_data = data;
         $scope.status = data.status;
         console.log($scope.status);

         if($scope.status=="OTP sent to your mobile no"){
           $location.path('/otp');
         }
         else {
            $scope.loading = false;
         }

       })
      .error(function (data) {
         $scope.errorMessage = "Error";
       })
       .finally(function (data){
         //$scope.loading = false;
       });
    };

   //verify
   $scope.verify = function(){
     console.log('verified');
     console.log($scope.user.otp);
     console.log(window.localStorage.getItem("mobile_no"));

     $scope.loading = true;

     $http.get('http://52.37.155.102:7777/verify_otp/'+window.localStorage.getItem("mobile_no")+'/'+$scope.user.otp+'/android')
      .success(function (data) {
         $scope.api_data = data;
         $scope.status = data.status;
         console.log($scope.status);

         if($scope.status=="User validated"){
            $location.path('/htips');
         }
         else {
           $location.path('/otp');
           $scope.loading = false;
         }

       })
      .error(function (data) {
         $scope.errorMessage = "Error";
       })
       .finally(function (data){
         //$scope.loading = false;
       });
    };

    //resend otp
    $scope.resend_otp = function(){
      console.log('resend');

      $scope.loading = true;


      $http.get('http://52.37.155.102:7777/resendOTP/'+window.localStorage.getItem("mobile_no"))
       .success(function (data) {
          $scope.api_data = data;
          $scope.status = data.status;
          console.log($scope.status);

          if($scope.status=="OTP sent again"){
            $scope.loading = false;
          }
          else {
            $scope.loading = false;
          }

        })
       .error(function (data) {
          $scope.errorMessage = "Error";
        })
        .finally(function (data){
          //$scope.loading = false;
        });
     };





   //htips
    $scope.htips=[
      {
        image:"http://www.freewebdestinations.com/wp-content/uploads/2016/07/f30ed19e4386481594a479f300aa5595a8d4e759.jpeg",
        heading:"Few Intresting Facts About Your Health",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        source:"www.oldschool.com"
      },
      {
        image:"http://www.freewebdestinations.com/wp-content/uploads/2016/07/f30ed19e4386481594a479f300aa5595a8d4e759.jpeg",
        heading:"Few Intresting Facts About Your Health",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        source:"www.oldschool.com"
      },
      {
        image:"http://www.freewebdestinations.com/wp-content/uploads/2016/07/f30ed19e4386481594a479f300aa5595a8d4e759.jpeg",
        heading:"Few Intresting Facts About Your Health",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        source:"www.oldschool.com"
      }
    ]

   //show popup
   $scope.showAlert = function() {

   var alertPopup = $ionicPopup.alert({
      templateUrl: 'popup.html',
      okText: 'Continue...'
   });

   alertPopup.then(function(res) {
      // Custom functionality....
   });
  };

  $scope.toggle1 = true;

  $scope.$watch('toggle1', function(){
      $scope.toggleText1 = $scope.toggle1 ? 'Show More' : 'Show Less';
      $scope.imgurl1 = $scope.toggle1 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.page_hospital = $scope.toggle1 ? false : true;

  })

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


//location controllers
app.controller('locationcontroller', function($scope,$compile,$http,$timeout, $cordovaGeolocation){

  $scope.pageClass = 'page-trans-2';
  //back button
  $scope.goback = function(){
    window.history.back();
  };

  //get location

  $scope.latitude = 0.0;
  $scope.longitude = 0.0;

  $scope.loc_disp = false;

  $scope.get_loc = function(){

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;

        $scope.latitude = lat;
        $scope.longitude = long;

        $scope.loc_disp = true;

        $timeout(function(){

        }, 2000);

      }, function(err) {
        // error
      });
  }

  /*autocomplete
  var autocomplete = new google.maps.places.Autocomplete(
     (document.getElementById('location')),
    {types: ['geocode']});
  */

  $scope.search = function(){

    $http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+$scope.search_loc+'&key=AIzaSyArqjMHjVMjhWj3a1hPU4_DVWk7Jy9DsUg')
      .success(function (data) {
         $scope.api_data = data;
         //$scope.status = data.status;
        // console.log($scope.api_data.length);
        console.log($scope.api_data);
        // console.log($scope.api_data.predictions[0].description);
        $("#loc_list").empty();
         for(var i=0;i<5;i++){
           var loc_add = $scope.api_data.predictions[i].description;
           console.log(loc_add);
           var myEl = angular.element( document.querySelector('#loc_list'));
           myEl.append($compile('<li class="loc_list" id="loc_lst" ng-click="loc_coord(loc_add)"><i class="fa fa-map-marker" style="padding: 5px"></i>'+$scope.api_data.predictions[i].description+'</li>')($scope));
         }


       })
      .error(function (data) {
         $scope.errorMessage = "Error";
       })
       .finally(function (){
         //$scope.loadingpage = false;

       });

       $scope.loc_coord = function(loc_add){
         console.log("click");


         $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+loc_add+'&key=AIzaSyArqjMHjVMjhWj3a1hPU4_DVWk7Jy9DsUg')
           .success(function (data) {
              $scope.api_data = data;

             console.log($scope.api_data.results[0].geometry.location);
             var lt = $scope.api_data.results[0].geometry.location.lat;
             var lg = $scope.api_data.results[0].geometry.location.lng;

             $scope.lati = lt;
             $scope.long = lg;

             $scope.disp_coord = true;


            })
           .error(function (data) {
              $scope.errorMessage = "Error";
            })
            .finally(function (){
              //$scope.loadingpage = false;
            });

       };

  }
    /*search_loc_coord
    $('#loc_lst').bind('click', function(){
      console.log("click");
    })*/



});


//discount controller
app.controller('discountcontroller', function($scope){

  //back button
  $scope.goback = function(){
    window.history.back();
  };

  //toggle btw know more & know less img
  $scope.toggle2 = true;

  $scope.$watch('toggle2', function(){
      $scope.toggleText2 = $scope.toggle2 ? 'Know more' : 'Know less';
      $scope.imgurl2 = $scope.toggle2 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.cardshow2 = $scope.toggle2 ? false : true;
  })
  $scope.toggle21 = true;

  $scope.$watch('toggle21', function(){
      $scope.toggleText21 = $scope.toggle21 ? 'Know more' : 'Know less';
      $scope.imgurl21 = $scope.toggle21 ? 'img/SHOWMORE-01.png' : 'img/SHOWLESS-01.png';
      $scope.cardshow21 = $scope.toggle21 ? false : true;
  })


});
