      var num = 9;
      
      function getRandomnum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

      function createRainbowBlocks() {

        var blocks = "", colorBk;
        var answerI= getRandomnum(0,num);
        var answerJ=getRandomnum(0,num)
        var randRed =getRandomnum(0,256);
        var randGreen =getRandomnum(0,256);
        var randBlue =getRandomnum(0,256);
        for (var i = 0, len = num; i < len; i++) {
            //新建外層 div, 包覆 n 個 colorBlocks
          var classname = "colorRow rbc" + i;
          blocks += '<div class="' + classname + '">'; // starting div;

          for (var j = 0; j < num; j++) {
            colorBk = '<div class="colorBlock"'+' style="background-color: rgb(' + 
           randRed + ',' + randGreen + ',' + randBlue + ')"></div>'
            if(i==answerI && j==answerJ){
                colorBk = '<div class="colorBlock" style="background-color: rgb(' + 
                0 + ',' + 0 + ',' + 0 + ')"></div>'
                                    
            }
            blocks += colorBk;
          }

          blocks += "</div>"; // ending div
        }

        // change colors' inline styles width and margin
        var elem = document.getElementById("colors");
        var cssString = "width:" + (num * 70 + 6) + "px;" + "margin: auto;";

        elem.style.cssText = cssString;
        elem.innerHTML = blocks;
      }

      function initialize() {
        createRainbowBlocks(); // 生成彩色球
        var x = document.getElementsByClassName("colorBlock");
        for (i = 0; i < x.length; i++) {
          x[i].addEventListener("mousedown", highLightRow);
          x[i].addEventListener("mouseup", hideRow);
        }
      }

      function highLightRow(event) {
        var element = event.target;
        // alert(parent.className);
        element.style.border = "3px solid black";
      }

      function hideRow(event) {
        var element = event.target;
        var parent = element.parentElement;
        element.style.border = "";     // 上層隱藏時，先將border恢復正常
        parent.style.display = "none";
      }

      function restorAll() {
        var elems = document.querySelectorAll("[class*=Row]");
        //var elems = document.querySelectorAll("[class*=color]");
        for (var i = 0; i < elems.length; i++) {
          elems[i].style.display = "";        // 恢復隱藏的列
        }
      }
      
      window.onload=function(){
        alert("歡迎來到色彩大挑戰遊戲");
        console.log("ready");
      }