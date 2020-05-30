      var num = 4;
      
      var rgbColors = [
        [255, 0, 0],    // Red
        [255, 127, 0],  // Orange
        [255, 255, 0],  // Yellow
        [0, 255, 0],    // Green
        [0, 0, 255],    // Blue
        [75, 0, 130],   // Indigo
        [148, 0, 211]   // Violet
      ];

      function getRandomnum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

      function createRainbowBlocks() {

        var blocks = "", colorBk;
        var answerI= getRandomnum(0,num);
        var answerJ=getRandomnum(0,num)
        var randColor =getRandomnum(0,6);
        var red, green, blue, r, g, b, incR, incG, incB;

        for (var i = 0, len = num; i < len; i++) {
          r = rgbColors[randColor][0]; 
          g = rgbColors[randColor][1];
          b = rgbColors[randColor][2];
          incR = Math.floor((255 - r) / Math.floor(num/2));
          incG = Math.floor((255 - g) / Math.floor(num/2));
          incB = Math.floor((255 - b) / Math.floor(num/2));
         

          for (var j = 0; j < num; j++) {
            
            colorBk = '<div class="colorBlock"'+' style="background-color: rgb(' + 
              r + ',' + g + ',' + b + ')"></div>'
            if(i==answerI && j==answerJ){
                if (getRandomnum(0,2)){
                  colorBk = '<div class="colorBlock ans" style="background-color: rgb(' + 
                  (r+incR) + ',' + (g+incG) + ',' + (b+incB) + ')"></div>'
                }
                else{
                  colorBk = '<div class="colorBlock ans" style="background-color: rgb(' + 
                  (r-incR) + ',' + (g-incG) + ',' + (b-incB) + ')"></div>'  
                }                    
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
        var x = document.getElementsByClassName("ans");
        for (i = 0; i < x.length; i++) {
          x[i].addEventListener("mousedown", getPoint);
        }
      }
      var point=0;
      function getPoint(event) {
        initialize();
        point++;
        if (point%3==0&&num<8){
          num++;
        }
      }

      
      window.onload=function(){
        alert("歡迎來到色彩大挑戰遊戲");
        console.log("ready");
      }