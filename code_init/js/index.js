let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

//Aqui el input del total

$calc.onclick = calcAll;

//Aqui estan las variables del DOM
let $quanty2 = Array.from(document.querySelectorAll('.qty'));
let $delete = Array.from(document.getElementsByClassName('btn-delete'));

//Aqui se asignan los eventos
$quanty2.forEach(el => el.querySelector('input').addEventListener('click', updateSubtot));
$delete.forEach(el => el.addEventListener('click', deleteEl));




function updateSubtot(e) {
  e.target.parentElement.parentElement.nextSibling.nextSibling.querySelector('span').textContent = Number(e.target.parentElement.parentElement.previousSibling.previousSibling.querySelector('span').textContent) * e.target.value;
  console.log(e.target.parentElement.parentElement.nextSibling.nextSibling.querySelector('span'));
}

function calcAll() {
  //Variable temporal para hacer la cuenta de los $subtotl2
  let cuenta = 0;

  let $subtotl2 = Array.from(document.querySelectorAll('.subtot'));
  let $total = document.querySelector('h2').querySelector('span');
  $subtotl2.forEach(el => {
    cuenta += Number(el.querySelector('span').textContent)
    console.log(el.querySelector('span').textContent)
  });
  $total.innerHTML = cuenta;
}

function deleteEl(e) {
  let grndParent = document.querySelector('tbody');
  grndParent.removeChild(e.target.parentElement.parentElement);
  //Esto se le agrega para que cuando borre el elemento tambien actualice el total
  calcAll();
}


//Aqui voy a agregar la funcion de agregar elementos
//Comenzare creando las variables con los elementos creados

//Este comando inserta el nuevo elemento despues de su ultimo nodo
// $tbody[0].insertAdjacentHTML('beforeend',tr);
//Aqui esta la variable a la que le añadiremos el evento para crear los nuevos elementos
let $crear = document.getElementById('create');

$crear.addEventListener('click', createEl);

function createEl(e) {
  //Esta es la variable que trael el tbody para ir añadiendo, con neustra funcion, los demas elementos
  let $tbody = document.getElementsByTagName('tbody');
  //Estas son las variables que recogeran los datos del objeto creado
  let $prductNme = document.querySelector('.new').querySelector('td').querySelector('input').value;
  let $priceNme = document.querySelector('.new').querySelector('td').nextSibling.nextSibling.querySelector('input').value;
  
  let $tr = document.createElement('tr');
  let $td1 = document.createElement('td');
  let $td2 = document.createElement('td');
  let $td3 = document.createElement('td');
  let $td4 = document.createElement('td');
  let $td5 = document.createElement('td');
  let $spn1 = document.createElement('span');
  let $spn2 = document.createElement('span');
  let $spn3 = document.createElement('span');
  let $lbel = document.createElement('label');
  let $input = document.createElement('input');
  let $btn = document.createElement('button');

  $tr.classList.add('product');
  $tr.appendChild($td1).classList.add('name');
  $td1.appendChild($spn1);
  $spn1.insertAdjacentHTML('afterbegin', $prductNme);
  $tr.appendChild($td2).classList.add('pu');
  $td2.appendChild($spn2);
  $spn2.insertAdjacentHTML('afterbegin', `$${$priceNme}.00`);
  $tr.appendChild($td3).classList.add('qty');
  $td3.appendChild($lbel);
  $lbel.appendChild($input);
  $input.setAttribute('type', 'number');
  $input.setAttribute('value', '0');
  $input.setAttribute('min', '0');
  $input.onclick = updateSubtot2;
  $tr.appendChild($td4).classList.add('subtot');
  $td4.appendChild($spn3);
  $spn3.insertAdjacentText('beforebegin', '$');
  $spn3.textContent = '0';
  $tr.appendChild($td5).classList.add('rm');
  $td5.appendChild($btn);
  $btn.classList.add('btn');
  $btn.classList.add('btn-delete');
  $btn.onclick = deleteEl;
  $btn.textContent = 'Delete';

  $tbody[0].insertAdjacentElement('beforeend', $tr);
  
  function updateSubtot2(e) {
    e.target.parentElement.parentElement.nextSibling.querySelector('span').textContent = ` ${Number($priceNme) * Number(e.target.value)}`;
  }
}





