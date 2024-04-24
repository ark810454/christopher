/* animer une section au moment du scroll */
var stop=false;
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= 500 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
     && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 500 
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
  }
  var container = document.querySelectorAll(".skills");
  
  document.addEventListener("scroll", function () {
    for (var i = 0; i < container.length; i++) {
        if (isScrolledIntoView(container[i])) {
          count_live("#number",85,1,18);
          count_live("#number2",80,1,12);
          count_live("#number3",75,1,10);
          count_live("#number4",65,1,8);
          
        }
      };
    })
function geratenumber(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
  }
  function count_live(element, limit, add, timer) {
    if (document.querySelector(element) !== null && stop == false) {
      var elementNode = document.querySelector(element);
      var addd = 0;
      var val1 = timer / 2;
  
      function count_live2() {
        if (addd <= limit) {
          let ngonga = geratenumber(val1, timer);
          addd += add;
          elementNode.textContent = addd+" %";
          setTimeout(count_live2, ngonga);
          if (addd >= limit) {
            addd = limit;
            elementNode.textContent = addd+" %";
            stop = true;
          }
        }
      }
  
      count_live2();
    }
  }

  let btnmenu = document.getElementById("btnmenu");
  let menu = document.querySelector(".links");
  let cont = document.querySelector(".allContainer");
  let navbar = document.querySelector(".navbar");
  
  let etatMenu = false;
  var mediaQuery = window.matchMedia("(max-width: 1100px)");


   

  btnmenu.addEventListener('click', ()=>{
    etatMenu = !etatMenu
    if(etatMenu===true){
      function handleMediaQueryChange(mediaQuery) {
      menu.style.left="0%";
      cont.style.left="16%";
      cont.style.width="84%";
      navbar.style.width="74%";
        if (mediaQuery.matches) {
          menu.style.left="0%";
        cont.style.left="0%";
        cont.style.width="100%";
        navbar.style.width="90%";
        }
        else {
           menu.style.left="0%";
        cont.style.left="16%";
        cont.style.width="84%";
        navbar.style.width="74%";
        }}
        handleMediaQueryChange(mediaQuery);

// Ajouter un écouteur d'événement pour gérer les changements d'état du media query
mediaQuery.addListener(handleMediaQueryChange);
    }else{
        menu.style.left="-100%";
        cont.style.left="0%";
        cont.style.width="100%";
        navbar.style.width="90%";
    }
  })

  let showWork = document.querySelectorAll(".showWork");
  let iconWork = document.querySelectorAll(".iconShowWork");
  for (let i = 0; i<showWork.length; i++){
    showWork[i].addEventListener('mouseenter', ()=>{
      showWork[i].style.opacity="1";
      iconWork[i].style.bottom="0%";
    })
    showWork[i].addEventListener('mouseleave', ()=>{
      showWork[i].style.opacity="0";
      iconWork[i].style.bottom="-100%";
    })
  }

  let allworks = document.querySelector(".Allworks");
  let allworksweb = document.querySelector(" .Allworksweb");
  let allworksmobile = document.querySelector(".Allworksmobile");
  let allworksdesk = document.querySelector(" .Allworksdesk");
  let workarray = [allworks,allworksweb, allworksmobile,allworksdesk]
  let showLi1 = document.querySelector(".showLi");
  let showLi2 = document.querySelector(".showLi2");
  let showLi3 = document.querySelector(".showLi3");
  let showLi4 = document.querySelector(".showLi4");
  let fadeWork = document.querySelectorAll(".fadeWork ul li");
  showLi1.style.display="block";
    showLi2.style.display="none";
    showLi3.style.display="none";
    showLi4.style.display="none";
  fadeWork[0].addEventListener('click', ()=>{
    showLi1.style.display="block";
    showLi2.style.display="none";
    showLi3.style.display="none";
    showLi4.style.display="none";
  })
  fadeWork[1].addEventListener('click', ()=>{
    showLi1.style.display="none";
    showLi2.style.display="block";
    showLi3.style.display="none";
    showLi4.style.display="none";
  })
  fadeWork[2].addEventListener('click', ()=>{
    showLi1.style.display="none";
    showLi2.style.display="none";
    showLi3.style.display="block";
    showLi4.style.display="none";
  })
  fadeWork[3].addEventListener('click', ()=>{
    showLi1.style.display="none";
    showLi2.style.display="none";
    showLi3.style.display="none";
    showLi4.style.display="block";
  })
  /* let etatworks = new Array(fadeWork.length).fill(false); */
  let etatworks = [true, false, false, false]

  for (let i = 0; i<fadeWork.length; i++){
    
    if(etatworks[i]===true){
      workarray[i].style.display="block";
      
    }else{
      workarray[i].style.display="none";
    }
    fadeWork[i].addEventListener('click', ()=>{
      for (let j = 0; j<etatworks.length; j++){
        if(etatworks[j]===true){
          workarray[j].style.display="none";

        }
      }
      etatworks[i]= true

      if(etatworks[i]===true){
        workarray[i].style.display="block";
       
      }else{
        workarray[i].style.display="none";
      }
      
    })
  }

  let iconShowMore = document.querySelectorAll(".iconShowWork svg");
  let imgmore = document.querySelectorAll(".cc .img");
  let ccc = document.querySelectorAll(".cc");
  let More = document.querySelector(".showOneWork");
  let view = document.querySelector(".view");
  let iconclose = document.querySelector(".iconsss svg");

  for(let i = 0; i<iconShowMore.length; i++){
    iconShowMore[i].addEventListener('click', ()=>{
      More.style.display="flex";
      view.appendChild(imgmore[i]);
    })
    iconclose.addEventListener('click', ()=>{
      More.style.display="none";
      view.removeChild(imgmore[i]);
      ccc[i].appendChild(imgmore[i])
    })
  }