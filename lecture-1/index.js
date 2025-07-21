<button onclick="headClick()">H</button>
<button onclick="tailClick()">T</button>

<div id="flex"></div>

<script>
    function headClick() {
        let row = document.createElement("div");
        row.style.display = "flex";

        let h = document.createElement("p");
        h.innerText = "H";

        let t = document.createElement("p");
        t.innerText = "";

        row.append(h, t);
        document.getElementById("flex").append(row);
    }

    function tailClick() {
        let row = document.createElement("div");
        row.style.display = "flex";

        let h = document.createElement("p");
        h.innerText = "";

        let t = document.createElement("p");
        t.innerText = "T";

        row.append(h, t);
        document.getElementById("flex").append(row);
    }
</script>
