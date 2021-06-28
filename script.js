var requestURL='https://www.luizpicolo.com.br/api.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;
  
  response.forEach(response => {
    let titulo = response.articles.title;
    let dataDePublicacao = response.articles.publishedAt;
    let resumo = response.articles.description;
    let autorDaNoticia = response.articles.author;
    let imagem = response.imagem;
    
    let objeto = new NoticiaDestaque(imagem, title, publishedAt, description, author);

    let noticias = document.getElementById("noticias");
    noticias.insertAdjacentHTML('afterbegin', '<div id="test">' + objeto.mostrarDestaque + '<div>');
  })
}