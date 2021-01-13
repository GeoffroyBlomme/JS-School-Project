/* aererAction : The padding of all the p elements will be increased by 5px in all directions.
*/
let aererAction = function(){
  let paragraphs = document.getElementsByTagName("p");
  for(let i =0; i<paragraphs.length;i++){
    if(paragraphs[i].style.padding==""){
      paragraphs[i].style.padding ="5px";
    }
    else{
      paragraphs[i].style.padding = parseInt(paragraphs[i].style.padding) + 5 + "px";
    }
  }
}

/* espacerAction : The margin of all the p elements will be increased by 5px in all directions.
*/
let espacerAction = function(){
  let paragraphs = document.getElementsByTagName("p");
  for(let i =0; i<paragraphs.length;i++){
    if(paragraphs[i].style.margin==""){
      paragraphs[i].style.margin ="5px";
    }
    else{
      paragraphs[i].style.margin = parseInt(paragraphs[i].style.margin) + 5 + "px";
    }
  }
}

/* afficherAction : The comments will be displayed/hidden if the innerText of toggle is Masquer/Afficher
*/
let afficherAction = function(){
  let toggle = document.getElementById("toggle");
  let comments = document.getElementsByClassName("comment");
  let toggleHTML = toggle.innerHTML;
  if(toggleHTML == "Masquer"){
    toggle.innerHTML = "Afficher";
    for( let i=0; i<comments.length;i++){
      comments[i].style.display="none";
    }
  }
  else{
    toggle.innerHTML="Masquer";
    for( let i=0; i<comments.length;i++){
      comments[i].style.display="inline";
    }
  }
}

/* surbrillance : The element I-annote that correspond to this I-comment will have its background-color yellow
*/
let surbrillance = function(){
  let number = parseInt(this.getAttribute("id"));
  let annote = document.getElementById(number + "-annote");
  annote.style.backgroundColor = "yellow";
}
/* surbrillanceOver : the element I-annote that corresponds to this I-comment will have its background-color put to default
*/
let surbrillanceOver = function(){
  let number = parseInt(this.getAttribute("id"));
  let annote = document.getElementById(number + "-annote");
  annote.style.backgroundColor = "";
}

$(document).ready(function(){
  $("#addinnerspace").click(function(){
    aererAction();
  });
  $("#addouterspace").click(function(){
    espacerAction();
  });
  $("#toggle").click(function(){
    afficherAction();
  });
  $(".comment").mouseenter(function(){
    surbrillance.apply(this);
  });
  $(".comment").mouseleave(function(){
    surbrillanceOver.apply(this);
  });
});
