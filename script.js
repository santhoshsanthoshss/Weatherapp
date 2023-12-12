// let body = document.body;

async function getUserData() {
  console.log(city);
  try {
    let city = document.getElementById("city").value;
    let weather_info = document.getElementById("weather_info");

    let user = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1f63e4deecd9d1807eca019a6d04ffc`
    );
    // console.log(user);
    user = await user.json();

    if (user.name === undefined) {
      weather_info.innerHTML = `<h1 class="weather_info notfound"> ${city} Not Found!!!</h1>`;
      return false;
    }
    console.log(user);
    //& or destrucing
    let {
      weather: [k],
      main: { temp },
      sys: { country },
      name,
    } = user;
    let { main, description, icon } = k;

    weather_info.innerHTML = `
    <div class="weather_info">
    <img src=" https://openweathermap.org/img/wn/${icon}@2x.png" class="iconsweather">
     <p class="fullsize">${"City :" + name}</p>
     <p class="fullsize">${"Country :" + country}</p>
     <p class="fullsize">${"Temperature :" + temp}</p>
     <p class="fullsize">${"Climate :" + main}</p>
  
    

    </div>

    `;
  } catch (err) {
    console.log(err);
  }
}

// function update() {
//   setInterval(getUserData, 2000);
// }

// s(getUserData, 2000);

/* 

*/
