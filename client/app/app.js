let controller = new NegociacaoController()

document
    .querySelector('.form')
     /* 
      Caso não usemos o bind na chamada abaixo, o .this continuará sendo o form
      (o local onde a função .adiciona foi chamada).
      Usando o .bind na chamada abaixo informamos que o contexto da função
      'adiciona' será o próprio 'controller', e não mais o form.

      (Não seria necessário usar o .bind caso a função 'adiciona' fosse
      uma arrow function, pois o .this em arrow function não varia)
    */
    .addEventListener('submit', controller.adiciona.bind(controller))