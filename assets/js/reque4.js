const color1 = document.getElementById("color1")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")

color1.style.backgroundColor = 'blue'
color1.style.width = '200px'
color1.style.height = '200px'

color2.style.backgroundColor = 'red'
color2.style.width = '200px'
color2.style.height = '200px'

color3.style.backgroundColor = 'green'
color3.style.width = '200px'
color3.style.height = '200px'

color4.style.backgroundColor = 'yellow'
color4.style.width = '200px'
color4.style.height = '200px'

color1.addEventListener("click", () => color1.style.backgroundColor = 'black')
color2.addEventListener("click", () => color2.style.backgroundColor = 'black')
color3.addEventListener("click", () => color3.style.backgroundColor = 'black')
color4.addEventListener("click", () => color4.style.backgroundColor = 'black')

const key = document.getElementById("key")

const keys = {
	'a': 'pink',
  's': 'orange',
  'd': 'skyblue',
  'other' : 'white'
}
key.style.backgroundColor = 'white'
key.style.width = '200px'
key.style.height = '200px'
key.style.border = 'solid 1px black'

document.addEventListener('keydown', function(event){
  if(event.key === 'a'){
  	key.style.backgroundColor = keys['a']
  } else if(event.key === 's'){
  	key.style.backgroundColor = keys['s']
  } else if(event.key === 'd'){
  	key.style.backgroundColor = keys['d']
  } else if(event.key === 'q'){
  	createDiv('purple')
  } else if(event.key === 'w'){
  	createDiv('gray')
  } else if(event.key === 'e'){
		createDiv('brown')
  } else {
    key.style.backgroundColor = keys['other']
  }
})

function createDiv(color){
	let div = document.createElement('div');
  div.style.backgroundColor = color
  div.style.width = '200px'
	div.style.height = '200px'
	document.body.appendChild(div)
}