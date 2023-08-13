const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const Images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')


let slideNumber = 1;

let length = Images.length;

for(let i = 0; i<length;i++){
    const div = document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div)
}
const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'
 
const restbg = ()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = 'transparent'

    })
}

buttons.forEach((button , i)=>{
    button.addEventListener('click',()=>{
       restbg()
        slider.style.transform = `translateX(-${i * 600}px)`
        slideNumber = i + 1;
        button.style.backgroundColor = 'white'
    })
   
});

const nextSLider = ()=>{
    slider.style.transform = `translateX(-${slideNumber * 600}px)`
        slideNumber++;
}
const prevSLide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`
        slideNumber--;
}
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
        slideNumber = 1 
}
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
        slideNumber = length;
}

right.addEventListener('click',()=>{
     slideNumber < length ? nextSLider():getFirstSlide() ;
     restbg()
     buttons[slideNumber-1].style.backgroundColor = 'white'
})


left.addEventListener('click',()=>{
     (slideNumber > 1 ? prevSLide():getLastSlide() )
     restbg()
     buttons[slideNumber-1].style.backgroundColor = 'white'
  
})
