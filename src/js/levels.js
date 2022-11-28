let iconLevels = document.getElementById('iconLevels');
let levels = document.getElementById('divLevels');


iconLevels.addEventListener('click', () => {
  if(levels.classList.length > 1){
      levels.classList.remove('open')
  }else{
      levels.classList.add('open');
  };
});

