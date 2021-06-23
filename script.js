var requestURL = ' https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5f87f1252f2849f0a6a5cf075386f341';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;

  response.forEach(response => {
    let titulo = response.title;
    let dataDePublicacao = response.publishedAt;
    let resumo = response.description;
    let autorDaNoticia = response.author;
    let imagem = response.imagem;

    let objeto = new NoticiaDestaque(imagem, title, publishedAt, description, author);

    let noticias = document.getElementById("noticias");
    noticias.insertAdjacentHTML('afterbegin', '<div id="test">' + objeto.mostrarDestaque + '<div>');
  })
}