class Costumizar extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "ErrorNoticia";
  }
}