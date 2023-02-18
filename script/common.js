
function displayData( name, result){
        const container = document.getElementById('container');
        const tr = document.createElement('tr');
   tr.innerHTML = `
   <td>${serial}.</td>
   <td  class = "p-4">${ name}</td>
   <td>${result}cm<sup>2</sup></td>
   <button class="bg-red-500 px-3 ml-6 text-white py-1 mt-3 rounded-lg font-semibold" id="coffee-btn">Cencel</button>
     
    
   
   `;
   
   container.appendChild(tr)
   
}

function getInputValue(inputId){
        
        const inputField = document.getElementById(inputId)
        const inputFieldString = inputField.value ;
        const inputValue = parseFloat(inputFieldString);
        // inputField.value = '';
        return inputValue
        
        // const inputField = document.getElementById(inputId)
        // const inputFieldString = inputField.value ;
        // const inputValue = parseFloat(inputFieldString);
        // // inputField.value = '';
        // return inputValue;
};



