function descuento() {
    const price = document.querySelector('#price').value;
    const cupon = document.querySelector('#cupon').value;
    const result = document.querySelector('#result');
       
    const discounts = []
    discounts.push({
        name: 'platzivacation',
        discount: 10,
    });
    discounts.push({
        name: 'mothersday',
        discount: 20,
    });
    discounts.push({
        name: 'christmas',
        discount: 50,
    });
    discounts.push({
        name: 'independenceday',
        discount: 30,
    });
    

    const descuentosFiltrados = discounts.find(disc => disc.name == cupon);
        if (descuentosFiltrados) {
            result.innerText = "Usted Obtubo un cupon es de " + descuentosFiltrados.discount + " % y el precio mas el descuento es de  " + (price * (100 - descuentosFiltrados.discount))/100 + "$"; 
        } else {
            result.innerText = "Este cupon no es valido"
        }
    }


    //function solution(users, id) 
    //let usuario = users.find((item) =>  item.id == id )
    //if (usuario) {
    //  return usuario.name
    //} else {
    //  return false
    //}

//result.innerText = "Usted Obtubo un cupon es de " + disc.discount + " % y el precio mas el descuento es de  " + (price * (100 - disc.discount))/100 + "$"; 