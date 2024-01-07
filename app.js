const paragraphs = document.querySelectorAll("p");
const but = document.querySelectorAll(".bold-text");

for(let i =0; i<paragraphs.length; i++){
    but[i].addEventListener('click',()=>{
        paragraphs[i].style.display = (paragraphs[i].style.display === 'none') ? 'block' : 'none';
        
    })
}
