
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



fetch('https://reqres.in/api/users') 
.then(response => response.json())
.then(res => {

    for(let i of res.data){
  let div = document.createElement("div")
  
  let divName = document.createTextNode("Firstname: " + i.first_name )
  div.classList.add("firstName")
  div.appendChild(divName)
  document.getElementById("fetch").appendChild(div)
  
  let divSname = document.createTextNode(" Lastname: " + i.last_name )
  div.classList.add("lastName")
  div.appendChild(divSname)
  
  let elem = document.createElement("img")
  elem.setAttribute("src", i.avatar)
  div.appendChild(elem)
}
});

var ora = new Date();
document.getElementById("ora").innerHTML = "Prima prova per qualifica del " + ora.getDate() + "/" + (ora.getMonth() + 1) + "/" + ora.getFullYear();
