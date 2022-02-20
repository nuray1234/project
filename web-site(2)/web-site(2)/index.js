$(function() {
    $("#ord").on("click", function() {
        let res = confirm("Do you really want to order?");
        if (res==true){
            alert("Congratulations, you have made an order!");
        }
    });
});

var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  $(function() {
     $("#al").mouseover(function() {
         $("#al").css({"font-size": "1.3rem", "color" : "#EDFFA9"});
    });
});


$(function() {
    $("#ret").click(function() {
        $(".ab").slideToggle(1000);
        $("#about").fadeToggle(500);
    });
});

$(function() {
    $("#inputName4").keyup(function() {
        alert("Happy shopping!");
    });
});

let audio = new Audio('Sound/aud.mp3');
document.querySelector("#main").addEventListener("click", function() {
    return audio.paused ? audio.play() : audio.pause();
});

$("#submit").on("click", function() {
    let account = {
        login: $("#login").val(),
        password: $("#pass").val()
    };
    var user = account.login;
    var key = account.password;
    confirm("Do you want to create an account " + user + " with password " + key + "?");
});





