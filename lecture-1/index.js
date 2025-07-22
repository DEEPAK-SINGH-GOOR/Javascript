<!DOCTYPE html>
<html>
<head>
  <title>Head Tail Task</title>
</head>
<body>

  <button onclick="addValue('H')">H</button>
  <button onclick="addValue('T')">T</button>

  <div id="container"></div>

  <script>
    let last = "";
    let currentRow = null;

    function addValue(val) {
      if (val !== last) {
        // Create new row if different
        currentRow = document.createElement("div");
        currentRow.style.display = "flex";
        currentRow.style.margin = "5px";
        document.getElementById("container").appendChild(currentRow);
      }

      let box = document.createElement("div");
      box.innerText = val;
      box.style.border = "1px solid black";
      box.style.padding = "10px";
      box.style.marginRight = "5px";
      currentRow.appendChild(box);

      last = val;
    } 
  </script>

</body>
</html>
