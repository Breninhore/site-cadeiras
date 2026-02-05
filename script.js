function chamarWhats(produto) {
  const numero = "5521991697363"; // DDI + DDD + número (sem espaço)

  const mensagem =
    "Olá! 👋 Vim pelo site *Cadeiras do Índio*.\n\n" +
    "Tenho interesse em *" + produto + "*.\n\n" +
    "Pode me passar mais detalhes, prazo de produção e formas de pagamento?";

  const link =
    "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(link, "_blank");
}
