(function() {
  (function(_g) {
    var stageInfo;
    stageInfo = {
      init: function() {
        var ua;
        ua = window.navigator.userAgent.toLowerCase();
        this.canTouchEvent = Modernizr.touchevents;
        this.canTransform3d = Modernizr.csstransforms3d;
        this.canTransform = Modernizr.csstransforms;
        this.canTransition = Modernizr.csstransitions;
        this.isIE = ua.match(/msie/i);
        this.isIE9 = ua.match(/msie [9.]/i);
        this.isIE10 = ua.match(/msie [10.]/i);
        this.isAndroid = ua.match(/android/i);
        this.isIpad = ua.match(/ipad/i);
        this.isIphone = ua.match(/iphone/i);
        this.isIpod = ua.match(/ipod/i);
        this.windowWidth = $(window).width();
        this.windowHeight = $(window).height();
        this.breakpoint1 = 768;
        return $(window).on('resize', function() {
          stageInfo.windowWidth = $(window).width();
          return stageInfo.windowHeight = $(window).height();
        });
      }
    };
    return _g.stageInfo = stageInfo;
  })(this._g = this._g || {});

}).call(this);

(function() {
  $(function() {
    return $(window).scrollTop(0);
  });

  $(window).on('unload', function() {
    return $(window).scrollTop(0);
  });

  $(window).on('load', function() {
    var bgManager, contentsHeight, navManager, numPages, scrollManager, scrollSpeed, scrollY, sec1Anim, setLayout;
    _g.stageInfo.init();
    numPages = 7;
    contentsHeight = 0;
    scrollY = 0;
    scrollSpeed = 1.5;
    scrollManager = {
      init: function() {
        $('#sec2').css({
          transform: 'translate3d(0px,5000px,0px)'
        });
        $('#sec3').css({
          transform: 'translate3d(0px,5000px,0px)'
        });
        $('#sec4').css({
          transform: 'translate3d(0px,5000px,0px)'
        });
        $('#sec5').css({
          transform: 'translate3d(0px,5000px,0px)'
        });
        $('#sec6').css({
          transform: 'translate3d(0px,5000px,0px)'
        });
        $('#sec7').css({
          transform: 'translate3d(0px,5000px,0px)'
        });
        contentsHeight = (numPages * 2 - 1) * _g.stageInfo.windowHeight / scrollSpeed;
        $('#brandContents').css({
          height: contentsHeight
        });
        return $(window).on('scroll', function() {
          var wh;
          scrollY = $(window).scrollTop();
          scrollY *= scrollSpeed;
          wh = _g.stageInfo.windowHeight;
          scrollManager.update();

          /*
          				inUp
           */
          return $('.inUp').each(function() {
            var elemPos;
            elemPos = $(this).offset().top;
            if (scrollY > elemPos - wh + (wh * 0.2)) {
              return $(this).addClass('scrollin');
            }
          });
        });
      },
      resize: function() {
        contentsHeight = (numPages * 2 - 1) * _g.stageInfo.windowHeight / scrollSpeed;
        return $('#brandContents').css({
          height: contentsHeight
        });
      },
      scroll: function(num) {
        var diff, durTime, offsetY, wh;
        wh = _g.stageInfo.windowHeight;
        if (num === 1) {
          offsetY = 0;
        } else if (num === 2) {
          offsetY = wh * 3;
        } else if (num === 3) {
          offsetY = wh * 5;
        } else if (num === 4) {
          offsetY = wh * 7;
        } else if (num === 5) {
          offsetY = wh * 9;
        } else if (num === 6) {
          offsetY = wh * 11;
        } else if (num === 7) {
          offsetY = wh * 13 + 130;
        }
        offsetY /= scrollSpeed;
        diff = Math.abs(scrollY - offsetY);
        durTime = diff * 0.2;
        return $('body').velocity('scroll', {
          duration: durTime,
          offset: offsetY,
          easing: 'ease-in-out'
        });
      },
      update: function() {
        var alpha, ay, sec1Y, sec2Y, sec3Y, sec4Y, sec5Y, sec6Y, sec7Y, wh;
        wh = _g.stageInfo.windowHeight;

        /*
        			bg
         */
        if (scrollY < wh * 2.5) {
          bgManager.change(1);
        } else if (scrollY >= wh * 2.5 && scrollY < wh * 4.5) {
          bgManager.change(2);
        } else if (scrollY >= wh * 4.5 && scrollY < wh * 6.5) {
          bgManager.change(3);
        } else if (scrollY >= wh * 6.5 && scrollY < wh * 8.5) {
          bgManager.change(4);
        } else if (scrollY >= wh * 8.5 && scrollY < wh * 10.5) {
          bgManager.change(5);
        } else if (scrollY >= wh * 10.5) {
          bgManager.change(6);
        }

        /*
        			nav
         */
        if (scrollY < wh * 2.5) {
          navManager.change(1);
        } else if (scrollY >= wh * 2.5 && scrollY < wh * 4.5) {
          navManager.change(2);
        } else if (scrollY >= wh * 4.5 && scrollY < wh * 6.5) {
          navManager.change(3);
        } else if (scrollY >= wh * 6.5 && scrollY < wh * 8.5) {
          navManager.change(4);
        } else if (scrollY >= wh * 8.5 && scrollY < wh * 10.5) {
          navManager.change(5);
        } else if (scrollY >= wh * 10.5 && scrollY < wh * 12.5) {
          navManager.change(6);
        } else {
          navManager.change(7);
        }

        /*
              scrollの表示・非表示
         */
        if (scrollY < wh * 10) {
          if (scrollY > 20) {
            $('#scroll').css({
             transition: 'all 1s',
              opacity: '1'
            });
          } else {
            $('#scroll').css({
              transition: 'all 1s',
              opacity: '0'
            });
          }
        } else {
          $('#scroll').css({
            transition: 'all 1s',
            opacity: '0'
          });
        }

        /*
        			sec1
         */
        if (scrollY < wh) {
          sec1Y = scrollY * 2;
          $('#sec1').css({
            transform: 'translate3d(0px,' + String(-sec1Y) + 'px,0px)'
          });
        } else {
          sec1Y = -wh * 3;
          $('#sec1').css({
            transform: 'translate3d(0px,' + String(-sec1Y) + 'px,0px)'
          });
        }

        /*
        			sec2
         */
        if (scrollY < wh) {
          sec2Y = scrollY - wh;
          ay = Math.abs(sec2Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec2').css({
            transform: 'translate3d(0px,' + String(-sec2Y) + 'px,0px)',
            opacity: alpha
          });
        } else if (scrollY >= wh && scrollY < wh * 2) {
          sec2Y = 0;
          $('#sec2').css({
            transform: 'translate3d(0px,' + String(-sec2Y) + 'px,0px)',
            opacity: 1
          });
        } else {
          sec2Y = scrollY - wh * 2;
          ay = Math.abs(sec2Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec2').css({
            transform: 'translate3d(0px,' + String(-sec2Y) + 'px,0px)',
            opacity: alpha
          });
        }

        /*
        			sec3
         */
        if (scrollY < wh * 3) {
          sec3Y = scrollY - wh * 3;
          ay = Math.abs(sec3Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec3').css({
            transform: 'translate3d(0px,' + String(-sec3Y) + 'px,0px)',
            opacity: alpha
          });
        } else if (scrollY >= wh * 3 && scrollY < wh * 4) {
          sec3Y = 0;
          $('#sec3').css({
            transform: 'translate3d(0px,' + String(-sec3Y) + 'px,0px)',
            opacity: 1
          });
        } else {
          sec3Y = scrollY - wh * 4;
          ay = Math.abs(sec3Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec3').css({
            transform: 'translate3d(0px,' + String(-sec3Y) + 'px,0px)',
            opacity: alpha
          });
        }

        /*
        			sec4
         */
        if (scrollY < wh * 5) {
          sec4Y = scrollY - wh * 5;
          ay = Math.abs(sec4Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec4').css({
            transform: 'translate3d(0px,' + String(-sec4Y) + 'px,0px)',
            opacity: alpha
          });
        } else if (scrollY >= wh * 5 && scrollY < wh * 6) {
          sec4Y = 0;
          $('#sec4').css({
            transform: 'translate3d(0px,' + String(-sec4Y) + 'px,0px)',
            opacity: 1
          });
        } else {
          sec4Y = scrollY - wh * 6;
          ay = Math.abs(sec4Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec4').css({
            transform: 'translate3d(0px,' + String(-sec4Y) + 'px,0px)',
            opacity: alpha
          });
        }

        /*
        			sec5
         */
        if (scrollY < wh * 7) {
          sec5Y = scrollY - wh * 7;
          ay = Math.abs(sec5Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec5').css({
            transform: 'translate3d(0px,' + String(-sec5Y) + 'px,0px)',
            opacity: alpha
          });
        } else if (scrollY >= wh * 7 && scrollY < wh * 8) {
          sec5Y = 0;
          $('#sec5').css({
            transform: 'translate3d(0px,' + String(-sec5Y) + 'px,0px)',
            opacity: 1
          });
        } else {
          sec5Y = scrollY - wh * 8;
          ay = Math.abs(sec5Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec5').css({
            transform: 'translate3d(0px,' + String(-sec5Y) + 'px,0px)',
            opacity: alpha
          });
        }

        /*
        			sec6
         */
        if (scrollY < wh * 9) {
          sec6Y = scrollY - wh * 9;
          ay = Math.abs(sec6Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec6').css({
            transform: 'translate3d(0px,' + String(-sec6Y) + 'px,0px)',
            opacity: alpha
          });
        } else if (scrollY >= wh * 9 && scrollY < wh * 10) {
          sec6Y = 0;
          $('#sec6').css({
            transform: 'translate3d(0px,' + String(-sec6Y) + 'px,0px)',
            opacity: 1
          });
        } else {
          sec6Y = scrollY - wh * 10;
          ay = Math.abs(sec6Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          $('#sec6').css({
            transform: 'translate3d(0px,' + String(-sec6Y) + 'px,0px)',
            opacity: alpha
          });
        }

        /*
        			sec7
         */
        if (scrollY < wh * 11) {
          sec7Y = scrollY - wh * 11;
          ay = Math.abs(sec7Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          return $('#sec7').css({
            transform: 'translate3d(0px,' + String(-sec7Y) + 'px,0px)',
            opacity: alpha
          });
        } else if (scrollY >= wh * 11 && scrollY < wh * 12) {
          sec7Y = 0;
          return $('#sec7').css({
            transform: 'translate3d(0px,' + String(-sec7Y) + 'px,0px)',
            opacity: 1
          });
        } else {
          sec7Y = scrollY - wh * 12;
          ay = Math.abs(sec7Y);
          if (ay < 400) {
            alpha = 1 - (1 / 400 * ay);
          } else {
            alpha = 0;
          }
          return $('#sec7').css({
            transform: 'translate3d(0px,' + String(-sec7Y) + 'px,0px)',
            opacity: alpha
          });
        }
      }
    };
    bgManager = {
      bgNum: 1,
      ary: [],
      idCount: 1,
      init: function() {
        $('#brandBg').append('<div class="bg bg1" id="bgid' + this.idCount + '"></div>');
        return this.ary.push($('#brandBg #bgid' + this.idCount).css({
          opacity: 1
        }));
      },
      change: function(num) {
        var elem;
        if (this.bgNum !== num) {
          this.idCount++;
          if (num === 6) {
            elem = '<div class="bg bg' + num + '" id="bgid' + this.idCount + '"><div class="sumi"></div></div>';
          } else {
            elem = '<div class="bg bg' + num + '" id="bgid' + this.idCount + '"></div>';
          }
          $('#brandBg').append(elem);
          this.ary.push($('#brandBg #bgid' + this.idCount));
          $('#brandBg #bgid' + this.idCount).velocity({
            opacity: 1
          }, {
            duration: 500,
            easing: 'linear',
            complete: function() {
              return bgManager.deleteLastBg();
            }
          });
          this.bgNum = num;

          /*
          				scrollとnavの色変更
           */
          if (num === 1 || num === 6) {
            $('#scroll').removeClass('white');
            return $('#nav').removeClass('white');
          } else {
            $('#scroll').addClass('white');
            return $('#nav').addClass('white');
          }
        }
      },
      deleteLastBg: function() {
        if (this.ary.length > 1) {
          $(this.ary[0]).remove();
          return this.ary.splice(0, 1);
        }
      }
    };
    navManager = {
      init: function() {
        return $('#nav .btn').on('click', function() {
          var index;
          index = $('#nav .btn').index(this);
          return scrollManager.scroll(index + 1);
        });
      },
      change: function(num) {
        $('#nav .btn').removeClass('on');
        return $('#nav .btn:nth-child(' + num + ')').addClass('on');
      }
    };

    /*
    	sec1 anim
     */
    sec1Anim = function() {
      $('#sec1 .logo').velocity({
        opacity: 1
      }, {
        duration: 1000,
        easing: 'linear'
      });
      $('#sec1 p.t1').velocity({
        opacity: 1
      }, {
        duration: 1000,
        easing: 'linear',
        delay: 100
      });
      return $('#sec1 p.t2').velocity({
        opacity: 1
      }, {
        duration: 1000,
        easing: 'linear',
        delay: 200
      });
    };

    /*
    	init
     */
    bgManager.init();
    scrollManager.init();
    navManager.init();
    setLayout = function() {

      /*
      		レイアウト
       */
      if (_g.stageInfo.windowWidth <= 768) {
        if (_g.stageInfo.windowHeight <= 480) {
          return $('#sec1 .inner').css({
            top: 200,
            marginTop: 0
          });
        } else {
          return $('#sec1 .inner').css({
            top: '50%',
            marginTop: -50
          });
        }
      } else {
        if (_g.stageInfo.windowHeight <= 900) {
          return $('#sec1 .inner').css({
            top: 200,
            marginTop: 0
          });
        } else {
          return $('#sec1 .inner').css({
            top: '50%',
            marginTop: -100
          });
        }
      }
    };
    setLayout();
    $(window).on('resize', function() {
      scrollManager.resize();
      scrollManager.update();
      return setLayout();
    });
    $('body').velocity('scroll');
    $('#preload').css({
      display: 'none'
    });
    $('#brandContainer').css({
      display: 'block'
    });
    return $('#brandLoad').velocity({
      opacity: 0
    }, {
      duration: 100,
      delay: 100,
      display: 'none',
      complete: function() {
        $('#brandLoad').remove();
        return sec1Anim();
      }
    });
  });
  $(window).on('load resize', function(){
    //BG change for sp
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        checkAspect = windowHeight - windowWidth;
    if (windowWidth < 768 && checkAspect > 0){
      $('#brandBg').addClass('spBG');
    }
    $(window).scroll(function() {//sec7 img fade out
      var scrollRuler = $(window).scrollTop(),
          locateFin = $('#fin').offset().top,
          opacityStart = locateFin + windowHeight/3.5,
          FinPosi = opacityStart - scrollRuler,
          current = (FinPosi / windowHeight * 100 )-55,
          currentPosi = current / 50;
          if (locateFin - scrollRuler < windowHeight && locateFin - scrollRuler > 0){
          $('#brandBg .sumi').css('opacity',currentPosi);
          }
    });
  });

}).call(this);