function pok() {

    var url = "https://pokeapi.co/api/v2/pokemon?limit=";
    var n = 0;

    n = Number(document.getElementById("n").value);


    fetch(url + n)
        .then(function (response) {
            var a = response.json()
            console.log(a);
            console.log(url + n);
        })
        
}