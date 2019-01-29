$(document).ready(function(){


    new WOW().init();
                                     
    $(document).on("click", ".pp_", function (e) {
        e.preventDefault();
        var el = $(this);
        var th_pp = el.attr('data-pp');
        var th_serv = el.attr('data-serv');
        $('html,body').css('overflow', 'hidden');
        $('.pp').removeClass('show');
        $('.pp[data-pp="' + th_pp + '"]').addClass('show');
        $('.pp__form_descreipt').html(th_serv);
        $(".color-default").html(th_serv);
    });
    $(document).on('click', ".pp__close, .pp__bg, .btn_cross", function () {
        $('.pp').removeClass('show');
        $('html,body').css('overflow', 'auto');
    });
    $(document).mouseup(function(e){
        var div = $('.pp');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.pp').removeClass('show');
            $('html,body').css('overflow', 'auto');
        }
    });
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            $('.pp').removeClass('show');
            $('html,body').css('overflow', 'auto');
        }
    };
    
  
      $("a").click(function() {
        if ( $(this).attr("href") == "" )
        {}
        else {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1000);
        return false;
    }

      

});
    
  
if ($(window).width() <= 1200) {
    $(".slide__tittle").html(" С нами уже <br> успешно работают: ");
        
       }

   if ($(window).width() <= 1024) {

    $(".slide__tittle").html(" С нами уже успешно работают: ");

    $(".call-us__image:eq(0)").attr("src","img/plain2.svg");

    $("#service .section__inner h2.page__tittle").html("услуги <br> бизнес-флористики");


    // $(".mobile_spoiler").slideUp();

    $(".mobile-spoiler__detailed").on('click',function(){
        $(this).siblings(".mobile_spoiler").slideDown();
        $(this).slideUp();
    });


    
   }
   else{
    $(".call-us__image:eq(0)").attr("src","img/plain.svg");
    $(".mobile_spoiler").slideDown();

   }

   if ($(window).width() <= 768) {

    // var img = "mg/consultationbgmobile.png";

    $(".call-us__image:eq(0)").attr("src","img/plain.svg");
    $(".call-us__image:eq(2)").attr("src","img/consultationbgmobile.png");    

var fmn_flag = 0;

    $(".item__tittle").on('click',function(){

if (fmn_flag == 0) {
      $(this).siblings(".col__list_item-wrap").slideDown();
        $(this).css("margin-bottom","20px");
        $(this).children("img").css("transform","rotate(-90deg)");
        fmn_flag = 1;
}
else
{
   $(this).siblings(".col__list_item-wrap").slideUp();
        $(this).css("margin-bottom","25px");
        $(this).children("img").css("transform","rotate(0deg)");
        fmn_flag = 0;

}

    

    });
   }
   

   $(window).on('resize', function(){
   if ($(window).width() <= 1200) {
$(".slide__tittle").html(" С нами уже <br> успешно работают: ");
    
   }
    
    if ($(window).width() <= 1024) {
        $(".slide__tittle").html(" С нами уже успешно работают: ");
        $(".call-us__image:eq(0)").attr("src","img/plain2.svg");
    
        $("#service .section__inner h2.page__tittle").html("услуги <br> бизнес-флористики");
    
    
        // $(".mobile_spoiler").slideUp();
    
        $(".mobile-spoiler__detailed").on('click',function(){
            $(this).siblings(".mobile_spoiler").slideDown();
            $(this).slideUp();
        });
    
    
        
       }
       else{
        $(".call-us__image:eq(0)").attr("src","img/plain.svg");
        $(".mobile_spoiler").slideDown();
    
       }


   if ($(window).width() <= 768) {

    // var img = "mg/consultationbgmobile.png";

    $(".call-us__image:eq(0)").attr("src","img/plain.svg");
    $(".call-us__image:eq(2)").attr("src","img/consultationbgmobile.png");    

var fmn_flag = 0;

    $(".item__tittle").on('click',function(){

if (fmn_flag == 0) {
      $(this).siblings(".col__list_item-wrap").slideDown();
        $(this).css("margin-bottom","20px");
        $(this).children("img").css("transform","rotate(-90deg)");
        fmn_flag = 1;
}
else
{
   $(this).siblings(".col__list_item-wrap").slideUp();
        $(this).css("margin-bottom","25px");
        $(this).children("img").css("transform","rotate(0deg)");
        fmn_flag = 0;

}    });
   }
   else{    $(".call-us__image:eq(2)").attr("src","img/consultationbg.png");}
   });




    if (window.pageYOffset >= 100) {
  if ($(window).width() <= 1024) {

  }
  
else{   
   $(".nav__link-box").css({
    "background-color": "white",
    "padding-left" : "7%"

    
});

if ($(window).width() <= 1600) {
    $(".nav__link-box").css({
        "background-color": "white",
        "padding-left" : "5%"
    });
}

$(".nav__link-box_item").css({
    "padding-top" : " 0px "
});
$(".item__hidden").css({
    "transition": "0.3s",
"opacity": "1",
"transform": "scaleX(1)",
"width": "auto",
"margin-right": "2%"
});

$(".nav__link-box_item:nth-last-child(2)").hide();

$(".pageup").css({
"opacity": "1",
"visibility": "visible"
});}
    
  }

 $(window).scroll(function() {

// проверка на докрутку до определенного элемента
var scroll_picca =$('.algorithm').offset().top;
 
if ($(this).scrollTop() > scroll_picca-500 ) {
    // создаем эффекты и анимацию
    $(".step__img").addClass("startsvg");
    
}	



    if ($(window).width() <= 1024) {
        $(".nav__link-box").css({
            "background-color": "transparent",
            "padding-left" : "0px"
        });


    
              if (window.pageYOffset >= 100) {
                $(".nav__link-box_item:nth-last-child(2)").hide();
              }
              else{
                $(".nav__link-box_item:nth-last-child(2)").show();
              }


    }
    else 
    {
        if (window.pageYOffset >= 0) {

            $(".pageup").css({
                "opacity": "1",
                "visibility": "visible"
            });
            
            }
              if (window.pageYOffset >= 100) {

                if ($(window).width() <= 1600) {
                    $(".nav__link-box").css({
                        "background-color": "white",
                        "padding-left" : "5%"
                    });
                }

                else{
                    $(".nav__link-box").css({
                        "background-color": "white",
                        "padding-left" : "7%"
                    });
                }
           
        
            $(".nav__link-box_item").css({
                "padding-top" : " 0px "
            });
        $(".item__hidden").css({
            "transition": "0.3s",
            "opacity": "1",
            "transform": "scaleX(1)",
            "width": "auto",
            "margin-right": "2%"
        });
        
        $(".nav__link-box_item:nth-last-child(2)").hide();
        }  
       
              else {

                if ($(window).width() <= 1600) {
                    $(".nav__link-box").css({
                        "background-color": "transparent",
                    "padding-left" : "5%"
            
                    });
                }
                else{

                    $(".nav__link-box").css({
                        "background-color": "transparent",
                    "padding-left" : "7%"
            
                    });
                }
        
            
                $(".nav__link-box_item").css({
                    "padding-top" : " 70px "
                });
        
                $(".nav__link-box_item:nth-last-child(2)").css({
                    "padding-top" : " 24px "
                });
        
                $(".item__hidden").css({
                    "transition": "0s",
                    "opacity": "0",
                    "transform": "scaleX(0)",
                    "width": "0",
                    "margin-right": "0"
                });
                $(".nav__link-box_item:nth-last-child(2)").show();
        
                $(".pageup").css({
                    "opacity": "0",
                    "visibility": "hidden"
                });
              }
    }

 
  });


  $(".mobile__nav_menu").on('click', function(){

    $(this).toggleClass("nav_menu-active");
    $(".mobile__nav_phone").toggleClass("nav_menu-active");
    $('html,body').toggleClass('ovh');

  });

  $(".mobile__menu_list *").on('click', function(){

    $(".mobile__nav_menu").removeClass("nav_menu-active");
    $(".mobile__nav_phone").removeClass("nav_menu-active");
    $(".html,body").removeClass("ovh");

  });


//   $("input[type='tel']").mask("+9(999)999-99-99");

  $("#form_callus").validate({
    // onkeyup: function(element) {$(element).valid()},

      rules:
      {
        namme:
        {
            required:true,
            minlength: 3
        },
        phone: {
            required:true
        }
      },
      messages : 
      {
        namme:
        {
            required: " Это поле должно быть заполнено ",
            minlength: " Это поле должно содержать более 2х символов"
        },
        phone: {
            required: " Это поле должно быть заполнено "
        }
      },
      submitHandler: function()
      {
        // $(this).ajaxSubmit();


  // $('html,body').css('overflow', 'hidden');
  // $('.pp').removeClass('show');
  // $('.pp[data-pp="success"]').addClass('show');


      }
  });


  $("#form_project").validate({
    // onkeyup: function(element) {$(element).valid()},

    rules:
    {
      namme:
      {
          required:true,
          minlength: 3
      },
      phone: {
          required:true
      }
    },
    messages : 
    {
      namme:
      {
          required: " Это поле должно быть заполнено ",
          minlength: " Это поле должно содержать более 2х символов"
      },
      phone: {
          required: " Это поле должно быть заполнено "
      }
    },
    submitHandler: function()
    {
        // $('html,body').css('overflow', 'hidden');
        // $('.pp').removeClass('show');
        // $('.pp[data-pp="success"]').addClass('show');
      
    }
});


$("#form_consultation").validate({
    // onkeyup: function(element) {$(element).valid()},

    rules:
    {
      namme:
      {
          required:true,
          minlength: 3
      },
      phone: {
          required:true
      }
    },
    messages : 
    {
      namme:
      {
          required: " Это поле должно быть заполнено ",
          minlength: " Это поле должно содержать более 2х символов"
      },
      phone: {
          required: " Это поле должно быть заполнено "
      }
    },
    submitHandler: function()
    {
  //        $('html,body').css('overflow', 'hidden');
  // $('.pp').removeClass('show');
  // $('.pp[data-pp="success"]').addClass('show');

    }
});


$("#form_callback").validate({
    // onkeyup: function(element) {$(element).valid()},


    rules:
    {
      namme:
      {
          required:true,
          minlength: 3
      },
      phone: {
          required:true
      }
    },
    messages : 
    {
      namme:
      {
          required: " Это поле должно быть заполнено ",
          minlength: " Это поле должно содержать более 2х символов"
      },
      phone: {
          required: " Это поле должно быть заполнено "
      }
    },
    submitHandler: function()
    {
        // alert("GG");

        // $('html,body').css('overflow', 'hidden');
        // $('.pp').removeClass('show');
        // $('.pp[data-pp="success"]').addClass('show');

    }
});


$("#form_service").validate({
    // onkeyup: function(element) {$(element).valid()},

    rules:
    {
      namme:
      {
          required:true,
          minlength: 3
      },
      phone: {
          required:true
      }
    },
    messages : 
    {
      namme:
      {
          required: " Это поле должно быть заполнено ",
          minlength: " Это поле должно содержать более 2х символов"
      },
      phone: {
          required: " Это поле должно быть заполнено "
      }
    },
    submitHandler: function()
    {
        // $('html,body').css('overflow', 'hidden');
        // $('.pp').removeClass('show');
        // $('.pp[data-pp="success"]').addClass('show');
      
    }
});




  $("form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
    
   if ($(this).valid() == false ) {
    e.preventDefault();
   }

   else
   {
e.preventDefault();
    var form_data = $(this).serialize(); //собераем все данные из формы
    $.ajax({
    type: "POST", //Метод отправки
    url: "sendemail.php", //путь до php фаила отправителя
    data: form_data,
    success: function(data){


       
    // console.log(data);
    if (data == 1)
    {
        $('html,body').css('overflow', 'hidden');
        $('.pp').removeClass('show');
        $('.pp[data-pp="success"]').addClass('show');

    }
    else
    {
    // alert("Произошла ошибка");
    }
},
error: function(data) {
    // console.log(data);
    if (data != 1) {
    // alert("Произошла ошибка");
    }

 }
})
   }



  });


var BrowserDetect = { 
    init: function () { 
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; 
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; 
    this.OS = this.searchString(this.dataOS) || "an unknown OS"; 
    }, 
    searchString: function (data) { 
    for (var i=0;i<data.length;i++) { 
    var dataString = data[i].string; 
    var dataProp = data[i].prop; 
    this.versionSearchString = data[i].versionSearch || data[i].identity; 
    if (dataString) { 
    if (dataString.indexOf(data[i].subString) != -1) 
    return data[i].identity; 
    } 
    else if (dataProp) 
    return data[i].identity; 
    } 
    }, 
    searchVersion: function (dataString) { 
    var index = dataString.indexOf(this.versionSearchString); 
    if (index == -1) return; 
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); 
    }, 
    dataBrowser: [ 
    { 
    string: navigator.userAgent, 
    subString: "Chrome", 
    identity: "Chrome" 
    }, 
    { string: navigator.userAgent, 
    subString: "OmniWeb", 
    versionSearch: "OmniWeb/", 
    identity: "OmniWeb" 
    }, 
    { 
    string: navigator.vendor, 
    subString: "Apple", 
    identity: "Safari", 
    versionSearch: "Version" 
    }, 
    { 
    prop: window.opera, 
    identity: "Opera", 
    versionSearch: "Version" 
    }, 
    { 
    string: navigator.vendor, 
    subString: "iCab", 
    identity: "iCab" 
    }, 
    { 
    string: navigator.vendor, 
    subString: "KDE", 
    identity: "Konqueror" 
    }, 
    { 
    string: navigator.userAgent, 
    subString: "Firefox", 
    identity: "Firefox" 
    }, 
    { 
    string: navigator.vendor, 
    subString: "Camino", 
    identity: "Camino" 
    }, 
    {  
    /* For Newer Netscapes (6+) */ 
    string: navigator.userAgent, 
    subString: "Netscape", 
    identity: "Netscape" 
    }, 
    { 
    string: navigator.userAgent, 
    subString: "MSIE", 
    identity: "Internet Explorer", 
    versionSearch: "MSIE" 
    }, 
    { 
    string: navigator.userAgent, 
    subString: "Gecko", 
    identity: "Mozilla", 
    versionSearch: "rv" 
    }, 
    {  
    /* For Older Netscapes (4-) */ 
    string: navigator.userAgent, 
    subString: "Mozilla", 
    identity: "Netscape", 
    versionSearch: "Mozilla" 
    } 
    ], 
    dataOS : [ 
    { 
    string: navigator.platform, 
    subString: "Win", 
    identity: "Windows" 
    }, 
    { 
    string: navigator.platform, 
    subString: "Mac", 
    identity: "Mac" 
    }, 
    { 
    string: navigator.userAgent, 
    subString: "iPhone", 
    identity: "iPhone/iPod" 
    }, 
    { 
    string: navigator.platform, 
    subString: "Linux", 
    identity: "Linux" 
    } 
    ] 
  
  }; 
  BrowserDetect.init(); 
  
//   document.getElementById("name").innerHTML=BrowserDetect.browser; 
//   document.getElementById("version").innerHTML=BrowserDetect.version; 
//   document.getElementById("os").innerHTML=BrowserDetect.OS;

var userbrowser = BrowserDetect.browser;
var userversion = BrowserDetect.version;
var useros = BrowserDetect.OS;

// console.log(userbrowser);
// console.log(userversion);
// console.log(useros);

if ( userbrowser == "Internet Explorer")
{
  $("body").append("<link rel='stylesheet' href='css/ie.css'>");
}
else if ( userbrowser == "Mozilla" )
{
  $("body").append("<link rel='stylesheet' href='css/ie.css'>");
}

if ( userbrowser == "Firefox" )
{
if ( $(window).width() >= 1024 )
{
$(".form__submt-box").css("transform","translateY(-26px)");    
}

else{
$(".form__submt-box").css("transform","translateY(0px)");    

}

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.height() > 1024) {
$(".form__submt-box").css("transform","translateY(-26px)");    
        
     }
    if (win.width() <= 1024) { 
$(".form__submt-box").css("transform","translateY(0px)");    
        
     }
});

}





$(".swiper-slide-duplicate").attr("data-fancybox","");


// $('[data-fancybox="gallery"]').fancybox({
//     loop : true
// });



})
$('[data-fancybox="gallery"]').fancybox({
    buttons : [ 
      'slideShow',
      'zoom',
    //   'fullScreen',
      'close'
    ],
    
     loop : true
  });

var mySwiper = new Swiper ('.sc1', {
                                        
                                        
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
          autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.sc1 .swiper-pagination',
        type: 'fraction',
        clickable: true
    },
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


var mySwiper2 = new Swiper ('.sc2', {
    
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
          autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.sc2 .swiper-pagination',
        type: 'fraction',
        clickable: true
    },
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var mySwiper3 = new Swiper ('.sc3', {
    
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
          autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.sc3 .swiper-pagination',
        type: 'fraction',
        clickable: true
    },
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

var mySwiper = new Swiper ('.sc4', {
    
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    slidesPerView: 'auto',
    // If we need pagination
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.portf-nav .swiper-pagination',
        type: 'fraction',
        clickable: true
    },
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});