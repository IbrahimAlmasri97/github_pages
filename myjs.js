        //$(function(){
       //"use strict";

       $(window).load(function() {
       $(".lod").fadeOut(2000);
       });

        $(document).ready(function(){


        //    $(function(){
       //     'use strict';
            $('.ic').on('click',function(){
            $(this).toggleClass('tra');
            });
   //     });
        
        $('.carousel').carousel({
          interval: 5000
        })
          
          $("button.blight").click(function()
          {
            $("div.divv").addClass("light").removeClass("dark");
          });

          $("button.bdark").click(function()
          {
            $("div.divv").addClass("dark").removeClass("light");
          });
  

        
          
          $(".wwee").click(function(){
            $(".wwee").animate({
              fontSize:'40px',
              color : '#ffffff' ,
              backgroundColor: '#000'
         
              
              
            },3000,function(){
            
            });
        
                            $("<a></a>",
                            { 
                            text:"Order now",
                            class:"btn btn-primary" ,
                            }).appendTo(".wwee");
          });
        
          $(".dar").click(function(){
            $(":root").css(
            {
              "--mc" : "#c93d33",
           
            }
            )});
        

         
            $(".alight").click(function(){
              $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css(
              {
                "backgroundColor" : "#fff",
                "color" : "#000",
                "border" : "0px solid rgba(31, 18, 107, 0.322)",
               
              });
                 var bst = $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('background-color')
                  ,cst=$(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('color');
                 localStorage.setItem("bst", bst);
                 localStorage.setItem("cst", cst);
        
            });
        $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('background-color', localStorage.getItem("bst"));  
        $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('color', localStorage.getItem("cst"));

             $(".adark").click(function(){
              $(".ddd, .ddd p , .ddd h1 , .features , .smedia ,  .smedia i,  .smedia p,.nav-tabs").css(
              {
                "backgroundColor" : "#000000d3",
                "color" : "#fff",
              }
             );
             $(".card-body").css(
              {
            
                "color" : "#fff",
                "backgroundColor" :   "rgba(5, 15, 39, 0.904)",
                "border" : "2px solid rgba(31, 18, 107, 0.322)",
              
              });
            
              var bst = $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('background-color')
              ,cst=$(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('color')
              , bstc= $(".card-body").css('background-color');
              localStorage.setItem("bst", bst);
             localStorage.setItem("cst", cst);
         
    
        });
    $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('background-color', localStorage.getItem("bst"));  
    $(".ddd, .ddd p , .ddd h1 , .features ,.card-body, .smedia ,  .smedia i,  .smedia p,.nav-tabs").css('color', localStorage.getItem("cst"));

  
  });
      
  function openNav() {
 
    document.getElementById("mySidenav").style.width = "250px";
  
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
  $(".bsb2 , .bsb22").click(function(){
    $(".sc ,.so").toggleClass("sc").toggleClass("so");
    $(".bsb2 , .bsb22").toggleClass("bsb22").toggleClass("bsb2");
   
   // $(".b1 , .b2").toggleClass("b2").toggleClass("b1");
   });

 // $(Window).on("resize", function() {

    $(".sc a,.so a").on("click",function(){
      if($(window).width() < 690)
      {
        $(this).children().slideToggle(500);
      } else {
        $(this).children().css("display","none");
      }
 });

  //});
  

   $(".food").click(function(){
    $(this).nextAll(".f").slideToggle(300).css("display","block");
    $(".men a .w1, .men a .m1").toggleClass("m1").toggleClass("w1");
     });
   $(".drink").bind("click dblclick",function(){
    $(this).nextAll(".d").slideToggle(300).css("display","block");
    $(".men a .w2, .men a .m2").toggleClass("m2").toggleClass("w2");
   });
   $(".mk").on("click",function(){
    $(this).nextAll(".m").slideToggle(300).css("display","block");  
    $(".men a .w3, .men a .m3").toggleClass("m3").toggleClass("w3");
     });
    //OR  $("body").on("click", ".mk",function(){

     

  var i= 0;
  
  $(".bsb2").click(function(){
   if(i%2===0){
    $(".bsb2 i").css("transform","rotate(180deg)");
   }
   else
   {
    $(".bsb2 i").css("transform","rotate(0deg)");
   
   }
   i++
  });


  
  $(".wwee").click(function(){
    $(".wwee").animate({
      fontSize:'40px',
      color : '#ffffff' ,
      backgroundColor: '#000'
 
      
      
    },3000,function(){
    
    });

                    $("<a></a>",
                    { 
                    text:"Order now",
                    class:"btn btn-primary" ,
                    }).appendTo(".wwee");



                 
  });

  $(Window).on("scroll", function() {

    var sscc=$(this).scrollTop(),
    ofs=$(".card-body").offset().top();
    console.log(sscc);
    if(sscc>1300)
    $(".smedia i").css("color","red");
    else
    $(".smedia i").css("color","white");

    if(sscc>=ofs)
    $(".card-body").css("background-color","#F00");
  });



  //class="rounded-circle"

  // Extra small devices (portrait phones, less than 576px)
//@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, 576px and up)
//@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (tablets, 768px and up)
//@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Large devices (desktops, 992px and up)
//@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Extra large devices (large desktops, 1200px and up)
//@media (min-width: 1200px) { ... }

