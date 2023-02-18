 
// triangle button event handler set://
let serial = 1;

document.getElementById('triangle-btn').addEventListener('click',function(){


      const triangleBase = getInputValue('triangle-base');
      const triangleHight = getInputValue('triangle-hight');
      
      const triangleArea = (0.5 * triangleBase * triangleHight).toFixed(2);
       
               
   const triangle = document.getElementById('triangle').innerText;
   displayData(triangle,triangleArea)

   serial +=1;
    
}); 

//rectangle set event handler button://

document.getElementById('recangle-btn').addEventListener('click',function(){

 
       const  rectangleWidth = getInputValue('rectangle-width');
       const recangleLength =getInputValue('rectangle-length') ;
      
       const recangleArea = (rectangleWidth * recangleLength).toFixed(2);
 
       const recangle = document.getElementById('rectangle').innerText;
 
    displayData(recangle,recangleArea)
   

   serial +=1;
    
});

 

//parallelogram event handler set://

document.getElementById('parallelogram-btn').addEventListener('click',function(){
 
 
      const  parallelogramBase = getInputValue('parallelogram-base');
      const parallelogramHight = getInputValue('parallelogram-hight');
      const parallelogramArea = (parallelogramBase * parallelogramHight).toFixed(2);
        
   const parallelogram = document.getElementById('parallelogram').innerText;
   
   displayData(parallelogram, parallelogramArea)
    
   serial +=1;
});

 //Rhombus event handler button set ...//

document.getElementById('rhombus-btn').addEventListener('click',function(){
 
 
      const  rhombusDistance1 = getInputValue('rhombus-distance1');
      const rhombusDistance2 = getInputValue('rhombus-distance2');
      const rhombusArea = (0.5 * rhombusDistance1 * rhombusDistance2).toFixed(2);
        
   const rhombus = document.getElementById('rhombus').innerText;
   
   displayData(rhombus, rhombusArea);
    
   serial +=1;
}) ;

 // pantagon button event handler set...// 

document.getElementById('pentagon-btn').addEventListener('click',function(){
 
 
      const  pentagonInputP = getInputValue('pentagon-p');
       
      const pentagonInputB = getInputValue('pentagon-b');
      const pentagonArea =(0.5 * pentagonInputP * pentagonInputB).toFixed(2);
        
   const pentagon = document.getElementById('pentagon').innerText;
   
   displayData(pentagon, pentagonArea);
    
   serial +=1;
});


  //Ellipse button set event handler..//

document.getElementById('ellipse-btn').addEventListener('click',function(){
 
        const PI = 3.14;
      const  ellipseInputA = getInputValue('ellipse-a');
      const ellipseInputB = getInputValue('ellipse-b');
      const  ellipseArea =  (PI * ellipseInputA * ellipseInputB).toFixed(2);
        
   const ellipse = document.getElementById('ellipse').innerText;
   
   displayData(ellipse, ellipseArea);
    
   serial +=1;
});

