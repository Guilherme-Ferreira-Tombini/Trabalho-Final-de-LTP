var requestURL='https://www.luizpicolo.com.br/api.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;
  
  response.articles.forEach(response => {
    let titulo = response.title;
     let dataDePublicacao = response.publishedAt;
    let resumo = response.description;
    let autorDaNoticia = response.author;
    let imagem = response.urlToImage;
    
  let objeto = new NoticiaDestaque(imagem, title, publishedAt, description, author);

  let noticias = document.getElementById("noticias");
  noticias.insertAdjacentHTML('afterbegin', '<div id="test">' + objeto.mostrarDestaque + '<div>');
  })
}