import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const myCard = document.querySelector('.cards')
  axios.get('https://api.github.com/users/jacobgelliott')
  .then((res) => {
    const myGit = res.data
    myCard.appendChild(cardMaker(myGit))
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(data => {
  axios.get(`https://api.github.com/users/${data}`)
  .then((res) => {
    const newCard = res.data
    myCard.appendChild(cardMaker(newCard))
  })
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({picUrl, name, login, location, href, followers, following, bio}) {
  // User Card
  const userCard = document.createElement('div')
  userCard.classList.add('card')
  // Picture
  const pic = document.createElement('img')
  pic.src = picUrl
  userCard.appendChild(pic)
  // Info
  const info = document.createElement('div')
  info.classList.add('card-info')
  userCard.appendChild(info)
  // Name
  let theirName = document.createElement('h3')
  theirName.classList.add('name')
  theirName.textContent = `${name}`
  info.appendChild(theirName)
  // Username
  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = `${login}`
  info.appendChild(userName)
  // Location
  const loc = document.createElement("p")
  loc.textContent = `Location: ${location}`
  info.appendChild(loc)
  // User href URL
  const profile = document.createElement('p')
  const hrefUrl = document.createElement('a')
  profile.textContent = `Profile:`
  hrefUrl.src = href
  profile.appendChild(hrefUrl)
  // Followers
  const follower = document.createElement('p')
  follower.textContent = `Followers: ${followers}`
  info.appendChild(follower)
  // Following
  const followingCt = document.createElement('p')
  followingCt.textContent = `Following: ${following}`
  info.appendChild(followingCt)
  // Bio
  const profileBio = document.createElement('p')
  profileBio.textContent = `${bio}`
  info.appendChild(profileBio)

  return userCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
