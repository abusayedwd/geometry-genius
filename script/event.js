 
// triangle button event handler set://

document.getElementById('triangle-btn').addEventListener('click',function(){


      const triangleBase = getInputValue('triangle-base');
      const triangleHight = getInputValue('triangle-hight');
       
      const triangleArea = (0.5 * triangleBase * triangleHight).toFixed(2);
//       console.log(triangleArea )
   const triangle = document.getElementById('triangle').innerText;
   displayData(triangle,triangleArea)
    
});

//rectangle set event button://

document.getElementById('recangle-btn').addEventListener('click',function(){

 
      const  rectangleWidth = getInputValue('rectangle-width');
      const recangleLength =getInputValue('rectangle-length') ;
       const recangleArea = (rectangleWidth * recangleLength).toFixed(2);
//       console.log(triangleArea )
   const recangle = document.getElementById('rectangle').innerText;
//    console.log(recangle)
   displayData(recangle,recangleArea)
    
});

//parallelogram event handler set://

document.getElementById('parallelogram-btn').addEventListener('click',function(){
 
 
      const  parallelogramBase = getInputValue('parallelogram-base');
      const parallelogramHight = getInputValue('parallelogram-hight');
      const parallelogramArea = (parallelogramBase * parallelogramHight).toFixed(2);
        
   const parallelogram = document.getElementById('parallelogram').innerText;
   
   displayData(parallelogram, parallelogramArea)
    
});

 //Rhombus event handler button set ...//

document.getElementById('rhombus-btn').addEventListener('click',function(){
 
 
      const  rhombusDistance1 = getInputValue('rhombus-distance1');
      const rhombusDistance2 = getInputValue('rhombus-distance2');
      const rhombusArea = (0.5 * rhombusDistance1 * rhombusDistance2).toFixed(2);
        
   const rhombus = document.getElementById('rhombus').innerText;
   
   displayData(rhombus, rhombusArea);
    
}) ;

 // pantagon button event handler set...// 

document.getElementById('pentagon-btn').addEventListener('click',function(){
 
 
      const  pentagonInputP = getInputValue('pentagon-p');
      const pentagonInputB = getInputValue('pentagon-b');
      const pentagonArea =(0.5 * pentagonInputP * pentagonInputB).toFixed(2);
        
   const pentagon = document.getElementById('pentagon').innerText;
   
   displayData(pentagon, pentagonArea);
    
});


  //Ellipse button set event handler..//

document.getElementById('ellipse-btn').addEventListener('click',function(){
 
 
      const  ellipseInputA = getInputValue('ellipse-a');
      const ellipseInputB = getInputValue('ellipse-b');
      const  ellipseArea =  (ellipseInputA * ellipseInputB).toFixed(2);
        
   const ellipse = document.getElementById('ellipse').innerText;
   
   displayData(ellipse, ellipseArea);
    
});

