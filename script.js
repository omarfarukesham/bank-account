//style change by DOM 

const getClass = document.getElementsByClassName('blog')
const getClassContent = document.getElementsByTagName('div')





// create new element by dom manupulation

const li = document.createElement('li')
li.innerText = 'Home4'
const headList = document.getElementById('headList')
headList.appendChild(li)

// new div create 

const div =  document.createElement('div')

const h1 =  document.createElement('h1')
h1.innerText = 'Blog-4'
h1.classList.add('blog')
div.appendChild(h1)

const p =  document.createElement('p')
p.innerText = 'Bangladesh India Pakistan China Bhutan Nepal'
div.appendChild(p)

const parentDiv = document.getElementById('container')
parentDiv.appendChild(div)



for(const blogs of getClass){
    blogs.style.color = 'red'
}
 
for(const contents of getClassContent){
    contents.style.border = '2px solid red'
    contents.style.margin = '10px'
    contents.style.padding = '20px'
}