class NegociacaoController {

  constructor() {
    /* 
      Precisamos usar o .bind pq querySelector só está presente no contexto
      de 'document'. Dessa forma, precisamos atribuir o contexto do .this 
      da variável '$' (que é uma função - funções têm seu próprio .this)
      para que seja o 'document' através da função bind
    */
    let $ = document.querySelector.bind(document)

    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
  }

  adiciona(event) {
    event.preventDefault()

    /* outro jeito de transformar a string para data
       let data = new Date(this._inputData.value.replace(/-/g, ',')) 
    */

    /* outro jeito de transformar a string para data
      let data = new Date(this._inputData.value.split('-'))   
    */

    let negociacao = new Negociacao(
      DateConverter.paraData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    )

    let diaMesAno = DateConverter.paraTexto(negociacao.data)

    console.log(diaMesAno)
  }  
}
