const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const movie = document.querySelector("movie");

const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "./aud/music1.mp3",
    title: "Nan Erikarai",
    artist: "ilayaraja",
    imgSrc: "./img/music1.jpg",
  },
  {
    songSrc: "./aud/music2.mp3",
    title: "Rathiriyil paadum paattu",
    artist: "ilayaraja",
    imgSrc: "./img/music2.jpg",
  },
  {
    songSrc: "./aud/music3.mp3",
    title: "Malliye Chinna Mullaiye",
    artist: "ilayaraja",
    imgSrc: "./img/music3.jpg",
  },
  {
    songSrc: "./aud/music4.mp3",
    title: "En Kanmani",
    artist: "ilayaraja",
    imgSrc: "./img/music4.jpg",
  },
  {
    songSrc: "./aud/music5.mp3",
    title: "Mella Mella Ennai Thottu ",
    artist: "ilayaraja",
    imgSrc: "./img/music5.jpg",
  },
  {
    songSrc: "./aud/music6.mp3",
    title: "Mankuyile Poonkuyile ",
    artist: "ilayaraja",
    imgSrc: "./img/music6.jpeg",
  },
  {
    songSrc: "./aud/music7.mp3",
    title: "En Eanasula Paattuthaan Irukkuthu ",
    artist: "ilayaraja",
    imgSrc: "./img/music7.jpg",
  },
  {
    songSrc: "./aud/music8.mp3",
    title: "Thana Vantha Santhaname",
    artist: "ilayaraja",
    imgSrc: "./img/music8.jpg",
  },
  {
    songSrc: "./aud/music9.mp3",
    title: "Naan Gaali",
    artist: "Sean Roldan",
    imgSrc: "./img/music9.jpg",
  },
  {
    songSrc: "./aud/music10.mp3",
    title: "Kadhal Rojave ",
    artist: "A R Rahman",
    imgSrc: "./img/music10.jpg",
  },
  {
    songSrc: "./aud/music11.mp3",
    title: "Raasave Unnai Vida Matten",
    artist: "ilayaraja",
    imgSrc: "./img/music11.jpeg",
  },
  {
    songSrc: "./aud/music12.mp3",
    title: "Nilave Mugam Kattu",
    artist: "ilayaraja",
    imgSrc: "./img/music12.jpg",
  },
  {
    songSrc: "./aud/music13.mp3",
    title: "Aalappol Velapol",
    artist: "ilayaraja",
    imgSrc: "./img/music12.jpg",
  },
  {
    songSrc: "./aud/music14.mp3",
    title: "Thendral Vanthu Theendum Pothu",
    artist: "ilayaraja",
    imgSrc: "./img/music14.jpg",
  },
  {
    songSrc: "./aud/music15.mp3",
    title: "Maalai En Vethanai",
    artist: "ilayaraja",
    imgSrc: "./img/music15.jpg",
  },
  {
    songSrc: "./aud/music16.mp3",
    title: "Koondukulla Enna Vechu",
    artist: "ilayaraja",
    imgSrc: "./img/music16.jpeg",
  },
  {
    songSrc: "./aud/music17.mp3",
    title: "Nenjukkule Innarendru",
    artist: "ilayaraja",
    imgSrc: "./img/music17.jpeg",
  },
  {
    songSrc: "./aud/music18.mp3",
    title: "Annakili Unna Theduthe",
    artist: "ilayaraja",
    imgSrc: "./img/music18.jpeg",
  },
  {
    songSrc: "./aud/music19.mp3",
    title: "Paatha Kolusu Pattu",
    artist: "ilayaraja",
    imgSrc: "./img/music19.jpg",
  },
  {
    songSrc: "./aud/music20.mp3",
    title: "Oru Sandhana Kattukulle",
    artist: "ilayaraja",
    imgSrc: "./img/music20.jpg",
  },
  {
    songSrc: "./aud/music21.mp3",
    title: "Valaiyosai Kala Kala",
    artist: "ilayaraja",
    imgSrc: "./img/music21.jpeg",
  },
  {
    songSrc: "./aud/music22.mp3",
    title: "Paravaiye Engu Irukkiraai",
    artist: "ilayaraja",
    imgSrc: "./img/music22.jpeg",
  },
  {
    songSrc: "./aud/music23.mp3",
    title: "Kanne Kalaimane",
    artist: "ilayaraja",
    imgSrc: "./img/music23.jpeg",
  },
  {
    songSrc: "./aud/music24.mp3",
    title: "Rosappu Chinna Rosappu",
    artist: "Hariharan",
    imgSrc: "./img/music24.jpg",
  },
  {
    songSrc: "./aud/music25.mp3",
    title: "Rasa Rasa Unna Vachirukken",
    artist: "Hariharan",
    imgSrc: "./img/music25.jpg",
  },
  {
    songSrc: "./aud/music26.mp3",
    title: "Varen Varen Un Kooda Varen",
    artist: "Udit Narayan",
    imgSrc: "./img/music26.jpg",
  },
  {
    songSrc: "./aud/music27.mp3",
    title: "Kalyana Malai",
    artist: "ilayaraja",
    imgSrc: "./img/music27.jpg",
  },
  {
    songSrc: "./aud/music28.mp3",
    title: "Sundari Kannal Oru Sethi",
    artist: "ilayaraja",
    imgSrc: "./img/music28.jpg",
  },
  {
    songSrc: "./aud/music29.mp3",
    title: "Sokkanukku Vacha Sundariye",
    artist: "ilayaraja",
    imgSrc: "./img/music29.jpg",
  },
  {
    songSrc: "./aud/music30.mp3",
    title: "Aayiram Malargale",
    artist: "ilayaraja",
    imgSrc: "./img/music30.jpeg",
  },
  {
    songSrc: "./aud/music31.mp3",
    title: "Ravivarman Yezhuthatha Kalaiyo",
    artist: "K.J. Yesudas",
    imgSrc: "./img/music31.jpg",
  },
  {
    songSrc: "./aud/music32.mp3",
    title: "Samba Natthu",
    artist: "Soundaryan",
    imgSrc: "./img/music32.jpg",
  },
  {
    songSrc: "./aud/music33.mp3",
    title: "Pachamala Poovu",
    artist: "ilayaraja",
    imgSrc: "./img/music33.jpg",
  },
  {
    songSrc: "./aud/music34.mp3",
    title: "Muthumani Maalai",
    artist: "ilayaraja",
    imgSrc: "./img/music34.jpg",
  },
  {
    songSrc: "./aud/music35.mp3",
    title: "Vaa Vaa Vanji ilamane",
    artist: "ilayaraja",
    imgSrc: "./img/music35.jpg",
  },
  {
    songSrc: "./aud/music36.mp3",
    title: "Vidala Pulla Nesathukku",
    artist: "ilayaraja",
    imgSrc: "./img/music36.jpg",
  },
  {
    songSrc: "./aud/music37.mp3",
    title: "Velli Nilave Velli Nilave",
    artist: "ilayaraja",
    imgSrc: "./img/music37.jpg",
  },
  {
    songSrc: "./aud/music38.mp3",
    title: "Moonu Mulam Malligai Poo",
    artist: "Deva",
    imgSrc: "./img/music38.jpg",
  },
  {
    songSrc: "./aud/music39.mp3",
    title: "Rasathi Manasula",
    artist: "ilayaraja",
    imgSrc: "./img/music39.jpg",
  },
  {
    songSrc: "./aud/music40.mp3",
    title: "Santhaikku Vantha Kili",
    artist: "ilayaraja",
    imgSrc: "./img/music40.jpeg",
  },
  {
    songSrc: "./aud/music41.mp3",
    title: "Poothathu Poonthoppu",
    artist: "ilayaraja",
    imgSrc: "./img/music41.jpeg",
  },
  {
    songSrc: "./aud/music42.mp3",
    title: "Pallaku Kuthurayila",
    artist: "ilayaraja",
    imgSrc: "./img/music42.jpeg",
  },
  {
    songSrc: "./aud/music43.mp3",
    title: "Pasamulla Pandiyare",
    artist: "ilayaraja",
    imgSrc: "./img/music43.jpeg",
  },
  {
    songSrc: "./aud/music44.mp3",
    title: "Naan Pooveduthu Vaikanum",
    artist: "ilayaraja",
    imgSrc: "./img/music44.jpg",
  },
  {
    songSrc: "./aud/music45.mp3",
    title: "Rendu Kannam Santhana Kinnam",
    artist: "ilayaraja",
    imgSrc: "./img/music45.jpg",
  },
  {
    songSrc: "./aud/music46.mp3",
    title: "Meena Ponnu",
    artist: "Sirpy",
    imgSrc: "./img/music46.jpg",
  },
  {
    songSrc: "./aud/music47.mp3",
    title: "Vasa Karuveppilaiye",
    artist: "ilayaraja",
    imgSrc: "./img/music47.jpg",
  },
  {
    songSrc: "./aud/music48.mp3",
    title: "Muthu Nagaye",
    artist: "Deva",
    imgSrc: "./img/music48.jpg",
  },
  {
    songSrc: "./aud/music49.mp3",
    title: " Raja Raja Chozan Naan",
    artist: "ilayaraja",
    imgSrc: "./img/music49.jpg",
  },
  {
    songSrc: "./aud/music50.mp3",
    title: "Raasaathi Unnai Kaanatha Nenjam",
    artist: "ilayaraja",
    imgSrc: "./img/music50.jpg",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});
