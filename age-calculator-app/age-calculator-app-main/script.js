const $btn_arrow = document.getElementById('btn-arrow');
const $view_year = document.querySelector('.view-year');
const $view_month = document.querySelector('.view-month');
const $view_day = document.querySelector('.view-day');
const $input_year = document.getElementById('year');
const $input_month = document.getElementById('month');
const $input_day = document.getElementById('day');
// const $error_message = document.querySelectorAll('.error-message');
const $error_message_day = document.querySelector('.error-message-day');
const $error_message_month = document.querySelector('.error-message-month');
const $error_message_year = document.querySelector('.error-message-year');



$btn_arrow.addEventListener('click', (e) => {
    let fecha_actual = new Date();
    
    
    if ($input_year.value == null || $input_year.value == ''  ){
        // console.log('Campos requeridos'); 
        $error_message_year.classList.remove('hide');
    }
    else{
        $error_message_year.classList.add('hide');        
    }
   

    if($input_month.value == null || $input_month.value == ''){
        // console.log('Campos requeridos');
        $error_message_month.classList.remove('hide');
    }
    else{
        $error_message_month.classList.add('hide');
    }

    if($input_day.value == null || $input_day.value == '') {
        // console.log('Campos requeridos');
        $error_message_day.classList.remove('hide');
    }
    else{
        $error_message_day.classList.add('hide');

    }

    

    if($input_year.value && $input_month && $input_day){

        if($input_day.value < 1 || $input_day.value > 31){
            alert('El día no puede ser inferior a 1 y superior a 31')
        }
    
        if($input_month.value < 1 || $input_month > 12){
            alert('El mes no puede ser inferior a 1 y superior a 12')
        }
    
        if($input_year.value > fecha_actual.getFullYear() || $input_year.value < 1){
            alert('El año no puede ser inferior a 1 y superior al año actual')
        }

        let year_user = parseInt($input_year.value);
        let month_user = parseInt($input_month.value);
        let day_user = parseInt($input_day.value);
    
        let birth_user = new Date(year_user,month_user,day_user);
          
        let calculation = fecha_actual - birth_user;
        
        let year = Math.floor(calculation / ( 1000*60*60*24*365.25));
        let month = Math.floor((calculation % ( 1000*60*60*24*365.25)) / (1000*60*60*24*30.44));
        let day = Math.floor(calculation % (( 1000*60*60*24*30.44)) / (1000*60*60*24));
    
        $view_year.textContent = year;
        $view_month.textContent = month;
        $view_day.textContent = day;
    }

    
    








    


    
    
});
