var requestURL = 'https://www.luizpicolo.com.br/api.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;

  // Noticia Destaque
  let titulo_0 = response.articles[0].title;
  let dataDePublicacao_0 = response.articles[0].publishedAt;
  let resumo_0 = response.articles[0].description;
  let autorDaNoticia_0 = response.articles[0].author;
  let imagem_0 = response.articles[0].urlToImage;
  let link_0 = response.articles[0].url;

  let objeto_destaque = new NoticiaDestaque(imagem_0, titulo_0, dataDePublicacao_0, resumo_0, autorDaNoticia_0, link_0);

  let noticia1 = document.getElementById("Imagem");
  noticia1.insertAdjacentHTML('afterbegin', '<div>' + objeto_destaque.mostrarDestaque + '</div>');

  response.articles.forEach(response => {
    let titulo = response.title;
    let dataDePublicacao = response.publishedAt;
    let resumo = response.description;
    let autorDaNoticia = response.author;
    let imagem = response.urlToImage;
    let link = response.url;

    let objeto = new Noticia(titulo, dataDePublicacao, resumo, autorDaNoticia, link);

    let noticias = document.getElementById("noticias");
    noticias.insertAdjacentHTML('afterbegin', '<div id="test">' + objeto.mostrarNoticia + '<div>');

  })
}