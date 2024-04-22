
function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseText);
    
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const parallelogramHeight = parseFloat(parallelogramHeightText);

    const parallelogramArea = parallelogramBase * parallelogramHeight;
    console.log('Area of parallelogram is', parallelogramArea);


    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;


}