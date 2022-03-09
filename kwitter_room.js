function leave() {
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(death) {
            deathkey = death.key;
            Room_names = deathkey;

        });
    });
}
getData();

function leave() {
    window.location = "index.html";
}