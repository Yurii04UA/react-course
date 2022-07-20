
const Fetch = (city) => {
  const request = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3a14ed878c17ea88667c02de9b9be534`
    )
      .then((res) => res.json())
   return request
}

export default Fetch