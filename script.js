function getInputValue() {
    var liczba = document.getElementById("myInput").value;
    var ekran = document.getElementById("ope");

    ekran.innerHTML = (liczba * liczba);
}
