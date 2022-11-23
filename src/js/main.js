let iconBackpack = document.getElementById('iconBackpack');
let inventario = document.getElementById('divBackpack');
let hpPotion = document.getElementById('hpPotion');
let superMana = document.getElementById('superManaPotion');
let superHp = document.getElementById('superHpPotion');
let manaPotion = document.getElementById('manaPotion');
let hpBar = document.getElementById('hpBar');
let manaBar = document.getElementById('manaBar');
let spellPassosNoturnos = document.getElementById('passosNoturnos');
let char = document.getElementById('char');
let iconSpells = document.getElementById('iconSpells');
let spells = document.getElementById('divSpells');
let iconLevels = document.getElementById('iconLevels');
let levels = document.getElementById('divLevels');


// backpack script
iconBackpack.addEventListener('click', () => {
    if(inventario.classList.length > 1){
        inventario.classList.remove('open');
    }else{
        inventario.classList.add('open');
    };
});

hpPotion.addEventListener('click', () => {
    hpBar.value += 20;
    hpPotion.classList.add('potion-consumed');
});

manaPotion.addEventListener('click', () => {
    manaBar.value += 20;
    manaPotion.classList.add('potion-consumed');
});

superHp.addEventListener('click', () => {
    hpBar.value += 45;

    superHp.classList.add('potion-consumed');
});

superMana.addEventListener('click', () => {
    manaBar.value += 45;
    superMana.classList.add('potion-consumed');
}); 




// spells script
iconSpells.addEventListener('click', () => {
    if(spells.classList.length > 1){
        spells.classList.remove('open');
    }else {
        spells.classList.add('open');
    };
});

spellPassosNoturnos.addEventListener('click', () => {
    if(char.classList.length > 1){
        char.classList.remove('active');
    }else{
        char.classList.add('active');
    };
});

// levels script
iconLevels.addEventListener('click', () => {
    if(levels.classList.length > 1){
        levels.classList.remove('open')
    }else{
        levels.classList.add('open');
    };
});

