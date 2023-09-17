/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//list parameter represents an array of student objects
//page parameter represents the requested page number

const itemsPerPage = 9;
function showPage(list, page){
   const startIndex = (page*itemsPerPage) - itemsPerPage;
   const endIndex = (page*itemsPerPage);
   //need to declare and assign value to itemsPerPage
   const studentListUL = document.querySelector('.student-list');
   studentListUL.innerHTML = '';
   for(let i=0; i<list.length; i++){
      if(i>=startIndex && i<endIndex){
         const display = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;
         studentListUL.insertAdjacentHTML('beforeend', display);
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

//list parameter represents an array of student objects
function addPagination(list){
   const numPaginationBtns = Math.ceil(list.length/9);
   const pageBtns = document.querySelector('.link-list');
   pageBtns.innerHTML='';
   for(let i=0; i<numPaginationBtns; i++){
      const pageBtn = `
         <li>
            <button type="button">${i+1}</button>
         </li>
      `;
      pageBtns.insertAdjacentHTML('beforeend', pageBtn);
   }
   const firstPageBtn = pageBtns.querySelector('button');
   firstPageBtn.className = 'active'
   pageBtns.addEventListener('click', (e)=>{
      if(e.target.tagName === 'BUTTON'){
         const activeBtn = pageBtns.querySelector('.active');
         activeBtn.removeAttribute('class', 'active');
         const clickedBtn = e.target.closest('button');
         clickedBtn.className = 'active'
         showPage(data,clickedBtn.innerHTML);
      }
   });
}

/** 
 * Below is the code to add a search component to the project
 */

//Extra Credit PART1: Add a Search Component
const header = document.querySelector('.header');
const searchBarHTML = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`;
header.insertAdjacentHTML('beforeend', searchBarHTML);

//Extra Credit PART2: Add Search Functionality

//search function



//search works as user types in search into the search bar
const searchBar = header.querySelector('.student-search');
searchBar.addEventListener('keyup', ()=>{
   //run function to search
});

//search works when search/submit button is clicked
const searchBtn = searchBar.querySelector('button');
searchBtn.addEventListener('click', ()=>{
   //run function to search
});


// // Call functions
addPagination(data);
showPage(data, 1);
