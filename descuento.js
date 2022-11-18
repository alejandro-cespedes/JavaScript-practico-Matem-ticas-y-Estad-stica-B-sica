function descuento() {
    const price = document.querySelector('#price').value;
    const cupon = document.querySelector('#cupon').value;
    const result = document.querySelector('#result');
       
    const discounts = {
        platzivacation: 10,
        mothersday: 15,
        independenceday: 20,
        christmas: 50,
    };
    if (cupon === "platzivacation") {
        result.innerText = "Usted Obtuvo un cupon de" + " " + discounts.platzivacation + "% y el total seria" + " " + price * (100 - discounts.platzivacation) / 100 + "$"

    } else if (cupon === "mothersday") {
        result.innerText = "Usted Obtuvo un cupon de" + " " + discounts.mothersday + "% y el total seria" + " " + price * (100 - discounts.platzivacation) / 100 + "$"

    } else if (cupon === "independenceday") {
        result.innerText = "Usted Obtuvo un cupon de" + " " + discounts.independenceday + "% y el total seria" + " " +  price * (100 - discounts.platzivacation) / 100 + "$"
    } else if (cupon === "christmas") {
        result.innerText = "Usted Obtuvo un cupon de" + " " + discounts.christmas + "% y el total seria" + " " +price * (100 - discounts.platzivacation) / 100 + "$"
    } else {
        result.innerText = "Ese cupon de descuento no es valido"
    }
}