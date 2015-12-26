var main = document.querySelector("#main");
var oDivs = document.querySelectorAll(".main>div");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;

[].forEach.call(oDivs, function (item, index) {
    item.index = index;
    item.addEventListener('touchstart', start, false);
    item.addEventListener('touchmove', move, false);
    item.addEventListener('touchend', end, false);

});

function start(e) {

    this.startY = e.changedTouches[0].pageY;

}

function move(e) {
    e.preventDefault();
    this.flag = true;
    var moveTouch = e.changedTouches[0].pageY;
    var changePos = moveTouch - this.startY;
    //console.log(changePos);
    var cur = this.index;
    var step = 1 / 2;
    [].forEach.call(oDivs, function (item, index) {
        if (index != cur) {
            item.style.display = "none";
        }

    });

    if (changePos > 0) {
        var pos = -winH + changePos;
        this.nextIndex = cur == 0 ? oDivs.length - 1 : cur - 1;
    } else if (changePos < 0) {
        var pos = winH + changePos;
        this.nextIndex = cur == oDivs.length - 1 ? 0 : cur + 1;

    }
    oDivs[this.nextIndex].style.webkitTransform = "translate(0," + pos + "px)";
    DOM.addClass(oDivs[this.nextIndex], 'zIndex');


    oDivs[this.nextIndex].style.display = "block";
    oDivs[cur].style.webkitTransform = "scale(" + (1 - Math.abs(changePos) / winH * step) + ") translate(0," + changePos/5 + "px)";
    DOM.removeClass(oDivs[cur], 'zIndex');
    if (cur == 0) {
        firstFn(false);
    } else if (cur == 1) {
        secondFn(false);
    } else if (cur == 2) {
        thirdFn(false);
    } else if (cur == 3) {
        fourFn(false);
    } else if (cur == 4) {
        fiveFn(false);
    } else if (cur == 5) {
        sixFn(false);
    }

}

function end(e) {


    oDivs[this.nextIndex].style.webkitTransform = "translate(0,0)";
    oDivs[this.nextIndex].style.webkitTransition = "0.5s";
    oDivs[this.nextIndex].addEventListener("webkitTransitionEnd", function () {
        this.style.webkitTransition = "";
        if (this.index == 0) {
            firstFn(true);
        } else if (this.index == 1) {
            secondFn(true);
        } else if (this.index == 2) {
            thirdFn(true);
        } else if (this.index == 3) {
            fourFn(true);
        } else if (this.index == 4) {
            fiveFn(true);
        } else if (this.index == 5) {
            sixFn(true);
        }
    }, false)

}


function firstFn(flag) {
    var firDiv = document.querySelector('.firDiv');
    var f_childDiv = firDiv.querySelectorAll('.firDiv>div');
    if(flag){
        [].forEach.call(f_childDiv, function (item, index) {
            item.id = item.className;
            if (item.className == 'singPic') {
                var firSingFirP = item.querySelector('.fir-sing-firP');
                var firSingFirPSpan = firSingFirP.querySelector('span');
                //firSingFirPSpan.className = 'fir-sing-firP-span';
                DOM.addClass(firSingFirPSpan,'fir-sing-firP-span');
                firSingFirPSpan.addEventListener('webkitTransitionEnd', function () {
                    console.log(1);
                }, false);
            }
        });
    }else{
        [].forEach.call(f_childDiv, function (item, index) {
            item.id = item.className;
            if (item.className == 'singPic') {
                var firSingFirP = item.querySelector('.fir-sing-firP');
                var firSingFirPSpan = firSingFirP.querySelector('span');
                DOM.removeClass(firSingFirPSpan,'fir-sing-firP-span');
                //firSingFirPSpan.className = 'fir-sing-firP-span';
                firSingFirPSpan.addEventListener('webkitTransitionEnd', function () {
                    console.log(1);
                }, false);
            }
        });
    }
    firDiv.display = "none";

}

function secondFn(flag) {
    var secDiv = document.querySelector('.secDiv');
    var secChilDivs = document.querySelectorAll('.secDiv>div');
    if (flag) {
        [].forEach.call(secChilDivs, function (item, index) {
            if (index % 2 == 0) {
                DOM.addClass(item, "animated secOddMove ");
            } else if (index % 2 == 1) {
                DOM.addClass(item, "animated bounceInRight ");
            }

        });
    }else{
        [].forEach.call(secChilDivs, function (item, index) {
            if (index % 2 == 0) {
                DOM.removeClass(item, "animated secOddMove ");
            } else if (index % 2 == 1) {
                DOM.removeClass(item, "animated bounceInRight ");
            }

        });
    }
    secDiv.display = "none";

}

function thirdFn(flag) {
    var thdDiv = document.querySelector(".thdDiv");
    var thdH2 = document.querySelector(".thdDiv>h2");
    var thdChildDivs = document.querySelectorAll(".thdDiv-firDiv>div");
    if (flag) {
        DOM.addClass(thdH2, "animated bounceIn");
        [].forEach.call(thdChildDivs, function (item, index) {
            DOM.addClass(item, "animated zoomIn");
        });
    } else {
        DOM.removeClass(thdH2, "animated bounceIn");
        [].forEach.call(thdChildDivs, function (item, index) {
            DOM.removeClass(item, "animated zoomIn");
        });
    }
    thdDiv.display = "none";

}
function fourFn(flag) {
    var fourDiv = document.querySelector(".fourDiv");
    var fourDivs = document.querySelectorAll(".fourDiv>div");
    if (flag) {
        [].forEach.call(fourDivs, function (item, index) {
            if (index != 0) {
                DOM.addClass(item, "animated flipInX");
            }

            var oPs = item.querySelectorAll("p");
            [].forEach.call(oPs, function (item, index) {
                DOM.addClass(item, "animated zoomIn infinite");
            });
        });
    } else {
        [].forEach.call(fourDivs, function (item, index) {
            if (index != 0) {
                DOM.addClass(item, "animated flipInX");
            }

            var oPs = item.querySelectorAll("p");
            [].forEach.call(oPs, function (item, index) {
                DOM.addClass(item, "animated zoomIn infinite");
            });
        });
    }
    fourDiv.display = "none";

}
function fiveFn(flag) {
    var fiveDiv = document.querySelector('.fiveDiv');
    var boxChiDivs = document.querySelectorAll('.fiveDiv>div');
    if (flag) {

        [].forEach.call(boxChiDivs, function (item, index) {
            if (index == 0 || index == 1) {
                DOM.addClass(item, "animated fadeInLeftBig");
            } else if (index ==2) {
                DOM.addClass(item, "animated bounceInRight");
            } else if(index == 3|| index==4){
                DOM.addClass(item, "animated bounceInLeft");
            }

        });
    } else {
        [].forEach.call(boxChiDivs, function (item, index) {
            if (index == 0 || index == 1) {
                DOM.removeClass(item, "animated fadeInLeftBig");
            } else if (index ==2) {
                DOM.removeClass(item, "animated bounceInRight");
            } else if(index == 3|| index==4){
                DOM.removeClass(item, "animated bounceInLeft");
            }

        });
    }
    fiveDiv.display = "none";
}

function sixFn(flag) {
    var sixDiv = document.querySelector('.sixDiv');
    var sixChilDivs = document.querySelectorAll('.sixDiv>div');
    if (flag) {
        var sixChilDivs = document.querySelectorAll('.sixDiv>div');
        var sixChilDivs = document.querySelectorAll('.sixDiv>div');
        [].forEach.call(sixChilDivs, function (item, index) {
            if (index % 2 == 0) {
                DOM.addClass(item, "animated bounceInLeft");
            } else {
                DOM.addClass(item, "animated rotateIn infinite");
            }

        });
    } else {

        [].forEach.call(sixChilDivs, function (item, index) {
            if (index % 2 == 0) {
                DOM.removeClass(item, "animated bounceInLeft");
            } else {
                DOM.removeClass(item, "animated rotateIn infinite");
            }

        });
    }
    sixDiv.display = "none";
}



window.onload = function () {
    document.addEventListener('touchstart',function(){},false);
    firstFn();
    //secondFn();
}
