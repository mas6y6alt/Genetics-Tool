document.addEventListener("DOMContentLoaded",() => {

    var parent1 = "GgBb";
    var parent2 = "GgBb";

    const parent1input = document.getElementById("parent1");
    const parent2input = document.getElementById("parent2");

    function combineAndSort(letter1, letter2) {
        const combined = letter1 + letter2;
        return combined.split('').sort().join('');
    }
    
});

function compileFOILTabs() {
    document.getElementById("top-1").value = combineAndSort(parent1.charAt(0) + parent1.charAt(2));
    document.getElementById("top-2").value = combineAndSort(parent1.charAt(0) + parent1.charAt(3));
    document.getElementById("top-3").value = combineAndSort(parent1.charAt(1) + parent1.charAt(2));
    document.getElementById("top-4").value = combineAndSort(parent1.charAt(1) + parent1.charAt(3));
}