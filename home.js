
fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    data.forEach(element => {
        console.log(element.name)
        let mainContainer=document.createElement("div")
        mainContainer.style.display="flex"
        mainContainer.className="w-100" 
        let container=document.createElement('div')
        container.className="card my-5 p-4 w-25 d-flex shadow"
        let common=document.createElement('h3')
        common.textContent=element.name.common
container.appendChild(common)
let name1=document.createElement("h6")
name1.textContent=element.name.official
container.appendChild(name1)
let population=document.createElement("h6")
console.log(element.population)
 population.textContent=element.population
 container.appendChild(population)

let language=document.createElement("ul")
let list=document.createElement("li")
list.textContent=element.languages.eng
language.appendChild(list)

// language.textContent=element.languages
container.appendChild(language) 

let regin=document.createElement("h6")
    regin.textContent=element.region
container.appendChild(regin)
console.log(element.languages)
let flags=document.createElement("img")
flags.src=element.flags.png
flags.style.width="200px"
flags.style.borderRadius="5px"
container.appendChild(flags)

console.log(element.languages)

let map=document.createElement("a")
map.href=element.maps.googleMaps
map.textContent=element.maps.googleMaps
container.appendChild(map)
mainContainer.appendChild(container)
        document.body.appendChild(mainContainer)
    });
})
