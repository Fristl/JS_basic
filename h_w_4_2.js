const myBasket = [ //   я бы конечно поспорил насчёт const, так как количество у нас меняется
    {
        id_product: 1,
        product_name: 'good_1',
        product_price: 100,
        quantity_of_product: 0,
    },
    {
        id_product: 2,
        product_name: 'good_2',
        product_price: 8540,
        quantity_of_product: 2,
    },
    {
        id_product: 3,
        product_name: 'good_3',
        product_price: 900,
        quantity_of_product: 11,
    },
    {
        id_product: 4,
        product_name: 'good_4',
        product_price: 10,
        quantity_of_product: 58,
    },
]


function countBasketPrice(basket) {
    return basket.reduce(function (sum, product,) {
        return sum + product.product_price * product.quantity_of_product
    }, 0)
}

console.log(countBasketPrice(myBasket));


/*
К имеющимся свойствам добавить ссылку на картинку
Полное описание, характеристики
Короткое описание, например совместимость, страну производства
В зависимости от места вызывается то или иное свойство продукта
 */
