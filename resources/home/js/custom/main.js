$(document).ready(function(){


  // 메인 슬라이더
  $('.bxslider').bxSlider({
      auto: true,
      autoControls: true, // 컨트롤 버튼(재생/정지) 표시
      stopAutoOnClick: true, // 클릭해서 자동 실행 멈출 수 있도록 지정
      controls : false,
      pager:true
  });



  // 섹션 1 검색박스 - 셀렉트 
  const selectTarget = $('.select-box select');
  selectTarget.change(function(){
    const select_name = $(this).children('option:selected').text();
    $(this).siblings('label').text(select_name);
  });



  // 탭메뉴
  const tabList = $('#section-n-3 .tab-area > li');
  tabList.eq(0).children("a").addClass("tab-on");
  tabList.eq(0).children(".tab-content").addClass("current");

  tabList.children("a").on("click focus", function (e) {
    e.preventDefault();
    var tab_id = $(this).attr('data-tab');
    tabList.children("a").removeClass('tab-on');
    $('.tab-content').removeClass('current');
    $(this).addClass('tab-on');
    $("#" + tab_id).addClass('current');
  });


  
});