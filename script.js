$(document).ready(function(){
    $(window).scroll(function(){
        sc = $(window).scrollTop()
     $('#scroll_text').text(sc)  
     if( sc >= 1000 ){
         $('#b1-1').css({'left':'-145px','opacity':'1'})
         $('#b1-2').css({'left':'0px','opacity':'1'})
     }
     if( sc >=2400 ){
        $('#banner2box1').css({'transform':'rotateY(0deg)','opacity':'1'})
        $('#banner2box2').css({'transform':'rotateY(0deg)','opacity':'1'})

     }

    })
    
    

    auto_key = 0
    $('#play_btn').click(function(){
        auto_key = 0;
       })
    $('#pause_btn').click(function(){
        auto_key = 1;
       })
    setInterval(function(){
        //메인 슬라이드 setInterval
    if(auto_key==0) {
        if( slide_num <= -600 ){             
            slide_num = 0;
            $('#slide_img').stop().css({'left':0})
            
        }
       slide_num = slide_num - 100;
        $('#slide_img').stop().animate({'left':slide_num+'%'},300)
        
        //밑에 있는 버튼과 연동
        slide_bt_num = slide_num/-100
        if(slide_bt_num == 6 ){ slide_bt_num = 0 }//맨위 사진을 첫장처럼
        $('#bottombt>li').eq( slide_bt_num ).css({'width':'10px','height':'10px','background-color':'#fff'}).siblings('li').css({'width':'7px','height':'7px','background-color':'rgb(159, 159, 159)'})
     }

    
    },10000)
    event_slide_num = 0
    event_bt_num = 0
    setInterval(function(){
        //newevent 슬라이드 setInterval 
        if(event_slide_num <= -1072 ){ 
            event_slide_num = 0 
            $('.newevent_img_slide').css({'left':0})
        }
        event_slide_num = event_slide_num-268
        $('.newevent_img_slide').stop().animate({'left':event_slide_num})
        //버튼연동
        event_bt_num = event_slide_num/-268
        if(event_bt_num == 4 ){ event_bt_num = 0}
        $('#newevent_bt>li').eq( event_bt_num ).css({'width':'9px','height':'9px','background-color':'#2c1810'}).siblings().css({'width':'6px','height':'6px','background-color':'#c1ae96'})

    },5000)
   

    //맨위슬라이드팝업
    $('#slideup_bt_box_open').click(function(){
        $('#slideup_wrap').animate({'margin-top':'1px'})
        $(this).css({'display':'none'}).siblings('#slideup_bt_box_close').css({'display':'block'})
    })
    $('#slideup_bt_box_close').click(function(){
        $('#slideup_wrap').animate({'margin-top':'-210px'})
        $(this).css({'display':'none'}).siblings('#slideup_bt_box_open').css({'display':'block'})
    })
    //팝업창
    $('#popup_bt').click(function(){
        $('#popup').css({'display':'none'})
    })
    //서브메뉴
    $(document).ready(function(){

    $('#menu2-2>li').mouseenter(function(){
        $(this).children('.sub_box').fadeIn()
       
        
    })
    $('#menu2-2>li').mouseleave(function(){
        $(this).children('.sub_box').fadeOut()
       
       
    })
    $('#menu2-2').mouseenter(function(){
        $('#header2').stop().animate({'height':'348px'})
    })
    $('#menu2-2').mouseleave(function(){
        $('#header2').stop().animate({'height':'55px'})
    })
})
    //슬라이드 좌우
    slide_num = 0;
    $('#bt_next').click(function(){
       
        if( slide_num <= -600 ){             
            slide_num = 0;
            $('#slide_img').stop().css({'left':0}) 
            
        }
       slide_num = slide_num - 100;
        $('#slide_img').stop().animate({'left':slide_num+'%'},300)
        
        //밑에 있는 버튼과 연동
        slide_bt_num = slide_num/-100
        if(slide_bt_num == 6 ){ slide_bt_num = 0 }//맨위 사진을 첫장처럼
        $('#bottombt>li').eq( slide_bt_num ).css({'width':'10px','height':'10px','background-color':'#fff'}).siblings('li').css({'width':'7px','height':'7px','background-color':'rgb(159, 159, 159)'})
    })
    $('#bt_prev').click(function(){
        if( slide_num >= 0 ){ 
            $('#slide_img').stop().css({'left':'-600%'})
            slide_num = -600} 
          slide_num = slide_num +100;
        
        $('#slide_img').stop().animate({'left':slide_num+'%'},300)
        $('#bottombt>li').eq( slide_num/-100 ).css({'width':'10px','height':'10px','background-color':'#fff'}).siblings().css({'width':'7px','height':'7px','background-color':'rgb(159, 159, 159)'})

    })
    //슬라이드 하단 버튼
    $('#bottombt>li').click(function(){
        $(this).css({'width':'10px','height':'10px','background-color':'#fff'})
        $(this).siblings('li').css({'width':'7px','height':'7px','background-color':'rgb(159, 159, 159)'})
        //
        BtNum = $(this).index()*-100//좌우로 -100%씩 이동
        $('#slide_img').stop().animate({'left':+BtNum+'%'},800)
        
    })
    //newevent 슬라이드
    $('#newevent_bt>li').click(function(){
        $(this).css({'width':'9px','height':'9px','background-color':'#2c1810'})
        $(this).siblings().css({'width':'6px','height':'6px','background-color':'#c1ae96'})
        menuNum = $(this).index()*-268//좌우로 -100%씩 이동
        $('.newevent_img_slide').stop().animate({'left':+menuNum+'px'},100)
    })
    
    

    
    

})