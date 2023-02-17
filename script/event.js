 
// triangle button event handler set:
document.getElementById('triangle-btn').addEventListener('click',function(){


      const triangleBase =  document.getElementById('triangle-base').value ;
      const triangleHight = document.getElementById('triangle-hight').value ;
      const triangleArea = 0.5 * parseInt(triangleBase) * parseInt( triangleHight);
//       console.log(triangleArea )
   const triangle = document.getElementById('triangle').innerText;
   displayData(triangle,triangleArea)
    
})

//rectangle set event button:

document.getElementById('recangle-btn').addEventListener('click',function(){

 
      const  rectangleWidth =  document.getElementById('rectangle-width').value ;
      const recangleLength = document.getElementById('rectangle-length').value ;
       const recangleArea = rectangleWidth * recangleLength;
//       console.log(triangleArea )
   const recangle = document.getElementById('rectangle').innerText;
//    console.log(recangle)
   displayData(recangle,recangleArea)
    
})

//parallelogram event handler set:

document.getElementById('parallelogram-btn').addEventListener('click',function(){
 
 
      const  parallelogramBase = document.getElementById('parallelogram-base').value ;
      const parallelogramHight = document.getElementById('parallelogram-hight').value ;
      const parallelogramArea = parallelogramBase * parallelogramHight;
        
   const parallelogram = document.getElementById('parallelogram').innerText;
   
   displayData(parallelogram, parallelogramArea)
    
})

