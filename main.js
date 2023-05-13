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


const renderToDom = (divId, htmlToRender) => {
    const divToRender = document.querySelector(divId);
    divToRender.innerHTML = htmlToRender;
    };

 const profileOnDom = (array) => {
    let domString = "";

    for (let user of array) {
    domString += 
    `<div class="profile">
    <img src="${user.imageurl}" class="profile-img">
    <class="profile-body">
      <h4 class="profile-name">${user.name}</h4>
      <h5 class="profile-username">${user.username}</h5>
      <p class="profile-about">${user.about}</p>
        <div class="profile-buttons">
          <button id="followbtn">Follow</button>
          <button id="sponsorbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="whitesmoke" class="bi bi-heart" viewBox="0 0 16 16">
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
        <div class="highlights"><h6 style="text-align: left;margin-top:10px;">Highlights</h6><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-trophy-fill" viewBox="0 0 16 16">
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
        </div>
    </div>
    <div class="sponsors">Sponsors
    </div>
    </div>
    `
    }

    renderToDom("#profile", domString);
  console.log(renderToDom("#profile", domString));
 
 };


//array for packages cards
 const packages = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightblue" class="bi bi-water" viewBox="0 0 16 16">
    <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z"
    /></svg>,
    name: "Docker",
    description: "A software platform used for building applications based on containers -- small and lightweight execution enviroments."
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-caret-up" viewBox="0 0 16 16">
    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/></svg>,
    name: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime enviroment."
  },
  {
    id: 3,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="navy" class="bi bi-app-indicator" viewBox="0 0 16 16">
    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>,
    name: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET."
  },
  {
    id: 4,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-gem" viewBox="0 0 16 16">
    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/></svg>,
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
  },
  {
    id: 5,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-box2-fill" viewBox="0 0 16 16">
    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"/></svg>,
    name:"npm",
    description: "A package manager for JavaScript,included with Node.js. npm makes it easy for developers to share and reuse code."
  },
  {
    id: 6
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-bag-fill" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/></svg>,
    name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images."
  },
 ];


const package = document.querySelector('#package');
 profileOnDom(profile);
