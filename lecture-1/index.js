<!DOCTYPE html>
<html>
<head>
  <title>Dropdown Log Example</title>
</head>
<body>

  <label for="mySelect">Choose one:</label>
  <select id="mySelect">
    <option value="">-- Select Option --</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
  </select>

  <script>
    const dropdown = document.getElementById("mySelect");

    dropdown.addEventListener("change", function () {
      const selectedValue = dropdown.value;
      if (selectedValue) {
        console.log("You selected:", selectedValue);
      }
    });
  </script>

</body>
</html>
