

let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
    let area = length * width;
    
    // Updating the result element within the function where area is defined
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
