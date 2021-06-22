class Noticia {
  constructor(titulo, dataDePublicacao, resumo, textoDaNoticia, autorDaNoticia) {
    this._titulo = titulo;
    this._dataDePublicacao = dataDePublicacao;
    this._resumo = resumo;
    this._textoDaNoticia = textoDaNoticia;
    this._autorDaNoticia = autorDaNoticia;
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
      return  "<h1>" + this._titulo + "</h1>" +"<h3>" +"Data de Publicação: "+ this._dataDePublicacao + "</h3>" +"<h3>" + "Autor: " + this._autorDaNoticia + "</h3>" +"<p>" + this._resumo + "</p>"+ "<p>" + this._textoDaNoticia + "</p>";
     
    } else {
      throw new Costumizar("A noticia deve ter um titulo");
    }
  }
}



