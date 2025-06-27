let arr = ['apple', 'banana', 'strawberry' , 'mango', 'peach', 'grapes', 'orange'];
let fruit_images = ['apple.jpg', 'banana.jpg', 'strawberry.jpg' , 'mango.jpg', 'peach.jpg', 'grapes.jpg', 'orange.jpg']

let len_arr = arr.length;
let curr = arr[0];
let image_curr = fruit_images[0];

let index = arr.indexOf(curr)

let fruit = document.getElementById('fruit');
let image = document.getElementById('image')

function moveLeft(){
    index -= 1;
    if (index == -1){
        index = len_arr - 1;
    }
    curr = arr[index];
    image_curr = fruit_images[index];
    
    fruit.textContent = curr;
    image.src = image_curr;
    
    console.log(image.src)
    console.log(curr);
    console.log(index);
}

function moveRight(){
    index += 1;
    if (index == len_arr){
        index = 0;
    }
    curr = arr[index];
    image_curr = fruit_images[index];
    
    fruit.textContent = curr;
    image.src = image_curr;
    
    console.log(image.src)
    console.log(curr);
    console.log(index);
}