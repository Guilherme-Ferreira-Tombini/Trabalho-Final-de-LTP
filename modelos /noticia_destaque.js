class NoticiaDestaque extends Noticia {
  constructor(imagem, titulo, dataDePublicacao, autorDaNoticia, resumo, textoDaNoticia) {
    super(titulo, dataDePublicacao, resumo, textoDaNoticia, autorDaNoticia);
    this._imagemDestaque = imagem;

  }
  get mostrarDestaque() {
    try{
    return this.destaque();
    }catch(erro){
      return erro.message;
    }finally{
      console.log("Noticia mostrada com sucesso!!");
    }
  }

  destaque() {
    if (this._imagemDestaque){
    return '<img src="'+this._imagemDestaque+ '">' + "<br>" + this.tela()
    }else{
      throw new Costumizar("Para a noticia aparecer, deve haver a imagem da noticia");
    }
  }

}


