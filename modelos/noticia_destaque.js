class NoticiaDestaque extends Noticia {
  constructor(urlToImage, title, publishedAt, description, author, url) {
    super(title, publishedAt, description, author, url);
    this._imagemDestaque = urlToImage;

  }
  get mostrarDestaque() {
    try {
      return this.destaque();
    } catch (erro) {
      return erro.message;
    } finally {
      console.log("Noticia mostrada com sucesso!!");
    }
  }

  destaque() {
    if (this._imagemDestaque) {
      return '<div class="col-12" id="card-imagem">'+ '<div class="card h-100 bg-warning">'+ '<img src="' + this._imagemDestaque + '" class="card-img-top">'+ '<div class="card-body">'+'<p class="card-text">'+"<h2 class='card-title'>" + "<a href='" + this._linkDaNoticia + "'>" + this._titulo + "</a>" + "</h2>" + "<h6 class='card-subtitle mb-2 text-muted'>" + this._dataDePublicacao + "</h6>" + "<h6 class='card-subtitle mb-2 text-muted'>" + this._autorDaNoticia + "</h6>" + "<p class='card-text'>" + this._resumo + "</p>" +'<p>'+'</div> </div> </div>';

    } else {
      throw new Costumizar("Para a noticia aparecer, deve haver a imagem da noticia");
    }
  }

}