class Noticia {
  constructor(title, publishedAt, description, author) {
    this._titulo = title;
    this._dataDePublicacao = publishedAt;
    this._resumo = description;
    this._autorDaNoticia = author;
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
      return  "<h1>" + this._title + "</h1>" +"<h3>" +"Data de Publicação: "+ this._dataDePublicacao + "</h3>" +"<h3>" + "Autor: " + this._autorDaNoticia + "</h3>" +"<p>" + this._resumo + "</p>";
     
    } else {
      throw new Costumizar("A noticia deve ter um titulo");
    }
  }
}



