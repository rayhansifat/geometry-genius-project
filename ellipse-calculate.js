// function calculateEllipseArea(){

//     const majorRadius = getInputValueById('ellipse-major-radius');
//     const minorRadius = getInputValueById('ellipse-minor-radius');
//     const area = 3.14 * majorRadius * minorRadius;
//     setInnerTextById('ellipse-area',area);
// }

function calculateEllipseArea(){
    const ellipseMajorRadiusInput = document.getElementById('ellipse-major-radius');
    const ellipseMajorRadiusText = ellipseMajorRadiusInput.value;
    const ellipseMajorRadius = parseFloat(ellipseMajorRadiusText);
    
    
    const ellipseMinorRadiusInput = document.getElementById('ellipse-minor-radius');
    const ellipseMinorRadiusText = ellipseMinorRadiusInput.value;
    const ellipseMinorRadius = parseFloat(ellipseMinorRadiusText);

    const ellipseArea = 3.14 * ellipseMajorRadius * ellipseMinorRadius;
    console.log('Area of ellipse is', ellipseArea);


    const ellipseAreaSpan = document.getElementById('rhombus-area');
    ellipseAreaSpan.innerText =ellipseArea;
}