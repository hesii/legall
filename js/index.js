$(function () {
  var width = 625;
  var num = 0;
  var next = 0;
  var swite = true;
  var as = $('.center-right-img');
  var spot = $('.banner-point');
  for(var i = 0;i<as.length;i++){
    if(i==0){
      continue;  
  }
  as.eq(i).css({left:width});
  }
var t = setInterval(showLogin,3000);
$('.center-right').on('mouseover',function(){
  clearInterval(t);
});
$('.center-right').on('mouseout',function(){
  t= setInterval(showLogin,3000);
});
function showLogin() {
      next++;
      if (next === as.length) {
        next = 0;
      }
      as.eq(next).css({left:width});
      as.eq(num).animate({left: -width}, function () {
        swite = true;
      });
      as.eq(next).animate({left: 0});
      num = next;
      for (j = 0; j < spot.length; j++) {
        spot.eq(j).removeClass('choosed');
      }
      spot.eq(num).addClass('choosed');
}

    $('.banner-point').click(function () {
      if (swite) {
        swite = false;
        var index = $(this).index();
        var len = spot.length;
        for (var i = 0; i < len; i++) {
          spot.eq(i).removeClass('choosed');
          as.eq(i).css({left:width});
        }
        $(this).addClass('choosed');
        as.eq(index).animate({left:0},function(){
          swite = true;
        });
        num = index;
        next = num;
      } else {
        return;
    }}
  )})
//实现右边导航栏的tab切换
$(function () {
  $('.left-nav').click(function () {
  $(this).addClass('left-choose').siblings().removeClass('left-choose');
  $('.left-boot').eq($(this).index()).show().siblings().hide();
})
})
//实现下面导航栏的tab切换
$(function () {
  $('.boot-related').click(function () {
      $(this).addClass("boot-choose").siblings().removeClass("boot-choose");
      var index = $(this).index();
      var j = 1;
      var len = $('.boot-content').find('.boot-thing').length;
      for (var i = 0; i < len; i++) {
           $('.boot-content').find('.boot-thing').eq(i).removeClass('selected');
           $('.boot-related').find('.b-img').eq(i).attr('src','img/'+(i+1)+'b.png');
      }
      // for (j=1;j < len + 1;j++) {
      //   console.log(j);
      // }
      $('.boot-content').find('.boot-thing').eq(index).addClass('selected');
      var x = index+1;
      $('.boot-related').find('.b-img').eq(index).attr('src','img/'+x+'w.png');
  })
});
$(function(){
  $('.refresh-btn').click(function(){
    $(this).addClass('refresh-btn-choose').siblings().removeClass('refresh-btn-choose');
  })
})
$(function(){
  var listArr = [
      { title: '司法部法律援助工作司司长白萍1', link: 'javascript:;', picUrl: 'img/banner01.jpg' },
      { title: '司法部法律援助工作司司长白萍2', link: 'javascript:;', picUrl: 'img/banner02.jpg' },
      { title: '司法部法律援助工作司司长白萍3', link: 'javascript:;', picUrl: 'img/banner03.jpg' },
      { title: '司法部法律援助工作司司长白萍4', link: 'javascript:;', picUrl: 'img/banner04.jpg' },
      { title: '司法部法律援助工作司司长白萍5', link: 'javascript:;', picUrl: 'img/banner05.jpg' },
      { title: '司法部法律援助工作司司长白萍6', link: 'javascript:;', picUrl: 'img/banner01.jpg' },
      { title: '司法部法律援助工作司司长白萍7', link: 'javascript:;', picUrl: 'img/banner02.jpg' },
      { title: '司法部法律援助工作司司长白萍8', link: 'javascript:;', picUrl: 'img/banner03.jpg' },
  ];
  //动态添加图片在列表栏中
  var pic = function (arr) {
     var len = arr.length;
      var list1 = $('.boot-boxs');
      var list2 = $('.caro-pics');
      for (var i = 0; i < len; i++) {
           var boots = $('<li class="boot-box left" data-src="'+arr[i].picUrl+'">'+
               '<div class="boot-img"><img src="'+arr[i].picUrl+'"></div>'+
               '<div class="boot-right-content">'+arr[i].title+'</div>'+
               '</li>'
             );
             var caros = $( '<li class="caro left" data-src="'+arr[i].picUrl+'">'+
             '<img src="'+arr[i].picUrl+'" alt="">'+
             ' </li>'     
             );
              list1.append(boots);
              list2.append(caros);
      }
//关闭按钮
        $('.close').on('click',function() {
        $('.shadow-box').addClass('hidden');
        $('.caro').removeClass('border');//给下面滑动窗口去掉边框
      })
      var bannul = $('.caro-pics');//滑动框的ul
      var bannli = $('.caro');//滑动框的li
      var dbSwite = true;
      //点击图片事件
      $('.boot-boxs').find('.boot-box').on('click',function() {
        bannindex = 0;
        $('.shadow-box').removeClass('hidden');
        var src = $(this).data('src');//获取当前图片的url
        var index = $(this).index();//获取当前点击的图片位置
        $('.caro').eq(index).addClass('border');
        $('.card-img').attr('src',$(this).data('src'));
        $('.card-banner').find('a').text(arr[index].title); 
        var left = parseInt(100*index);
        if (left > 300) {//点击左右切换按钮之后，当点击到第4个时，将ul向左移动相应宽，之后都向左移动
          dbSwite = false;
          bannul.animate({left: -left}, function () {
            nowLeft = left;
            dbSwite = true;
          });
        } else if (left == 300) {
          bannul.animate({left: 0}, function () {
            nowLeft = left;
            dbSwite = true;
          });
        }
        // console.log(index);
         bannindex = index;
        console.log(bannindex);

    });  
    //右边切换
    var rightf = function() {
      bannindex++;//点击右边切换按钮之后的定位
      console.log('rrr'+bannindex);
      if(bannindex >= arr.length) {//当点击到最后一个时，重新开始
        bannindex = 0;
        leftNum = 0;
        dbSwite = false;
        bannul.animate({left: leftNum}, function () {
          dbSwite = true;
        });
    }
      $('.caro').removeClass('border');
      $('.caro').eq(bannindex).addClass('border');
      $('.card-img').attr('src', arr[bannindex].picUrl);
      $('.card-banner').find('a').text(arr[bannindex].title);
    };
//左边切换
   var leftf = function() {
      bannindex--;
      console.log('lll'+bannindex);
      if(bannindex < 0) {
        bannindex = arr.length - 1;
      }
      $('.caro').removeClass('border');
      $('.caro').eq(bannindex).addClass('border');
      $('.card-img').attr('src', arr[bannindex].picUrl);
      $('.card-banner').find('a').text(arr[bannindex].title);//给显示窗口加上对应图片文字
    };

    $('.switch').on('click',function() {
      if(dbSwite){
      var id = $(this).attr('id');
        if(id=='left') {
          leftf();
        }else if(id=='right') {
          rightf();
        }
        console.log('此时的定位是：'+bannindex);
        var left = parseInt(100*bannindex);
        if (left > 300) {//点击左右切换按钮之后，当点击到第4个时，将ul向左移动相应宽，之后都向左移动
          dbSwite = false;
          bannul.animate({left: -left}, function () {
            nowLeft = left;
            dbSwite = true;
          });
        } else if (left == 300) {
          bannul.animate({left: 0}, function () {
            nowLeft = left;
            dbSwite = true;
          });
        }
      }
    })
      $('.caro-pics').find('.caro').on('click',function(){
        var src = $(this).data('src');
        var index = $(this).index();
        var text = arr[index].title;
        $('.card-img').attr('src', src);//给显示图片加上被点击的图
        $('.card-banner').find('a').text(text);//给显示窗口加上对应图片文字      
        $('.caro').removeClass('border');
        $(this).addClass('border');//给下部分加上边框
        var left = parseInt(100*index);
        if (left > 200) {//点击左右切换按钮之后，当点击到第4个时，将ul向左移动相应宽，之后都向左移动
          dbSwite = false;
          bannul.animate({left: -left}, function () {
            nowLeft = left;
            dbSwite = true;
          });
        } else if (left === 200) {
          bannul.animate({left: 0}, function () {
            nowLeft = left;
            dbSwite = true;
          }); 
        }
      });     

}
  pic(listArr);
});
