const $mark_all_read = document.querySelector('.mark-all-read');
const $container_notification = document.querySelectorAll('.container');
const $user_comment = document.querySelector('.comment-container');
const $notification_counter = document.querySelector('.notification-counter');


$mark_all_read.addEventListener('click', (e) =>{
    $container_notification.forEach(notification =>  {
        notification.classList.remove('readed-style');
        update_counter()
    })
});


$user_comment.addEventListener('click', (e) => {
    $user_comment.classList.add('readed-style');
});


function update_counter(){
    const elements = document.querySelectorAll('.container:not(.readed-style) .mark-all-read').length;
    $notification_counter.textContent = elements;

}



