//PROFILE
const profile = [
  {
  name: "Taylor Swift",
  username: "taytayswifty13",
  imageurl: "https://pyxis.nymag.com/v1/imgs/3d9/370/e7459fa585e24e458ef5391c863b2b1766-06-taylor-swift-1.rsquare.h600.jpg", 
  about: "An American singer-songwriter with a passion for web development.",
  stats: {
    followers: "4.1M",
    following: 3,
    favorited: 200
  },
  socials: {
    location: "Nashville, Tennessee",
    email: "tswizzle@gmail.com",
    webpage: "google.com",
    twitter: "@taylorswift13"
  },
  buttons: {
    follow: false,
    sponsor: false,
  },
  
  highlights: {
  one: "Grammy winning performances", 
  two: "GitHub Star", 
  three: "PRO"
  },
  organizations: {
    imageURL: "https://1000logos.net/wp-content/uploads/2017/05/American-Red-Cross-emblem.png",
    imageURL1: "https://logos-download.com/wp-content/uploads/2016/11/Wounded_Warrior_Project_logo_black-white.png"
  },
  sponsors:{
    imageURL: "https://people.com/thmb/a6muAxB9SEupdX3ljFQn35zjOcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x372:961x374)/gigi-hadid-met-gala-050123-f9ee51714dda4e248156db0036f6d421.jpg",
    imageURL1: "https://ca-times.brightspotcdn.com/dims4/default/806e298/2147483647/strip/true/crop/1224x1632+0+0/resize/1200x1600!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb1%2F39%2F91cd07ac4970b84ac1c90624d1f0%2Fla-photos-1staff-567372-et-alanis-morissette-jlc-0716-6792.JPG",
    imageURL2: "https://akns-images.eonline.com/eol_images/Entire_Site/2022329/rs_1200x1200-220429175301-1200-blake-lively.ct.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    imageURL3: "https://darkgreenstore.com/goldenandhoodie/41735445/798/il_fullxfull.4680238390_tbrl.jpg",
    imageURL4: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg/800px-Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg"
    }
}];



const repoData = [
  {
    id: 1,
    name: "Folklore",
    description: "The one with the guy from The National",
    languages: ["JavaScript", "HTML", "CSS"],
    tags: ["react", "serverless"],
    forks: 22,
    stars: 100,
    license: [],
    issues: 0
  },
  {
    id: 2,
    name: "Evermore",
    description: "The other one with the guy from The National",
    languages: ["Python", "C"],
    tags: ["dev", "kernel", "susecon"],
    forks: 11,
    stars: 101,
    license: ["GNU General Public License v3.0"],
    issues: 0
  },
  {
    id: 3,
    name: "Midnights",
    description: "Karma is also my boyfriend",
    languages: ["JavaScript", "HTML", "CSS"],
    tags: ["react", "framework", "dev"],
    forks: 6,
    stars: 57,
    license: [],
    issues: 3
  },
  {
    id: 4,
    name: "Reputation",
    description: "The description can't come to the phone right now",
    languages: ["TypeScript"],
    tags: ["look", "what", "you", "made", "me", "do"],
    forks: 2,
    stars: 36,
    license: [],
    issues: 4
  },
];



const renderToDom = (divId, htmlToRender) => {
    const divToRender = document.querySelector(divId);
    divToRender.innerHTML = htmlToRender;
};




const profileOnDom = (array) => {
    let domString = "";
    for (let user of array) {
    domString += 
    `<div class="profile">
      <img src="${user.imageurl}" class="profileimg">
      <div class="profile-body">
        <h4 class="profile-name">${user.name}</h4>
        <h5 class="profile-username">${user.username}</h5>
        <p class="profile-about">${user.about}</p>
        <div class="profile-buttons">
          <button id="followbtn">Follow</button>
          <button id="sponsorbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="hotpink" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg> Sponsor</button>
          <button id="morebtn">...</button>
        </div>
        <div class="stats" id="stats">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-people-fill" viewBox="0 0 16 16">
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          </svg>  ${user.stats.followers} followers •
          ${user.stats.following} following •
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg> ${user.stats.favorited} favorited
        </div>
        <div class="socials" id="socials">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-geo-alt" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> ${user.socials.location}</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg> ${user.socials.email}</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-link-45deg" viewBox="0 0 16 16">
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
          </svg> ${user.socials.webpage}</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-twitter" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg> ${user.socials.twitter}</p>
        </div>
        <div class="highlights">
          <h6 style="text-align: left;margin-top:10px;">Highlights</h6><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-trophy-fill" viewBox="0 0 16 16">
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
          </svg>  ${user.highlights.one}</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-stars" viewBox="0 0 16 16">
          <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
          </svg>  ${user.highlights.two}</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>  ${user.highlights.three}</p>
        </div>
        <div class="organizations">Organizations
        <p><img src="${user.organizations.imageURL}" class="org">
        <img src="${user.organizations.imageURL1}" class="org"></p>
        </div>
        <div class="sponsors">Sponsors
        <p><img src="${user.sponsors.imageURL}" class="spon"><img src="${user.sponsors.imageURL1}" class="spon"><img src="${user.sponsors.imageURL2}" class="spon"><img src="${user.sponsors.imageURL3}" class="spon"><img src="${user.sponsors.imageURL4}" class="spon"></p>
        </div>
      </div>
    </div>`
    }

  renderToDom("#profile", domString);
  console.log(renderToDom("#profile", domString));
 
 };
 


//PROJECTS
const projectsFunction =() => {
 //open modal button
const openModalBtn = document.getElementById("open-modal")
openModalBtn.onclick = function() {
  modal.style.display = "block";
} 
//close modal button
const closeModalBtn = document.getElementById("close-modal");
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

const projects = [{
  id: 1,
  name: "test-repo-30"
},
{
    id: 2,
  name: "pet-adoption"
},
{
  id: 3,
  name: "sorting-hat"
}];

const projectOnDom = (array) => {
  let domString = "";
  for (const newProject of array){
    domString += `<ul class="list-group">
    <br>
    <li class="list-group-item">${newProject.name}</li>
    <br>
  </ul>`
  }
  renderToDom('#project-list', domString);
}

const projectForm = document.querySelector('#projectsForm');

const createProject = (e) => {
  e.preventDefault();

  const newProjectObj = {
    id: projects.length + 1,
    name: document.querySelector('#project-name').value,
  }

  projects.push(newProjectObj);
  projectOnDom(projects);
  form.reset();
}

projectForm.addEventListener('submit', createProject);
projectOnDom(projects); 
};


//PACKAGES
const packagesFunction = () => {
  const packages = [
    {
      packid: 1,
      packname: "Docker",
      packdescription: "A software platform used for building applications based on containers -- small and lightweight execution environments."
    },
    {
      packid: 2,
      packname: "Apache Maven",
      packdescription: "A default package manager used for the Java programming language and the Java runtime environment."
    },
    {
      packid: 3,
      packname: "NuGet",
      packdescription: "A free and open source package manager used for the Microsoft development platforms including .NET."
    },
    {
      packid: 4,
      packname: "RubyGems",
      packdescription: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
    },
    {
      packid: 5,
      packname:"npm",
      packdescription: "A package manager for JavaScript,included with Node.js. npm makes it easy for developers to share and reuse code."
    },
    {
      packid: 6,
      packname: "Containers",
      packdescription: "A single place for your team to manage Docker images and decide who can see and access your images."
    }
  ];

  const packagesOnDom = (packages) => {
    let domString = "";
    for (pkg of packages) {
      domString += `
        <div class="row" style="margin: 10px;">
          <div class="col-sm-12">
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <h5 class="card-title">${pkg.packname}</h5>
                <p class="card-text">${pkg.packdescription}</p>
                <a href="#" class="btn btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        `;
    }
    renderToDom("#package-cards", domString);
  };
  packagesOnDom(packages);
};



const packageForm = () => {
  let packageFormString = `
    <h5 style="-webkit-text-fill-color: lightgray;">Create New Package</h5>
    <form id="packages-form" method="post" action="">
      <div class="form-group">
        <label for="packname" style="-webkit-text-fill-color: lightgray;">Package Name</label>
        <input type="text" class="form-control" id="packname">
      </div>
      <div class="form-group">
        <label for="packdescription" style="-webkit-text-fill-color: lightgray;">Description <text style="font-size: 12px;">(optional)</text></label>
        <textarea class="form-control" id="packdescription" rows="5"></textarea>
      </div>
      <button id="addNewPackage" class="btn btn-success" style="-webkit-text-fill-color: white;">Create Package
      </button>
    </form>`;
  renderToDom("#packages-form", packageFormString);

  const addNewPackageButton = document.getElementById("addNewPackage");
  addNewPackageButton.addEventListener("click", newPackageCard);
};

const newPackageCard = (event) => {
  event.preventDefault();
  
  const newPackageName = document.getElementById("packname").value;
  const newPackageDescription = document.getElementById("packdescription").value;

  // Create new package card HTML string
  const packageCardString = `
  <div class="row" style="margin: 10px;">
    <div class="col-sm-12">
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <h5 class="card-title">${newPackageName}</h5>
          <p class="card-text">${newPackageDescription}</p>
          <a href="#" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>
  </div>`;

  const newPackageOnDom = document.getElementById("newPackageOnDom");
  const packageCard = document.createElement("div");
  packageCard.innerHTML = packageCardString;
  newPackageOnDom.appendChild(packageCard);
};




 const reposOnDom = () => {
  let repoDomString = "";
  let newLangArr = [];
  let newLicenseArr = [];
  

  for (let repo of repoData) {
    if (repo.languages){
    let langArr = repo.languages;
      if (langArr.length <= 1) {
        newLangArr = langArr;
        } else {
        newLangArr = langArr.join(" ");
        }
      };

      if (repo.license) {
    let licenseArr = repo.license;
      if (licenseArr.length <= 1) {
          newLicenseArr = licenseArr
        } else {
        newLicenseArr = licenseArr.join(" ");
      };
      };
         
    const tagButtons = () => {
      let tagArr = repo.tags;
      let tagString = "";
        for (let i = 0; i < tagArr.length; i++) {
          tagString += 
          `
            <button>${tagArr[i]}</button>
          `
        }
        
        return tagString;
      }

    repoDomString += `
    
    <div class="repository">
      <div class="repo">
        <h1 class="repo-name">${repo.name}</h1>
        <h3 class="repo-description">${repo.description}</h3>
        <div class="repo-tags" id="${repo.name}-tags">${tagButtons()}</div>
        <div class="repo-info" id="${repo.name}-info">
          <div class="repo-langs" id="${repo.name}-languages">${newLangArr}</div>
          <div class="repo-stars" id="${repo.name}-stars"><svg><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"/></svg>${repo.stars}</div>
          <div class="repo-forks" id="${repo.name}-forks"><svg><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/></svg>${repo.forks}</div>
          <div class="repo-license" id="${repo.name}-license">${newLicenseArr}</div>
          <div class="repo-issues" id="${repo.name}-issues">${repo.issues} issues need help</div>
        </div>
      </div>
    </div>
   ` 


}
const repoFormOnDom = () => {
  let domString = `
  <form>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="repo-form-name" placeholder="Repository Name" required>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="repo-form-description" placeholder="Description" required>
          </div>   
          <button type="submit" class="btn btn-success" id="create-repo">Create Repository</button>
        </form>
  `;

  renderToDom("#repo-form", domString);
}
repoFormOnDom();

const form = document.querySelector("form");

const addRepo = (e) => {
  e.preventDefault();

const newRepoObj = {
  id: (repoData.length + 1),
  name: document.querySelector("#repo-form-name").value,
  description: document.querySelector("#repo-form-description").value,
  languages: undefined,
  tags: [],
  forks: 0,
  stars: 0,
  license: undefined,
  issues: 0
}

repoData.push(newRepoObj);
reposOnDom();
form.reset();
}
form.addEventListener("submit", addRepo);

  renderToDom("#repos-list", repoDomString);
};






const startApp = () => { 
  profileOnDom(profile);
  if (document.URL.includes("packages.html")) {
    packagesFunction();
    packageForm();
  }
  if (document.URL.includes("projects.html")) {
    projectsFunction();
  }
     if (document.URL.includes("repositories.html")) {
    reposOnDom();}

};

 

 startApp()

