
// calculator program

// Function to append values to the display
function appendToDisplay(value){ 
    const display= document.getElementById ('display');
    
    return (display.value ==="0") ?   display.value=value : display.value += value ; };


// Function to evaluate the expression and display the result
function calculate (){
    const display= document.getElementById ('display');
    try  { display.value=eval(display.value); }
    catch (error) {display.value='Error'}; }

// Function to clear the display
    function clearDisplay(){
    document.getElementById ('display').value="0";};
      

