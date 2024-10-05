function getTime(time) {
  let hour = parseInt(time / 3600);
  let remainingsec = time % 3600;
  //   console.log(remainingsec);
  let min = parseInt(remainingsec / 60);
  remainingsec = remainingsec % 60;
  return `${hour}hour ${min} min ${remainingsec} sec ago`;
}
// button remove function
const removeActiveClass = () => {
  const buttons = document.getElementsByClassName("catagoryBtn");
  console.log(buttons);
  for (let btn of buttons) {
    btn.classList.remove("clickedBtn");
  }
};
// button section:
function getData() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => display(data.categories));
}
function display(data) {
  for (const value of data) {
    console.log(value);
    const btnContainer = document.createElement("div");

    btnContainer.innerHTML = `
    <button id="btn-${value.category_id}" onclick="loadCatagoryVideo(${value.category_id})" class ="btn catagoryBtn">${value.category}
    </button>`;

    console.log(btnContainer);
    const catagory = document.getElementById("catagory");
    btnContainer;
    catagory.append(btnContainer);
  }
}
getData();

// video section:
const videosAddHere = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => printVideo(data.videos))
    .catch((error) => console.log(error));
};

const loadCatagoryVideo = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // sobyke active class remove korao
      removeActiveClass();
      //id er class k add korao
      const activeBtn = document.getElementById(`btn-${id}`);
      // console.log(activeBtn);
      activeBtn.classList.add("clickedBtn");
      printVideo(data.category);
    })
    .catch((error) => console.log(error));
};

function printVideo(videos) {
  const videoAdd = document.getElementById("video");
  videoAdd.innerHTML = "";
  // no video section
  if (videos.length == 0) {
    videoAdd.classList.remove("grid");
    videoAdd.innerHTML = `<div class =" min-h-[300px] flex flex-col gap-5 justify-center items-center">
    <img src="./assets/icon.png" >
    <h2 class ="font-bold text-xl text-center">No content here</h2>
    </div>`;
  } else {
    videoAdd.classList.add("grid");
  }
  // no video finish here
  for (const video of videos) {
    // console.log(video);
    const add = document.createElement("div");
    add.innerHTML = `
<div class="flex flex-col gap-2">
            <figure class ="h-[200px] relative">
        <img
          src="${video.thumbnail}"class ="object-cover h-full w-full pb-2"
          alt="" />
          ${
            video.others.posted_date?.length == 0
              ? ""
              : `<span class ="absolute text-xs right-1 bottom-3 bg-black rounded-sm text-white">${getTime(
                  video.others.posted_date
                )}</span>`
          }     
      </figure>
<div class =" flex gap-2 justify-start ">
<img class="rounded-full object-cover w-10 h-10" src ="${
      video.authors[0].profile_picture
    }  alt ="" />
      <div class="card-body p-0">
        <h2 class="card-title font-bold">${video.title}</h2>
        <div class="flex justify-evenly  items-center gap-2"
         <p class = "text-gray-400">${video.authors[0].profile_name}</p>
         ${
           video.authors[0].verified === true
             ? `<img class ="w-6" src ="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>`
             : ""
         } 
</div>
    <p>views : ${video.others.views}</p>
    </div>
    </div>
    </div>
      `;
    videoAdd.append(add);
  }
}
videosAddHere();

// pop up section :
// const fetchVideoByCatagory = (event, id) => {
//   console.log(event.target);
//   event.target.classList.add("bg-red-400");

//   fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
//     .then((res) => res.json())
//     .then((data) => printVideo(data.category));
// };

// const btnStyle = () => {
//   const activeBtns = document.getElementsByClassName("activeBtn");
//   for (const btn of activeBtns) {
//     btn.classList.remove("bg-redd-500");
//   }
// };
