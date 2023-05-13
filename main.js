const profile = [
  {
  name: "Taylor Swift",
  username: "taytayswifty13",
  imageURL: "images/TSWIFT.png", 
  about: "Taylor Alison Swift is an American singer-songwriter. Widely recognized for her genre-spanning discography, songwriting and artistic reinventions, Swift is considered a prominent cultural figure.",
  stats: {
    followers: 400000000,
    following: 3,
    favorited: 200
  },
  socials: {
    location: "Nashville",
    email: "tswizzle@gmail.com",
    webpage: "google.com",
    twitter: "https://twitter.com/taylorswift13?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
  },
  buttons: {
    follow: false,
    sponsor: false,
  },
  
  highlights: [
  "Grammy winning performances", "GitHub Star", "PRO"
  ],
  organizations: [
    {
    name: "org1",
    imageURL: "org1.png",
    },
    {
    name: "org2",
    imageURL: "org3.png",
    },
    {
    name: "org3",
    imageURL: "org3.png",
    }
  ],
  sponsors: [
    {
    name: "Gigi Hadid",
    imageURL: "https://people.com/thmb/a6muAxB9SEupdX3ljFQn35zjOcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x372:961x374)/gigi-hadid-met-gala-050123-f9ee51714dda4e248156db0036f6d421.jpg",
    },
    {
    name: "Alanis Morissette",
    imageURL: "https://ca-times.brightspotcdn.com/dims4/default/806e298/2147483647/strip/true/crop/1224x1632+0+0/resize/1200x1600!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb1%2F39%2F91cd07ac4970b84ac1c90624d1f0%2Fla-photos-1staff-567372-et-alanis-morissette-jlc-0716-6792.JPG",
    },
    {
    name: "Selena Gomez",
    imageURL: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTk3NjkzMjc4Mzc0NjAyMDI5/screen-shot-2023-05-03-at-53357-pm.png",
    },
    {
    name: "Blake Lively",
    imageURL: "https://akns-images.eonline.com/eol_images/Entire_Site/2022329/rs_1200x1200-220429175301-1200-blake-lively.ct.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"
    },
    {
    name: "Trey",
    imageURL: "https://darkgreenstore.com/goldenandhoodie/41735445/798/il_fullxfull.4680238390_tbrl.jpg"
    },
    {
    name: "Thom Yorke",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg/800px-Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg"
    }
]
}];


const repoData = [
  {
    name: "Folklore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    languages: ["JavaScript", "HTML", "CSS"],
    tags: ["react", "serverless", "synergy"],
    forks: 22,
    stars: 100,
    license: undefined,
    issues: 0
  },
  {
    name: "Evermore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    languages: ["Python", "C"],
    tags: ["dev", "kernel", "susecon"],
    forks: 11,
    stars: 101,
    license: "GNU General Public License v3.0",
    issues: 0
  },
  {
    name: "Midnights",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    languages: ["JavaScript", "HTML", "CSS"],
    tags: ["react", "framework", "dev"],
    forks: 6,
    stars: 57,
    license: undefined,
    issues: 3
  },
  {
    name: "Reputation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    languages: ["TypeScript"],
    tags: ["look", "what", "you", "made", "me", "do"],
    forks: 2,
    stars: 36,
    license: undefined,
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

        console.log(user.highlights);
    

    domString += `<div class="profile">
    <img src="${user.imageUrl}" class="profile-img">
    <div class="profile-body">
      <h4 class="profile-name">${user.name}</h4>
      <h5 class="profile-username">${user.username}</h5>
      <p class="profile-about">${user.about}</p>
        <div class="profile-buttons">
            <button>Follow</button>
            <button>Sponsor</button>
            <button><img src="">...</button>
        </div>
        <div class="stats">
        ${user.stats.followers} followers ${user.stats.following} following ${user.stats.favorited} favorited
        </div>
        <div class="socials">
        ${user.socials.location} ${user.socials.email} ${user.socials.webpage} ${user.socials.twitter}
        </div>
    </div>
    <div class="highlights">${user.highlights}</div>
    <div class="organizations">
    </div>
    
    
    </div>
    <div class="sponsors">
    
    </div>
    </div>
    `
    }

    renderToDom("#profile", domString);
  console.log(renderToDom("#profile", domString));
 
 };


 profileOnDom(profile);


 const reposOnDom = () => {
  let repoDomString = "";

  for (let repo of repoData) {
    repoDomString += `
    
    <div class="repository">
      <div class="repo">
        <h1 class="repo-name">${repo.name}</h1>
        <h3>${repo.description}</h3>
        <div class="repo-tags" id="${repo.name}-tags"></div>
        <div class="repo-info" id="${repo.name}-info>
          <div id="${repo.name}-languages"></div>
          <div id="${repo.name}-stars"></div>
          <div id="${repo.name}-forks"></div>
          <div id="${repo.name}-license"></div>
          <div id="${repo.name}-issues"></div>
        </div>
      </div>
      <div class="star-button">
        <button></button>
      </div>
    </div>
   ` 
    
  }

 };

 const repoTagsOnDom = () => {
  let repoTagDomString = "";

  for (let repo of repoData) {
    for (let tag of repo.tags) {
      
      if (tag !== 0 || undefined) {
      repoTagDomString += `
      <a href="" class="repo-tag">${tag}</a>
      `
      };
     
    };
    renderToDom(`#${repo.name}-tags`, repoTagDomString);
  }
 };

 


//  const repoInfoOnDom = () => {

//   let repoInfoDomString = "";
//   let infoToRender = [];
//   let idsToRender = {};
//   for (let repo of repoData) { 

//   const repoArgumentsOnDom = (languages, stars, forks, license, issues) => {
  
//       if (languages !== undefined || 0) {
//         idsToRender.language = "language"
//       };
//       if (stars !== undefined || 0) {
//         idsToRender.stars = "stars"
//       };
//       if (forks !== undefined || 0) {
//         idsToRender.forks = "forks"
//       };
//       if (license !== undefined || 0) {
//         idsToRender.license = "license"
//       };
//       if (issues !== undefined || 0) {
//         idsToRender.stars = "stars"
//       };
//     //  languages = repo.languages;
//     //  stars = repo.stars;
//     //  forks = repo.forks;
//     //  license = repo.license;
//     //  issues = repo.issues;

//      for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i] !== undefined || 0) {
//         infoToRender = arguments.slice(i, 1);
//       }
//      }
//      for (let j = 0; j < infoToRender.length; j++) {
//       repoInfoDomString += 
     
    
//       `
       
//        <div id="${repo.name}-${infoToRender[j]}"></div>
       
    
//        `
//       }
  

//    };

// repoArgumentsOnDom(repo.languages, repo.stars, repo.forks, repo.license, repo.issues)


//  }
// };


 const repoFormOnDom = () => {
  let repoFormDomString = ` 
  
    <form class="repo-form"></form>
   
   `

 };
