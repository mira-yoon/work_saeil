$(document).ready(function(){

    // 푸터 관련 사이트
    const btnSite = $(".family-sites .btn-site");
    const siteList = $(".family-sites ul");
  
    // 클릭해서 열고 닫기
    btnSite.click(function(){
      toggleBtnSite();
    });

    // enter키로 열고 닫기
    btnSite.keypress(function(e){
      if (e.keyCode === 13) {
        e.preventDefault();
        toggleBtnSite();
      }
    });

    // 포커스아웃으로 나갈 때 닫히기
    $(".family-sites ul li:last-child a").on("blur", function(){
      btnSite.removeClass("on");
      siteList.removeClass("on");
    });


    // 바깥 클릭하면 닫히기
    $("html").click(function(e){
      if(!$(e.target).hasClass("btn-site")) {
        btnSite.removeClass("on");
        siteList.removeClass("on");
      }
    });


    function toggleBtnSite() {
      if(siteList.is(":visible")) {
        btnSite.removeClass("on");
        siteList.removeClass("on");
      } else {
        btnSite.addClass("on");
        siteList.addClass("on");
      }
    }


  });