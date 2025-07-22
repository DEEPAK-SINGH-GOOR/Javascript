<!DOCTYPE html>
<html>
<head>
  <title>Head Tail Column Task</title>
</head>
<body>

  <button onclick="addValue('H')">H</button>
  <button onclick="addValue('T')">T</button>

  <div id="container" style="display: flex;"></div>

  <script>
    let last = "";
    let currentColumn = null;

    function addValue(val) {
      if (val !== last) {
        // Create new column if value changed
        currentColumn = document.createElement("div");
        currentColumn.style.marginRight = "10px";
        document.getElementById("container").appendChild(currentColumn);
      }

      let box = document.createElement("div");
      box.innerText = val;
      box.style.border = "1px solid black";
      box.style.padding = "10px";
      box.style.marginBottom = "5px";
      currentColumn.appendChild(box);

      last = val;
    }
  </script>

</body>
</html>
