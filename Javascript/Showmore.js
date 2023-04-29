const showMoreButton = document.querySelector('.see_more_staff_container');
const managementsContainer = document.querySelector('.management_container');

const managements = [
  {
    name: 'Peter Dumbari',
    postion: 'Managing Director',
    Role: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo:
      'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
  },
  {
    name: 'Peter Kins',
    postion: 'Director General',
    Role: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo:
      'https://media.istockphoto.com/id/478088527/photo/young-man-portrait.jpg?s=612x612&w=0&k=20&c=42kQfRoGnXOf67zJoErTZK4z6XxpFi4tLR1vvmOtr3s=',
  },
  {
    name: 'Steve Jobs',
    postion: 'Asst MD',
    Role: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo:
      'https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg',
  },
  {
    name: 'Peter Dumbari',
    postion: 'Managing Director',
    Role: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Peter Dumbari',
    postion: 'Managing Director',
    Role: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Peter Dumbari',
    postion: 'Managing Director',
    Role: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];

let sliceManagement = managements.slice(0, 2);
const screenSize = window.matchMedia('(min-width: 768px)');

function managementboard() {
  const managementHTML = sliceManagement.map(
    (project) => `<div class="staff_card d-flex">
                  <div class="passport_container">
                  <img src=${project.photo}
                          class="passport_photograph" alt="nameofowner">
                  </div>
                  <div class="staff_infos">
                  <h3 class="staff_name">${project.name}</h3>
                  <span class="staff_postion">
                  ${project.postion}
              </span><br>
                      <div class="grey_decoration"></div>
                      <span class="staff_role">
                      ${project.Role}
                  </span>
                  </div>
            </div> `,
  );
  const speakersHTML = managementHTML.join('');
  managementsContainer.innerHTML = speakersHTML;
}
function handleResize() {
  if (screenSize.matches) {
    sliceManagement = managements.slice();
  } else {
    sliceManagement = managements.slice(0, 2);
  }
  managementboard();
}

handleResize();

window.addEventListener('resize', handleResize);

document.addEventListener('load', managementboard());

function showMore() {
  if (sliceManagement.length === managements.length) {
    sliceManagement = managements.slice(0, 2);
  } else {
    sliceManagement = managements.slice();
  }
  managementboard();
}

showMoreButton.addEventListener('click', showMore);
