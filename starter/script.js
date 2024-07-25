'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
//queryselector selects all three elements show modal
// while queryselector just selects o

const openModal = function(){
   console.log('Button clicked');
   modal.classList.remove('hidden');
   modal.classList.remove('hidden'); 
}


for(let i=0 ; i<btnsOpenModel.length; i++)
   btnsOpenModel[i].addEventListener('click' , openModal);


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);


// instead of this we use the above one 
// overlay.addEventListener('click' , function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });


//When a key is pressed, it logs the event object (e) to the console.
document.addEventListener('keydown' , function(e){
 console.log(e.key);
 if(e.key ==='Escape' && !modal.classList.contains('hidden')){
    closeModal();
 }

//  if(e.key ==='Escape'){
//     console.log("Escape was pressed");
//    if(!modal.classList.contains('hidden')){
//     closeModal();
//    }
//  }
});
