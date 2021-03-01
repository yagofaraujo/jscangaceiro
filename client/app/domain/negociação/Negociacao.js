class Negociacao {
  constructor(_data, _quantidade, _valor) { 
    /* 
      Método padrão de atribuição das propriedades: 
        this._data = new Date(data.getTime())
        this._quantidade = quantidade
        this._valor = valor
    */

   // Solução melhor para deixar menos verboso. Significado: pág. 44
   Object.assign(this, { _quantidade, _valor })

    // Propriedades que precisam ser alteradas antes da atribuição
    this._data = new Date(_data.getTime())

    //Congelar objeto para que as propriedades não recebam novas atribuições
    Object.freeze(this)  
  }

  get volume() {
    return this._quantidade * this._valor
  }

  get data() {
    //return this._data
    return new Date(this._data.getTime())
  }

  get quantidade() {
    return this._quantidade
  }

  get valor() {
    return this._valor
  }
}