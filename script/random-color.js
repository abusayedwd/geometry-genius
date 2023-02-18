
 

        const card1 = document.getElementById('card1').addEventListener('mouseenter',function(){
         const cardBody = document.getElementById('card1');
           const bgColor = randomColor();
                cardBody.style.backgroundColor = bgColor;
        });

        const card2 = document.getElementById('card2').addEventListener('mouseenter',function(){
         const cardBody = document.getElementById('card2');
           const bgColor = randomColor();
                cardBody.style.backgroundColor = bgColor;
        });

        const card3 = document.getElementById('card3').addEventListener('mouseenter',function(){
         const cardBody = document.getElementById('card3');
           const bgColor = randomColor();
                cardBody.style.backgroundColor = bgColor;
        });

        const card4 = document.getElementById('card4').addEventListener('mouseenter',function(){
         const cardBody = document.getElementById('card4');
           const bgColor = randomColor();
                cardBody.style.backgroundColor = bgColor;
        });

        const card5 = document.getElementById('card5').addEventListener('mouseenter',function(){
         const cardBody = document.getElementById('card5');
           const bgColor = randomColor();
                cardBody.style.backgroundColor = bgColor;
        });

        const card6 = document.getElementById('card6').addEventListener('mouseenter',function(){
         const cardBody = document.getElementById('card6');
           const bgColor = randomColor();
                cardBody.style.backgroundColor = bgColor;
        });

 





function randomColor() {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        return `rgb(${red}, ${green}, ${blue})`
      };
 
      
      
      