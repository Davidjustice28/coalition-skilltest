// this section changes the images for the carousel and circle identifiers every 3 seconds
const photos = ['./images/man-cliff.png', './images/foggy-mountain.png','./images/man-cliff.png','./images/foggy-mountain.png']
let index = 0;

const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')
const image3 = document.getElementById('img3')
const image4 = document.getElementById('img4')

const imageTags = [image1,image2,image3,image4]
const circles = document.getElementsByClassName('circle')
const array = [...circles]

function changeColor(i) {
    array.forEach(element => {
        if(element == i) {
            element.style.backgroundColor = 'white'
        }else {
            element.style.backgroundColor = 'gray'
        }
    });
}

setInterval(() => {
    if(index < 3) {
        index += 1
    }else {
        index = 0
    }

    if(index == 0) {
        image1.src = photos[index]
        image2.src = photos[index + 1]
        image3.src = photos[index + 2]
        image4.src = photos[index + 3]
    }else if(index == 1) {
        image1.src = photos[index]
        image2.src = photos[2]
        image3.src = photos[3]
        image4.src = photos[0]  
    }else if(index == 2) {
        image1.src = photos[index]
        image2.src = photos[3]
        image3.src = photos[0]
        image4.src = photos[1]  
    }else {
        image1.src = photos[index]
        image2.src = photos[0]
        image3.src = photos[1]
        image4.src = photos[2] 
    }
    changeColor(circles[index])
}, 3000) 
