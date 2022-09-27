function showDiv() {
  let nome = $("#fname").val();
  let sobreNome = $("#lname").val();
  let sexo = $('input[name="esc_sexo"]:checked').val();
  let idade = $("#age").val();
  let titulo = $("#titulo").val();
  let msg = $("#mensagem").val();
  let layout = $('input[name="esc_estilo"]:checked').val();

  if (sexo === "Masculino") {
    document.getElementById("lgtemp").innerHTML =
      "Prezado Senhor," + "  " + nome + " " + sobreNome;
    document.getElementById("sexotemp").innerText = "Sexo:" + sexo;
    document.getElementById("idadetemp").innerText = "Idade:" + idade;
    document.getElementById("titulotemp").innerText = "Titulo:" + titulo;
    document.getElementById("message").innerText = msg;
  } else {
    document.getElementById("lgtemp").innerHTML =
      "Prezada Senhora," + " " + nome + " " + sobreNome;
    document.getElementById("sexotemp").innerText = "Sexo:" + sexo;
    document.getElementById("idadetemp").innerText = "Idade:" + idade;
    document.getElementById("titulotemp").innerText = "Titulo:" + titulo;
    document.getElementById("message").innerText = msg;
  }

  switch (layout) {
    case "BGOne":
      document.getElementById("cardInfo").style.display = "block";
      document.getElementById("template").style.display = "block";
      $("#cardInfo").css("background-image", "url('/img/bg1card.png')");
      break;
    case "BGTwo":
      document.getElementById("cardInfo").style.display = "block";
      document.getElementById("template").style.display = "block";
      $("#cardInfo").css("background-image", "url('/img/bg2card.png')");
      break;

    case "BGThree":
      document.getElementById("cardInfo").style.display = "block";
      document.getElementById("template").style.display = "block";
      $("#cardInfo").css("background-image", "url('/img/bg3card.png')");
      break;
    case "BGFour":
      document.getElementById("cardInfo").style.display = "block";
      document.getElementById("template").style.display = "block";
      $("#cardInfo").css("background-image", "url('/img/bg4card.png')");
      break;
  }
}
