// DOMS
var elPakemonList = document.querySelector('.pakemon-list');


var elPakemonTemplate = document.querySelector(".pakemon__template").content;

// GETTING OBJS OF PAKEMONS
var pakemons = pokemons;

// CREATEING FRAGMENT
var elPakemonFragment = document.createDocumentFragment();

for (const pakemon of pakemons) {

  var elPakemonTemplateItem = elPakemonTemplate.cloneNode(true);
  elPakemonTemplateItem.querySelector(".pakemon__img").src  = pakemon.img;
  elPakemonTemplateItem.querySelector(".pakemon__name").textContent = pakemon.name;
  elPakemonTemplateItem.querySelector(".pakemon__number").textContent = pakemon.num;

  elPakemonFragment.appendChild(elPakemonTemplateItem);
}

elPakemonList.appendChild(elPakemonFragment);
