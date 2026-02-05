function chamarWhats(produto) {
  const numero = "+55 21 99852-2302"; // coloque seu número com DDD

  const mensagem =
    "Olá! 👋 Vim pelo site *Cadeiras do Índio*.\n\n" +
    "Tenho interesse em *" + produto + "*.\n\n" +
    "Pode me passar mais detalhes, prazo de produção e formas de pagamento?";

  const link =
    "https://wa.me/qr/SUATKCB6RFNZJ1" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(link, "_blank");
}

