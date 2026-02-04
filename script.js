function chamarWhats(produto) {
  const numero = "5599999999999"; // troque pelo seu número
  const mensagem = "Olá! Vi no site e tenho interesse em: " + produto;

  const link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(link, "_blank");
}

