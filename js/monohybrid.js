document.addEventListener("DOMContentLoaded",() => {

    var parent1 = "";
    var parent2 = "";

    const parent1input = document.getElementById("parent1");
    const parent2input = document.getElementById("parent2");

    parent1input.addEventListener("input", () => {
        if (parent1input.value.length == 2) {
            parent1input.style.color = "white";

            if (
                parent1input.value.charAt(0).toLowerCase() == parent1input.value.charAt(1).toLowerCase()
            ) {
                parent1input.style.color = "white";
                parent1 = parent1input.value;
                compileTable();
            } else {
                parent1input.style.color = "red";
            }
        } else {
            parent1input.style.color = "red";
        }
    });

    parent2input.addEventListener("input", () => {
        if (parent2input.value.length == 2) {
            parent2input.style.color = "white";

            if (
                parent2input.value.charAt(0).toLowerCase() == parent2input.value.charAt(1).toLowerCase()
            ) {
                parent2input.style.color = "white";
                parent2 = parent2input.value;
                compileTable();
            } else {
                parent2input.style.color = "red";
            }
        } else {
            parent2input.style.color = "red";
        }
    });

    function compileTable() {
        document.getElementById("top-1").textContent = parent1.charAt(0)
        document.getElementById("top-2").textContent = parent1.charAt(1)

        document.getElementById("side-1").textContent = parent2.charAt(0)
        document.getElementById("side-2").textContent = parent2.charAt(1)

        if (parent1 === "") {
            return;
        }

        if (parent2 === "") {
            return;
        }

        function combineAndSort(letter1, letter2) {
            const combined = letter1 + letter2;
            return combined.split('').sort().join('');
        }
        const top1 = document.getElementById("top-1").textContent;
        const top2 = document.getElementById("top-2").textContent;
        const side1 = document.getElementById("side-1").textContent;
        const side2 = document.getElementById("side-2").textContent;

        document.getElementById("main-1").textContent = combineAndSort(top1, side1);
        document.getElementById("main-2").textContent = combineAndSort(top2, side1);
        document.getElementById("main-3").textContent = combineAndSort(top1, side2);
        document.getElementById("main-4").textContent = combineAndSort(top2, side2);
    }
});