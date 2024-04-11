const { USERS } = require("./users");

const getRandomImageUrl = (gender) => {
  const randomNum = Math.floor(Math.random() * 100);
  return `https://randomuser.me/api/portraits/${gender}/${randomNum}.jpg`;
};

const getRandomComment = () => {
  const commenters = [
    "commenter1",
    "commenter2",
    "commenter3",
    "commenter4",
    "commenter5",
  ];
  const texts = [
    "Nice post!",
    "Great picture!",
    "Awesome!",
    "Amazing!",
    "I love it!",
  ];
  const randomCommenter =
    commenters[Math.floor(Math.random() * commenters.length)];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  return { username: randomCommenter, comment: randomText };
};

const POSTS = [
  {
    imageUrl:
      "https://imgs.search.brave.com/2jo8rSMTadUpzjEsshSQuupzSIQmYRkDUCrhvKAX9cA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NiLzRi/LzQ4L2NiNGI0ODgw/MzZjNTcwNjA4MDRi/ZGRhMThjOTE1NjZk/LmpwZw",
    user: USERS[0].name,
    profilePicture: USERS[0].image,
    likes: 100,
    caption:
      "This is the first post bubc dcjknd ncodn cnudiwsh cenudsifchei  esfdnocikadsniofuchnk fewncsozdijfcoisdfhncoi!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl:
      "https://imgs.search.brave.com/xJLkY4skSOoSmBAv3lEgwf-kcDycHUEp84HfWsIRlL4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlLzAz/L2Q1LzFlMDNkNWFj/NGNjYTZiZjA1NThh/YTA1YjA1ODA1MDg0/LmpwZw",
    user: USERS[1].name,
    profilePicture: USERS[1].image,
    likes: 2000,
    caption: "This is the second post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl:
      "https://imgs.search.brave.com/nnNoNSEIo_aHGsLO_bi4_2jesIWJmyCwqBKv7zM6GqY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZlL2E5/LzE5LzZlYTkxOTMz/OGI0MmMyM2FhNDVl/ZmU3ZWM4YTMxYzJh/LmpwZw",
    user: USERS[2].name,
    profilePicture: USERS[2].image,
    likes: 150,
    caption: "This is the third post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("women"),
    user: USERS[3].name,
    profilePicture: USERS[3].image,
    likes: 180,
    caption: "This is the fourth post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("men"),
    user: USERS[4].name,
    profilePicture: USERS[4].image,
    likes: 220,
    caption: "This is the fifth post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("women"),
    user: USERS[5].name,
    profilePicture: USERS[5].image,
    likes: 300,
    caption: "This is the sixth post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("men"),
    user: USERS[6].name,
    profilePicture: USERS[6].image,
    likes: 400,
    caption: "This is the seventh post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("women"),
    user: USERS[7].name,
    profilePicture: USERS[7].image,
    likes: 150,
    caption: "This is the eighth post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("men"),
    user: USERS[8].name,
    profilePicture: USERS[8].image,
    likes: 250,
    caption: "This is the ninth post!",
    comments: [getRandomComment(), getRandomComment()],
  },
  {
    imageUrl: getRandomImageUrl("women"),
    user: USERS[9].name,
    profilePicture: USERS[9].image,
    likes: 280,
    caption: "This is the tenth post!",
    comments: [getRandomComment(), getRandomComment()],
  },
];

module.exports = { POSTS };
