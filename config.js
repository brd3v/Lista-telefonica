const btn = document.getElementById('btn' )

let nameUser = document.getElementById('name-user')
let telUser = document.getElementById('tel-user')
let name = document.getElementById('name')
let tel = document.getElementById('tel')

let item = []
let items = []



btn.addEventListener('click', function(e){
    e.preventDefault()
   

    if( name.value != '' & tel.value != ''){
    let corpo = document.getElementById('retorno')
    item.push(name.value)
    items.push(tel.value) 
    let foot = document.getElementById('foot')
    foot.innerHTML = `<h4>TOTAL DE CONTATOS:</h4>${item.length}`


    corpo.innerHTML += 
     `<tr>
    <td>
    ${name.value}
    </td>
    <td>
    ${tel.value}
    </td>
    </tr>

    `
    

    console.log(item)
    nameUser.innerHTML = `<tr>${name.value}</tr>`
    telUser.innerHTML = `<tr>${tel.value}</tr>`


    console.log(name.value)
    console.log(tel.value)

  }
  else{
    alert('preencha os campos')
  }

} )