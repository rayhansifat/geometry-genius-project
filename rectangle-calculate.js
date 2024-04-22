function calculateRectangleArea(){
    // get rectangle weight value
    const rectangleWeightInput = document.getElementById('rectangle-weight');
    const rectangleWightText = rectangleWeightInput.value;
    const rectangleWeight = parseFloat(rectangleWightText);
    // console.log(weight);

    // get rectangle hight value
    const rectangleHeightInput = document.getElementById('rectangle-height')
    const rectangleHeightText = rectangleHeightInput.value;
    const rectangleHeight = parseFloat(rectangleHeightText);
    // console.log(rectangleHeight);

     // calculate rectangle area
    const rectangleArea = rectangleWeight * rectangleHeight;
    console.log('Area of rectangle is', rectangleArea);
   


    // display rectangle area

    const rectangleAreaSpna = document.getElementById('rectangle-area');
    rectangleAreaSpna.innerText = rectangleArea;

}