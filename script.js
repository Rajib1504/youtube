console.log("add");
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
