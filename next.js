// let apiKey="c6ec492d-92ad-48ff-bd89-ded30b1a5393"
// fetch(`https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=55309af2-18dc-4290-b396-984dc1747531`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   }
// );

// fetch("https://api.harvardartmuseums.org?apikey=55309af2-18dc-4290-b396-984dc1747531")
//   .then((response) => response.json())
//   .then((json) => console.log(json));


  fetch("https://api.harvardartmuseums.org/object?apikey=55309af2-18dc-4290-b396-984dc1747531")
  .then((response) => response.json())
  .then((data) => {

   console.log(data.records)

  data.records.forEach(element => {
        // console.log(element)
        let mainContainer=document.createElement("div")
        mainContainer.style.display="flex"
        mainContainer.className="w-100" 
        let container=document.createElement('div')
        container.className="card my-5 p-4 w-25 d-flex shadow"
        let artest=document.createElement('h3')
        // artest.textContent=element.records
container.appendChild(artest)
// name
let name1=document.createElement("h6")
 name1.textContent=element.createdate
 container.appendChild(name1)

// title
let title=document.createElement("h6")
console.log(element.title)
 title.textContent=element.title
 container.appendChild(title)

// date
let date=document.createElement("h6")
    date.textContent=element.people.name
container.appendChild(date)

// img
let img=document.createElement("img")
img.src=element.primaryimageurl
img.style.width="200px"
img.style.borderRadius="5px"
container.appendChild(img)

mainContainer.appendChild(container)
        document.body.appendChild(mainContainer)
    });
});

