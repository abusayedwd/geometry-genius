
function displayData( name, result){
        const container = document.getElementById('container');
        const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> 1</td>
   <td  class = "p-4">${ name}</td>
   <td>${result}</td>
   <button class="bg-sky-500 px-3 ml-4 py-1 mt-3 rounded-lg font-semibold" id="coffee-btn">Delete</button>
     
    
   
   `;
   
   container.appendChild(tr)
   
}

