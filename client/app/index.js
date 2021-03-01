var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade'),
];

var tbody = document.querySelector('table tbody');

// Reponsável pela alimentação da tabela:
document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault()

  var tr = document.createElement('tr')
  
  // Acrescenta os campos na tabela
  campos.forEach(campo => {
    var td = document.createElement('td')
    td.textContent = campo.value
    tr.appendChild(td)
  })

  var tdVolume = document.createElement('td')
  tdVolume.textContent = campos[1].value * campos[2].value
  tr.appendChild(tdVolume)


  tbody.appendChild(tr)

  // Limpa os campos do formulário
  campos[0].value = ''
  campos[1].value = 1
  campos[2].value = 0
  campos[0].focus() // foca o campo de data
})

