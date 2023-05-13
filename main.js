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
    license: [],
    issues: 0
  },
  {
    name: "Evermore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    languages: ["Python", "C"],
    tags: ["dev", "kernel", "susecon"],
    forks: 11,
    stars: 101,
    license: ["GNU General Public License v3.0"],
    issues: 0
  },
  {
    name: "Midnights",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    languages: ["JavaScript", "HTML", "CSS"],
    tags: ["react", "framework", "dev"],
    forks: 6,
    stars: 57,
    license: [],
    issues: 3
  },
  {
    name: "Reputation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
  let newLangArr = [];
  let newLicenseArr = [];

  for (let repo of repoData) {
    let langArr = repo.languages;
      if (langArr.length <= 1) {
        newLangArr = langArr;
        } else {
        newLangArr = langArr.join(" ");
      };

    let licenseArr = repo.license;
      if (licenseArr.length <= 1) {
          newLicenseArr = licenseArr
        } else {
        newLicenseArr = licenseArr.join(" ");
      };
    repoDomString += `
    
    <div class="repository">
      <div class="repo">
        <h1 class="repo-name">${repo.name}</h1>
        <h3>${repo.description}</h3>
        <div class="repo-tags" id="${repo.name}-tags"></div>
        <div class="repo-info" id="${repo.name}-info>
          <div id="${repo.name}-languages">${newLangArr}</div>
          <div id="${repo.name}-stars"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path> ${repo.stars}</div>
          <div id="${repo.name}-forks"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>${repo.forks}</div>
          <div id="${repo.name}-license">${newLicenseArr}</div>
          <div id="${repo.name}-issues">${repo.issues} issues need help</div>
        </div>
      </div>
      <div class="star-button">
        <button></button>
      </div>
    </div>
   ` 
   const repoTagsOnDom = () => {
    let repoTagDomString = "";

    // for (let repo of repoData) {
      for (let tag of repo.tags) {
        
        if (tag !== undefined) {
        repoTagDomString += `
        <a href="" class="repo-tag">${tag}</a>
        `
        };
      
      };
      renderToDom(`#${repo.name}-tags`, repoTagDomString);
    // }
  };

repoTagsOnDom();


}





  renderToDom("#repos-list", repoDomString);
};


//  const repoInfoOnDom = () => {
  const repoTagsOnDom = () => {
    let repoTagDomString = "";

    // for (let repo of repoData) {
      for (let tag of repo.tags) {
        
        if (tag !== undefined) {
        repoTagDomString += `
        <a href="" class="repo-tag">${tag}</a>
        `
        };
      
      };
      renderToDom(`#${repo.name}-tags`, repoTagDomString);
    // }
  };

  // const repoLangOnDom = () => {
  //   let repoLangDomString = "";

  //   // for (let repo of repoData) {
  //     for (let lang of repo.languages) {
        
  //       if (lang) {
  //       repoLangDomString += `
  //       <div class="repo-lang">${lang}</div>
  //       `
  //       } else {return};
      
  //     };
  //     renderToDom(`#${repo.name}-languages`, repoLangDomString);
  //   // }
  // };

  // const repoStarsOnDom = () => {
  //   let repoStarsDomString = "";

  //   // for (let repo of repoData) {
  //     for (let count of repo.stars) {
        
  //       if (count !== 0) {
  //       repoStarsDomString += `
  //       <div class="repo-stars"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>${count}</div>
  //       `
  //       };
      
  //     };
  //     renderToDom(`#${repo.name}-stars`, repoStarsDomString);
  //   // }
  // };

  // const repoForksOnDom = () => {
  //   let repoForksDomString = "";

  //   // for (let repo of repoData) {
  //     for (let count of repo.forks) {
        
  //       if (count !== 0) {
  //       repoForksDomString += `
  //       <div class="repo-forks"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>${count}</div>
  //       `
  //       };
      
  //     };
  //     renderToDom(`#${repo.name}-forks`, repoForksDomString);
  //   // }
  // };

  // const repoLicenseOnDom = () => {
  //   let repoLicenseDomString = "";

  //   // for (let repo of repoData) {
  //     for (let license of repo.license) {
        
  //       if (license !== undefined) {
  //       repoLicenseDomString += `
  //       <div class="repo-license">${license}</div>
  //       `
  //       };
      
  //     };
  //     renderToDom(`#${repo.name}-license`, repoLicenseDomString);
  //   // }
  // };

  // const repoIssuesOnDom = () => {
  //   let repoIssuesDomString = "";

  //   // for (let repo of repoData) {
  //     for (let count of repo.issues) {
        
  //       if (count !== 0) {
  //       repoIssuesDomString += `
  //       <div class="repo-forks">${count} issues need help</div>
  //       `
  //       };
      
  //     };
  //     renderToDom(`#${repo.name}-issues`, repoIssuesDomString);
  //   // }
  // };

//   repoTagsOnDom();
//   repoLangOnDom();
//   // repoStarsOnDom();
//   // repoForksOnDom();
//   repoLicenseOnDom();
//   // repoIssuesOnDom();
  

//  };


//  const repoFormOnDom = () => {
//   let repoFormDomString = ` 
  
//     <form class="repo-form"></form>
   
//    `

//  };

 const startApp = () => {
  reposOnDom();
  // repoInfoOnDom();
 };

 startApp();
