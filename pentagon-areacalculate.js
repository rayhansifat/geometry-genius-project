// function calculatePentagonArea(){
//    const perimeter = getInputValueById('pentagon-perimeter');
//    const apothem = getInputValueById('pentagon-apothem');

//    const area = 0.5 * perimeter * apothem;
//     setInnerTextByID('pentagon-area',area);
// }

// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputValueText = inputField.Value;
//     const value = parseFloat(inputValueText);
//     return value;
// }

// function setInnerTextByID(elementId){
//     const element = document.getElementById(elementId);
//     element.innerText = area;
// }

function calculatePentagonArea(){
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const pentagonPerimeter = parseFloat(pentagonPerimeterText);
    
    
    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const pentagonApothem = parseFloat(pentagonApothemText);

    const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;
    console.log('Area of pentagon is', pentagonArea);


    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText =pentagonArea;
}