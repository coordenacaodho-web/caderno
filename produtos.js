// Catálogo de produtos de marca exclusiva.
// Para incluir um produto: copie o bloco do Alivtoss, troque os dados,
// coloque a foto em img/ e o caderno em pdf/.
window.PRODUTOS = [
  {
    id: "alivtoss",
    nome: "Alivtoss",
    industria: "Apisnutri",
    tipo: "Suplemento alimentar em xarope",
    apresentacao: "Vidro 150 ml",
    idadeMinima: 8,
    publico: "A partir de 8 anos",
    foto: "img/alivtoss.jpg",
    pdf: "pdf/alivtoss.pdf",
    resumo: "Xarope com agrião, poejo, eucalipto, alho, menta e gengibre para imunidade e alívio da tosse.",
    posicionamento: "Alternativa natural para quem quer aliviar a tosse e fortalecer a imunidade na gripe e no resfriado.",
    contraindicacoes: [
      "Crianças menores de 8 anos",
      "Gestantes e lactantes",
      "Alergia a qualquer componente",
      "Uso de anticoagulantes"
    ],
    contraindicacoesConfirmadas: false,
    sintomas: [
      "Tosse com catarro",
      "Gripe e resfriado",
      "Garganta irritada",
      "Nariz congestionado",
      "Imunidade baixa",
      "Dorme mal pela tosse"
    ],
    // termos extras que o colaborador pode digitar na busca por sintoma
    palavrasChave: [
      "tosse", "tosse produtiva", "catarro", "secrecao", "expectorante", "muco",
      "gripe", "gripado", "resfriado", "resfriada", "garganta", "dor de garganta",
      "faringite", "amigdalite", "nariz entupido", "congestao", "congestionado",
      "imunidade", "baixa imunidade", "sono", "insonia", "respiracao", "falta de ar",
      "bronquite", "asma", "ronco", "infeccao"
    ],
    beneficiosCliente: [
      "Fortalece o sistema imunológico",
      "Combate bactérias, alivia a tosse e é expectorante",
      "Melhora a noite de sono",
      "Respiração mais tranquila",
      "Ação antifúngica"
    ],
    vendaAdicional: [
      "Descongestionante nasal Bem Care",
      "Antigripal em comprimido",
      "Vitamina C",
      "Vita Clinical Imunno"
    ],
    concorrentes: ["Melagrião", "Propoimune", "Proposep"],
    abordagem: "Para essa tosse, tenho um xarope natural com agrião, eucalipto, alho e gengibre. Ele ajuda a soltar o catarro, acalma a garganta e ainda reforça a imunidade. Quer levar junto uma vitamina C para acelerar a recuperação?"
  }
];
