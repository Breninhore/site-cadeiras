function chamarWhats(produto) {
  const numero = "55 21 99169-7363"; // coloque seu número com DDD

  const mensagem =
    "Olá! 👋 Vim pelo site *Cadeiras do Índio*.\n\n" +
    "Tenho interesse em *" + produto + "*.\n\n" +
    "Pode me passar mais detalhes, prazo de produção e formas de pagamento?";

  const link =
    "https://wa.me/55 21 99169-7363" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(link, "_blank");
}



