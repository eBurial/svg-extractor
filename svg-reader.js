function readAllSVG(){
   

    const svgs = document.querySelectorAll('svg');
    const divs = document.querySelectorAll('div');


    document.getElementById('svg-container').innerHTML = "ciao " + svgs.length;
    console.log(svgs);
    console.log(divs);

    alert("svg letti: " + svgs.length);
    alert("div letti: " + divs.length);

}


const button = document.querySelector('button');
button.addEventListener('click', async () => {
  readAllSVG();
});



