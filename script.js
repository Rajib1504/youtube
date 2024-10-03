function getTime(time) {
  let hour = parseInt(time / 3600);
  let remainingsec = time % 3600;
  //   console.log(remainingsec);
  let min = parseInt(remainingsec / 60);
  remainingsec = remainingsec % 60;
  return `${hour}hour ${min} min ${remainingsec} sec ago`;
}
// button section:
function getData() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => display(data.categories));
  function display(data) {
    for (const value of data) {
      // console.log(value);
      const btn = document.createElement("button");
      btn.classList = "btn border-2 border-red-600";
      btn.innerText = value.category;
      const catagory = document.getElementById("catagory");
      catagory.append(btn);
    }
  }
}
getData();

// video section:
const videosAddHere = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => printVideo(data.videos));

  function printVideo(videos) {
    const videoAdd = document.getElementById("video");
    for (const video of videos) {
      console.log(video);
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
};
videosAddHere();
