<!DOCTYPE html>
<html>
<head>
  <title>Simple </title>
</head>
<body>

  <select id="country">
    <option>Select Country</option>
  </select>

  <select id="state">
    <option>Select State</option>
  </select>

  <select id="city">
    <option>Select City</option>
  </select>

  <script>
    async function setupDropdowns() {
      let res = await fetch("https://countriesnow.space/api/v0.1/countries/states");
      let json = await res.json();
      let data = json.data;

      let countrySelect = document.getElementById("country");
      let stateSelect = document.getElementById("state");
      let citySelect = document.getElementById("city");

      data.forEach(country => {
        let opt = document.createElement("option");
        opt.textContent = country.name;
        countrySelect.append(opt);
      });

      countrySelect.addEventListener("change", function () {
        stateSelect.innerHTML = "<option>Select State</option>";
        citySelect.innerHTML = "<option>Select City</option>";
        let selected = this.value;
        let found = data.find(c => c.name === selected);
        if (found) {
          found.states.forEach(state => {
            let opt = document.createElement("option");
            opt.textContent = state.name;
            stateSelect.append(opt);
          });
        }
      });

      stateSelect.addEventListener("change", async function () {
        citySelect.innerHTML = "<option>Select City</option>";
        let country = countrySelect.value;
        let state = stateSelect.value;

        let cityRes = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country, state })
        });

        let cityJson = await cityRes.json();
        cityJson.data.forEach(city => {
          let opt = document.createElement("option");
          opt.textContent = city;
          citySelect.append(opt);
        });
      });
    }

    setupDropdowns();
  </script>

</body>
</html>
