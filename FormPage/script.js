$(document).ready(function () {
  $("#botaoCadastrar").click((event) => {
    event.preventDefault();
    const data = {
      userId: 1,
      id: 1,
      title: $("#title").val(),
      body: $("#body").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify(data),
      contentType: "application/json",

      success: () => {
        $("#responseArea").text(
          `O livro "${$("#title").val()}" foi cadastrado com sucesso!`
        );
        $("#responseArea").css({ color: "green" });
        $("#title").val("");
        $("#body").val("");
      },

      error: () => {
        $("#responseArea").text(
          `Ops! Tivemos um problema do nosso lado ao tentar cadastrar o livro "${$(
            "#title"
          ).val()}", tente novamente mais tarde.`
        );
        $("#responseArea").css({ color: "red" });
      },
    });
  });
});
