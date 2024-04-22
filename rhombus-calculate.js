function calculateRhombusArea(){
    const rhombusDiagonal1Input = document.getElementById('rhombus-diagonal1');
    const rhombusDiagonal1Text = rhombusDiagonal1Input.value;
    const rhombusDiagonal1 = parseFloat(rhombusDiagonal1Text);
    
    
    const rhombusDiagonal2Input = document.getElementById('rhombus-diagonal2');
    const rhombusDiagonal2Text = rhombusDiagonal2Input.value;
    const rhombusDiagonal2 = parseFloat(rhombusDiagonal2Text);

    const rhombusArea = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    console.log('Area of rhombus is', rhombusArea);


    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText =rhombusArea;
}