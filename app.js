let apiKey = `5cef449324d17dcbde1ac3c108b1e8ce`;

let loadApi = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data));
};

let showData = (total) => {
  console.log(total);
  let temp = document.getElementById("temp");

  temp.innerText = total.main.temp;

  document.getElementById("btn").addEventListener("click", function () {
    let searchBnt = document.getElementById("input").value;

    let cityName = (document.getElementById("name").innerText = searchBnt);

    loadApi(cityName);
  });
};

loadApi("dhaka");
