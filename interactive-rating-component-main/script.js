const $botones = document.querySelectorAll('.container-buttons button');
const $first_card = document.querySelector('.first-card');
const $second_card = document.querySelector('.second-card');
const $btn_action = document.querySelector('.btn-action');
const $result = document.querySelector('.result');
let valor;
// console.log($second_card)

// console.log($first_card)
$botones.forEach(boton =>{
    boton.addEventListener('click',(e)=>{
        valor = e.target.textContent;
        $botones.forEach(btn => btn.classList.remove('active')
            
    );
        boton.classList.toggle('active')
    });
}) 

$btn_action.addEventListener('click', (e) => {
    if(valor!==''){
        $second_card.classList.remove('hidden');
        $result.textContent = valor;
    }

    $first_card.classList.add('hidden');
    $second_card.classList.remove('hidden')
});


    