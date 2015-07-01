/**
 * Created with JetBrains PhpStorm.
 * User: Chen Chao
 * Date: 2015/5/7
 * Time: 10:15
 */

$(function(){

  'use strict';

  var $loading = $('<div id="loading"><div id="fixedBox"><div id="circular_1" class="circular"></div><div id="circular_2" class="circular"></div><div id="circular_3" class="circular"></div> <div id="circular_4" class="circular"></div><div id="circular_5" class="circular"></div><div id="circular_6" class="circular"></div><div id="circular_7" class="circular"></div><div id="circular_8" class="circular"></div></div></div>');

  var render = {
    pIntegralList: function(item){
      var tpl = '<tr><td>{{rank}}</td><td>{{userName}}</td><td>{{totalIntegral}}</td><td>{{tribeGrade}}</td></tr>';
      return tpl.replace('{{rank}}', item.rank).replace('{{userName}}', item.userName).replace('{{totalIntegral}}', item.totalIntegral).replace('{{tribeGrade}}', item.tribeGrade);
    },
    cIntegralList: function(item){
      var tpl = '<tr><td>{{rank}}</td><td>{{branchName}}</td><td>{{integralTotal}}</td></tr>';
      return tpl.replace('{{rank}}', item.rank).replace('{{branchName}}', item.branchName).replace('{{integralTotal}}', item.integralTotal);
    }
  };

  function showLoading(){
    if($('#loading').size() == 0){
      $('body').append($loading);
    }
  }

  function hideLoading(){
    $('#loading').remove();
  }

  $.ajaxSetup({
    beforeSend: function(){
      showLoading();
    },
    complete: function(){
      if(window.location.pathname != '/login' && window.location.pathname != '/'){
        hideLoading();
      }
    },
    error: function(){
      hideLoading();
    }
  });

  highLightFootMenu();

  $('#doLogin').click(function(){
    var userNo = $('#userNo').val();
    var password = $('#password').val();
    var params = {
      "user.userNo": userNo,
      "user.password": password,
      "user.miNo": '0001'
    };
    if(!userNo || !password){
      alert('用户名或密码不能为空');
      return false;
    }
    $.post('/api/doLogin', params, function(d){
      if(d.isSuccess){
        window.location.href = '/myIntegral';
      }else{
        alert(d.errorMsg);
        hideLoading();
      }
    }, 'json');
  });

  $('.arr-left').click(function(){
    showLoading();
    history.back();
  });

  $('a').click(function(){
    if($(this).attr('href').indexOf('/') > -1){
      showLoading();
    }
  });

  $('#getMoreData').click(function(){
    var $this = $(this);
    var api = $this.attr('data-api');
    var page = $this.attr('data-page');
    $.post('/api/' + api, {page: page}, function(d){
      if(d.isSuccess){
        $this.attr('data-page', page * 1 + 1);
        if(d.data.list){
          var html = '';
          d.data.list.forEach(function(item){
            html += render[api](item);
          });
          $(html).appendTo('#list');
        }else{
          $this.text('无数据');
        }
      }else{
        alert(d.errorMsg);
        hideLoading();
      }
    }, 'json');
  });

  var photoData = getPhotoswipeImages();
  $('.photoswipe-view-img').click(function(){
    if(photoData.length > 0){
      var index = $(this).index('.photoswipe-view-img');
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var items = photoData;
      var options = {
        index: index
      };
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    }
  });

  function getPhotoswipeImages(){
    var data = [];
    $('.photoswipe-view-img').each(function(){
      var img = new Image();
      var item = {
        src: $(this).attr('src'),
        h: 0,
        w: 0
      };
      img.src = item.src;
      img.onload = function(){
        item.h = this.height;
        item.w = this.width;
      };
      data.push(item);
    });
    return data;
  }

  function highLightFootMenu(){
    var currentPath = window.location.pathname;
    var $footMenu = $('.footerNav-menu');
    $footMenu.each(function(){
      if($(this).attr('href') == currentPath){
        $(this).addClass('current');
      }
    });
  }

});