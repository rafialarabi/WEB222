/** Add any JavaScript you need to this file. */

window.onload = function() {
  console.log('window.onload');
};

let PurchaseAll = document.querySelector('#Purchase'); //to display all products

PurchaseAll.addEventListener('click', function() {
  for (let i = 1; i <= 11; i++) {
    var prod = document.getElementById('product' + i);

    if (prod.style.display === 'none') {
      prod.style.display = 'block';
    }
  }
  document.getElementById('text').innerHTML = 'Purchase All';
});

let ClickPhone = document.querySelector('#Phone'); //to display all mobiles

ClickPhone.addEventListener('click', function() {
  for (let j = 4; j <= 11; j++) {
    let f_Product = document.getElementById('product' + j);
    f_Product.style.display = 'none';
  }

  for (let k = 1; k <= 4; k++) {
    let s_Product = document.getElementById('product' + k);
    s_Product.style.display = 'block';
  }

  document.getElementById('text').innerHTML = 'Purchase All > mobile';
});

let ClickEarphone = document.querySelector('#soundSystem'); //didn't work fine.

ClickEarphone.addEventListener('click', function() {
  for (let l = 1; l <= 4; l++) {
    let f_Product = document.getElementById('product' + l);
    f_Product.style.display = 'none';
  }

  for (let m = 4; m <= 11; m++) {
    let s_Product = document.getElementById('product' + m);
    s_Product.style.display = 'block';
  }

  document.getElementById('text').innerHTML = 'Purchase All > sound';
});
