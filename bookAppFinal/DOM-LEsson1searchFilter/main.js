'use strict'
//grab the ul so that we can set up our event listener
const List = document.querySelector('#book-list ul');

//set an event listener to the ul
List.addEventListener('click', function(e){
   //set the target
   if(e.target.classname = 'delete'){
      //set target to the li
      const li = e.target.parentElement;

      //remove the clicke item
      li.parentElement.removeChild(li);
   }


});

//add form data
//first get form
const addForm = document.forms['add-book'];

//add event Listener to the form with action submit

addForm.addEventListener('submit', function(e){
    //first prevent the buttons default behaviour in our case refreshing
    e.preventDefault();

    //get data from the form
    const value = document.querySelector('input[name = "bookName"]').value;

    if(value === "" || value === " "){
      confirm('fill the fields');
    }else{
      //create an li
      let liTag = document.createElement('li');

      let spanbookTitle = document.createElement('span');
          
          spanbookTitle.classList.add('name');
          spanbookTitle.textContent = value;
          liTag.appendChild(spanbookTitle);
      let spanDelete = document.createElement('span');
         spanDelete.classList.add('delete');
         spanDelete.textContent = 'delete';
         liTag.appendChild(spanDelete);
       //append the elements
       List.appendChild(liTag);
       
       
    }
});

//hide books
const hidebox = document.querySelector('#hide');

hidebox.addEventListener('change', function(e){

  //check if checkbox is checked or not
  if(hidebox.checked){
    List.style.display = 'none';
  } else {
    List.style.display = 'block';
  }
});


//create the search filter
