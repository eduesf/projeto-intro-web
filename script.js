// SEMANA 1 - OK
// SEMANA 2 - OK
// SEMANA 3 - OK
// SEMANA 4 - OK
// SEMANA 5 - OK
// SEMANA 6 - OK
// SEMANA 7 - OK
// SEMANA 8 - OK
// SEMANA 9 - OK
// SEMANA 10 - OK
// SEMANA 11 - OK
// SEMANA 12 - OK

// Objetos Séries (itens)
// Objeto 1
const serie1 = {
  titulo: "Game Of Thrones",
  ondeAssistir: "HBO Max",
  lancamento: 2011,
  temporadas: 8,
  // episodios: 73,
  // remake: false,
  sucesso: true,
  avaliacaoIMDB: 9.2,
  genero: ["Ação", " Aventura", " Drama"],
  elenco: [
    "Emilia Clarke",
    " Kit Harington",
    " Peter Dinklage",
    " Lena Headey",
    " Sophie Turner",
  ],
  criacao: "David Benioff, D.B. Weiss",
  sinopse:
    "Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.",
  imagem: "/Imagens Séries/game of thrones_capa.jpg",
  linkTitulo: "https://www.imdb.com/title/tt0944947/?ref_=nv_sr_srsg_1",
};

// Objeto 2
const serie2 = {
  titulo: "Friends",
  ondeAssistir: "HBO Max",
  lancamento: 1994,
  temporadas: 10,
  // episodios: 235,
  // remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.9,
  genero: ["Comédia", " Romance"],
  elenco: [
    "Jennifer Aniston",
    " Courteney Cox",
    " Lisa Kudrow",
    " Matt LeBlanc",
    " Matthew Perry",
    " David Schwimmer",
  ],
  criacao: "David Crane, Marta Kauffman",
  sinopse:
    "Relata a vida pessoal de seis amigos em seus 30's na cidade de Manhattan.",
  imagem: "/Imagens Séries/friends_capa.jpg",
  linkTitulo: "https://www.imdb.com/title/tt0108778/?ref_=nv_sr_srsg_0",
};

// Objeto 3
const serie3 = {
  titulo: "The Walking Dead",
  ondeAssistir: "Netflix",
  lancamento: 2010,
  temporadas: 11,
  // episodios: 177,
  // remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.2,
  genero: ["Drama", " Terror", " Suspense"],
  elenco: [
    "Andrew Lincoln",
    " Norman Reedus",
    " Melissa McBride",
    " Lauren Cohan",
    " Danai Gurira",
    " Jeffrey Dean Morgan",
  ],
  criacao: "Frank Darabont",
  sinopse:
    "Um Xerife acorda de um coma para dar-se conta que o mundo está em ruínas, e deve liderar um grupo de sobreviventes para se manter vivo.",
  imagem: "/Imagens Séries/the walking dead_capa.jpg",
  linkTitulo: "https://www.imdb.com/title/tt1520211/?ref_=nv_sr_srsg_0",
};

// Objeto 4
const serie4 = {
  titulo: "Stranger Things",
  ondeAssistir: "Netflix",
  lancamento: 2016,
  temporadas: 4,
  // episodios: 35,
  // remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.7,
  genero: ["Drama", " Fantasia", " Terror"],
  elenco: [
    "Millie Bobby Brown",
    " Finn Wolfhard",
    " Winona Ryder",
    " David Harbour",
    " Natalia Dyer",
    " Charlie Heaton",
  ],
  criacao: "Matt Duffer, Ross Duffer",
  sinopse:
    "Depois do desaparecimento de um menino, sua mãe, um chefe de polícia e seus amigos precisam enfrentar forças aterrorizantes para trazê-lo de volta.",
  imagem: "/Imagens Séries/stranger things_capa.jpg",
  linkTitulo: "https://www.imdb.com/title/tt4574334/?ref_=nv_sr_srsg_0",
};

// Objeto 5
const serie5 = {
  titulo: "Sob Pressão",
  ondeAssistir: "Globoplay",
  lancamento: 2017,
  temporadas: 5,
  // episodios: 63,
  // remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.6,
  genero: ["Drama", " Suspense"],
  elenco: [
    "Júlio Andrade",
    " Marjorie Estiano",
    " Bruno Garcia",
    " Pablo Sanábio",
    " Julia Shimura",
  ],
  criacao: "Jorge Furtado, Renato Fagundes, Luiz Noronha",
  sinopse:
    "Uma série que mostra os dramas entre os médicos e pacientes num hospital do Rio de Janeiro.",
  imagem: "/Imagens Séries/sob pressao_capa.jpg",
  linkTitulo: "https://www.imdb.com/title/tt7216954/?ref_=nv_sr_srsg_0",
};

// Objeto 6
const serie6 = {
  titulo: "Desalma",
  ondeAssistir: "Globoplay",
  lancamento: 2020,
  temporadas: 2,
  // episodios: 20,
  // remake: false,
  sucesso: true,
  avaliacaoIMDB: 7.2,
  genero: ["Drama", " Fantasia", " Mistério"],
  elenco: [
    "Cássia Kis",
    " Cláudia Abreu",
    " Maria Ribeiro",
    " Anna Melo",
    " Camila Botelho",
  ],
  criacao: "Ana Paula Maia",
  sinopse:
    "Após o suicídio de seu marido, uma mulher e suas filhas se mudam para Brigida, uma pequena vila que está prestes a recuperar os festivais pagãos de Ivana Kupala, que foram proibidos 30 anos antes.",
  imagem: "/Imagens Séries/desalma_capa.png",
  linkTitulo: "https://www.imdb.com/title/tt10839738/?ref_=nv_sr_srsg_1",
};

// Média das Temporadas (num)
somaTemporadas =
  serie1.temporadas +
  serie2.temporadas +
  serie3.temporadas +
  serie4.temporadas +
  serie5.temporadas +
  serie6.temporadas;
mediaTemporadas = somaTemporadas / 6;
console.log(`A média de Temporadas entre as séries é: ${mediaTemporadas}`);

// Média dos Episódios (num)
somaEps =
  serie1.episodios +
  serie2.episodios +
  serie3.episodios +
  serie4.episodios +
  serie5.episodios +
  serie6.episodios;
mediaEps = somaEps / 6;
console.log(`A média de Episódios entre as séries é: ${mediaEps}`);

// Média da Avaliação do IMDb (num)
somaAvaliacao =
  serie1.avaliacaoIMDB +
  serie2.avaliacaoIMDB +
  serie3.avaliacaoIMDB +
  serie4.avaliacaoIMDB +
  serie5.avaliacaoIMDB +
  serie6.avaliacaoIMDB;
mediaAvaliacao = somaAvaliacao / 6;
console.log(`A média da Avaliação IMDb entre as séries é: ${mediaAvaliacao}`);

// Verificando se são Remake (Booleano)
verificaRemake =
  serie1.remake &&
  serie2.remake &&
  serie3.remake &&
  serie4.remake &&
  serie5.remake &&
  serie6.remake;
console.log(`As séries são um remake? ${verificaRemake}`);

// Verificando se são um sucesso (Booleano)
verificaSucesso =
  serie1.sucesso &&
  serie2.sucesso &&
  serie3.sucesso &&
  serie4.sucesso &&
  serie5.sucesso &&
  serie6.sucesso;
console.log(`As séries são um sucesso? ${verificaSucesso}`);

// // Imprimindo os dados de cada série (Relatório)
// console.log (serie1.titulo.toUpperCase(),serie1.ondeAssistir, serie1.lancamento, serie1.temporadas, serie1.episodios, serie1.remake, serie1.sucesso, serie1.avaliacaoIMDB, serie1.genero, serie1.elenco, serie1.criacao, serie1.sinopse)
// console.log (serie2.titulo.toUpperCase(),serie2.ondeAssistir, serie2.lancamento, serie2.temporadas, serie2.episodios, serie2.remake, serie2.sucesso, serie2.avaliacaoIMDB, serie2.genero, serie2.elenco, serie2.criacao, serie2.sinopse)
// console.log (serie3.titulo.toUpperCase(),serie3.ondeAssistir, serie3.lancamento, serie3.temporadas, serie3.episodios, serie3.remake, serie3.sucesso, serie3.avaliacaoIMDB, serie3.genero, serie3.elenco, serie3.criacao, serie3.sinopse)
// console.log (serie4.titulo.toUpperCase(),serie4.ondeAssistir, serie4.lancamento, serie4.temporadas, serie4.episodios, serie4.remake, serie4.sucesso, serie4.avaliacaoIMDB, serie4.genero, serie4.elenco, serie4.criacao, serie4.sinopse)

// Meu Array de Objetos
const arrayMinhasSeries = [];

// SEMANA 4
// Condicional para adicionar as séries no array de Objetos

// Condicional 1
if (serie1.sucesso) {
  arrayMinhasSeries.push(serie1);
} else {
  alert(`A série ${serie1.titulo}, não pode ser adicionada`);
}

// Condicional 2
if (serie2.sucesso) {
  arrayMinhasSeries.push(serie2);
} else {
  alert(`A série ${serie2.titulo}, não pode ser adicionada`);
}

// Condicional 3
if (serie3.sucesso) {
  arrayMinhasSeries.push(serie3);
} else {
  alert(`A série ${serie3.titulo}, não pode ser adicionada`);
}

// Condicional 4
if (serie4.sucesso) {
  arrayMinhasSeries.push(serie4);
} else {
  alert(`A série ${serie4.titulo}, não pode ser adicionada`);
}

// Condicional 5
if (serie5.sucesso) {
  arrayMinhasSeries.push(serie5);
} else {
  alert(`A série ${serie5.titulo}, não pode ser adicionada`);
}

// Condicional 6
if (serie6.sucesso) {
  arrayMinhasSeries.push(serie6);
} else {
  alert(`A série ${serie6.titulo}, não pode ser adicionada`);
}

// SEMANA 5
// Mudando as Características das Propriedades de array para String por Laços
// Mudando o modo de criação do Relatório de console.log para Laços
for (let i = 0; i < arrayMinhasSeries.length; i++) {
  arrayMinhasSeries[i].titulo = arrayMinhasSeries[i].titulo.toUpperCase();

  for (j = 0; j < arrayMinhasSeries[i].genero.length; j++) {
    arrayMinhasSeries[i].genero += `${""}`;
  }

  for (k = 0; k < arrayMinhasSeries[i].elenco.length; k++) {
    arrayMinhasSeries[i].elenco += `${""}`;
  }
  console.log(arrayMinhasSeries[i]);
}

// SEMANA 6
// Função que recebe um Objeto e devolve esse Objeto em String
const objMinhaSerie = (obj) => {
  return obj;
};

// Função que recebe um array de Objeto e uma String, devolve o objeto com o titulo igual a String
const pesquisaObjNoArray = (arrayObj, string) => {
  const buscaSerie = arrayObj.filter((filtro, indice, array) => {
    return filtro.titulo === string.toUpperCase();
  });

  if (buscaSerie.length === 0) {
    alert("Série não está disponível em nosso catalogo");
  } else {
    for (i = 0; i < buscaSerie.length; i++) {
      let main = document.getElementById("main");
      let div1 = document.createElement("div");
      let section = document.createElement("section");
      let imagem = document.createElement("img");
      let div2 = document.createElement("div");
      let a = document.createElement("a");
      let h4 = document.createElement("h4");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let p5 = document.createElement("p");
      let p6 = document.createElement("p");
      let p7 = document.createElement("p");

      main.appendChild(div1);
      div1.appendChild(section);
      section.appendChild(imagem);
      section.appendChild(div2);
      div2.appendChild(h4);
      div2.appendChild(p1);
      div2.appendChild(p2);
      div2.appendChild(p3);
      div2.appendChild(p4);
      div2.appendChild(p5);
      div2.appendChild(p6);
      div2.appendChild(p7);

      div1.setAttribute("id", "series1");
      section.setAttribute("class", "serie");
      div2.setAttribute("class", "infos");
      imagem.src = buscaSerie[i].imagem;

      h4.appendChild(a);
      a.setAttribute("href", arrayMinhasSeries[i].linkTitulo);
      a.setAttribute("target", "_blank");
      a.innerHTML = buscaSerie[i].titulo.toUpperCase();
      p1.innerHTML = `Onde Assitir: ${buscaSerie[i].ondeAssistir}`;
      p2.innerHTML = `Lançamento: ${buscaSerie[i].lancamento}`;
      p3.innerHTML = `Temporadas: ${buscaSerie[i].temporadas}`;
      p4.innerHTML = `Avaliacao IMDb: ${buscaSerie[i].avaliacaoIMDB}`;
      p5.innerHTML = `Genero: ${buscaSerie[i].genero}`;
      p6.innerHTML = `Elenco: ${buscaSerie[i].elenco}`;
      p7.innerHTML = `Sinopse: ${buscaSerie[i].sinopse}`;
    }
  }
};

// SEMANA 11
// Criando as informações das séries manipulando o DOM
for (i in arrayMinhasSeries) {
  let div1 = document.getElementById("series1");
  let section = document.createElement("section");
  let imagem = document.createElement("img");
  let div2 = document.createElement("div");
  let a = document.createElement("a");
  let h4 = document.createElement("h4");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let p7 = document.createElement("p");

  div1.appendChild(section);
  section.appendChild(imagem);
  section.appendChild(div2);
  div2.appendChild(h4);
  div2.appendChild(p1);
  div2.appendChild(p2);
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  div2.appendChild(p6);
  div2.appendChild(p7);

  section.setAttribute("class", "serie");
  div2.setAttribute("class", "infos");
  imagem.src = arrayMinhasSeries[i].imagem;

  h4.appendChild(a);
  a.setAttribute("href", arrayMinhasSeries[i].linkTitulo);
  a.setAttribute("target", "_blank");
  a.innerHTML = arrayMinhasSeries[i].titulo.toUpperCase();
  p1.innerHTML = `Onde Assitir: ${arrayMinhasSeries[i].ondeAssistir}`;
  p2.innerHTML = `Lançamento: ${arrayMinhasSeries[i].lancamento}`;
  p3.innerHTML = `Temporadas: ${arrayMinhasSeries[i].temporadas}`;
  p4.innerHTML = `Avaliacao IMDb: ${arrayMinhasSeries[i].avaliacaoIMDB}`;
  p5.innerHTML = `Genero: ${arrayMinhasSeries[i].genero}`;
  p6.innerHTML = `Elenco: ${arrayMinhasSeries[i].elenco}`;
  p7.innerHTML = `Sinopse: ${arrayMinhasSeries[i].sinopse}`;
}

// SEMANA 12
// FUNCIONANDO A FUNÇÃO DE BUSCA

function lidarBotao(event) {
  event.preventDefault();
  let input = document.getElementById("input").value.toUpperCase();
  if (input === "") {
    alert("Insira o título da série !");
  } else {
    document.getElementById("series1").remove();
    pesquisaObjNoArray(arrayMinhasSeries, input);
  }
}
