class Noticia {
  constructor(title, publishedAt, description, author, url) {
    this._titulo = title;
    this._dataDePublicacao = publishedAt;
    this._resumo = description;
    this._autorDaNoticia = author;
    this._linkDaNoticia = url;
  }

  get mostrarNoticia() {
    try {
      return this.tela();
    } catch (erro) {
      return erro.message;
    } finally {
      console.log("Noticia mostrada com sucesso!!");
    }

  }

  tela() {
    if (this._titulo) {
      return "<div class='col-12 p-3'>" + "<div class='card' id='cards'>" + "<div class='card-body'>" + "<h2 class='card-title'>" + "<a href='" + this._linkDaNoticia + "'>" + this._titulo + "</a>" + "</h2>" + "<h6 class='card-subtitle mb-2 text-muted'>" + this._dataDePublicacao + "</h6>" + "<h6 class='card-subtitle mb-2 text-muted'>" + this._autorDaNoticia + "</h6>" + "<p class='card-text'>" + this._resumo + "</p>" + "</div> </div> </div>"

    } else {
      throw new Costumizar("A noticia deve ter um titulo");
    }
  }
}