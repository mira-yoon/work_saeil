$(document).ready(function(){

    // 메인 메뉴
    const subMenu = $("#main-menu .sub-menu");
    const subMenuWrap = $(".sub-menu-wrap");
    const bg = $(".bg");
  
    $("#main-menu .depth-1 > li > a").on("mouseover focus", function(){
      subMenu.css("display","none");
      subMenuWrap.stop().animate({"height":"60px"},100,()=>{
        $(this).parent().children(".sub-menu").fadeIn(300);
        bg.fadeIn(300);
      });
    });
  
    $("#main-menu").on("mouseleave blur", function(){
      subMenuWrap.stop().animate({"height":"0px"},100,function(){
        subMenu.css("display","none");
        bg.css("display","none");
      });
    });
  
    $("#main-menu .sub-menu-5 li:last-child a").on("blur", function(){
      subMenuWrap.stop().animate({"height":"0px"},100,function(){
        subMenu.css("display","none");
        bg.css("display","none");
      });
    });
  
  
    // 헤더 검색 영역 열고 닫기
    const btnZoom = $(".zoom");
    const headerSearch = $(".header-search");
  
    btnZoom.click(function(){
      if(headerSearch.is(":visible")) {
        headerSearch.hide();
      } else {
        headerSearch.stop().animate({"height":"80px"},100,function(){
          $(this).fadeIn(100);
        });
      }
    });
  
    // 모바일 전체 메뉴 열고 닫기
    const btnMobile = $(".btn-mobile");
    const mobileArea = $(".mobile-area");
    
    btnMobile.click(function(){
      mobileArea.css("display","block");
    });
  
    $(".btn-mobile-close").click(function(){
      mobileArea.css("display","none");
    });

    // 모바일 전체 메뉴 빈 영역 클릭 시 닫기
    mobileArea.click(function(e){
      if(!$(e.target).hasClass("mobile-area")) {
        $(e.target).css("display","block");
      } else {
        $(e.target).css("display","none");
      }
    });
  
  
    // 모바일 전체 메뉴 pc크기에서 사라지기
    $(window).resize(function() {
      if(btnMobile.is(":hidden")) {
        mobileArea.hide();
      }
    });
  
  
    // 모바일 서브 메뉴 열고 닫기
    const mobileList = $(".mobile-main-menu .depth-1 > li > a");
  
    mobileList.click(function(e){
      e.preventDefault();
      const target = $(this);
      const targetSub = $(this).siblings(".sub-menu");
  
      if(targetSub.is(":visible")) {
        target.removeClass("on");
        targetSub.removeClass("on");
      } else {
        target.addClass("on");
        targetSub.addClass("on");
      }
  
    });
  
    
  });