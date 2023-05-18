let container = document.querySelector('.container')
let mass = []

function reload(arr) {
   for(let  item of arr){
    let elem = document.createElement('div')
    let img_box = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
   

    elem.classList.add('elem')
    img_box.classList.add('img_box')
       
    img.src = item.url
    p.innerHTML = item.title

    container.append(elem)
    elem.append(img_box,p)
    
    img_box.append(img)
   }

}

fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(json => reload(json))

      console.log(mass);