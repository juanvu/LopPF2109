    let inputWidth;
    let inputHeight;
    inputWidth = prompt('Enter the Width');
    inputHeight = prompt('Enter the Height');
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    function calcu(width,height) {
        let area = width * height;
        document.write('The area is: ' + area);
    }
    // document.write('The area is: ' + area);
    calcu (width,height);