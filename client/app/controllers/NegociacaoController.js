class NegociacaoController {

  constructor() {
    /* 
      Precisamos usar o .bind pq querySelector só está presente no contexto
      de 'document'. Dessa forma, precisamos atribuir o contexto do .this 
      da variável '$' (que é uma função - funções têm seu próprio .this)
      para que seja o 'document' através da função bind
    */
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._negociacoes = new Negociacoes()
  }

  adiciona(event) {
    event.preventDefault()

    /* outro jeito de transformar a string para data
       let data = new Date(this._inputData.value.replace(/-/g, ',')) 
    */

    /* outro jeito de transformar a string para data
      let data = new Date(this._inputData.value.split('-'))   
    */

    const negociacao = this._criarNegociacao()
        
    this._negociacoes.adiciona(negociacao)
    this._limpaFormulario()
  }  

  _limpaFormulario() {

    this._inputData.value = ''
    this._inputQuantidade.value = 1
    this._inputValor.value = 0.0
    this._inputData.focus()
}

  _criarNegociacao() {
    
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
}
}
