export class Cart {
    // config;
    /**
     * @type {[]}
     */
    goodsCart = [
        // {
        //     id: 4,
        //     count: 1,
        // },
        // {
        //     id: 1,
        //     count: 1,
        // },{
        //     id: 3,
        //     count: 1,
        // },
    ];

    constructor() {
        // this.config = config;

        // this.goods = {};
    }

    initCart() {

    }

    addGoods(idGood, config) {
        const good = config.goods.find(item => item.id === +idGood);
        console.log(22)
        console.log(idGood)
        let id = this.goodsCart.find(item => item.id === +idGood);
        console.log(id);

        if (id) {
        id.count += 1;
        } else {
            this.goodsCart = [...this.goodsCart, {id:+`${idGood}`, count:1}]
            console.log(2)
        }

        console.log(this.goodsCart)
    }
}

// else {
//     console.log(24);
//     this.goodsCart = [...this.goodsCart, {id:1, count:1}]
//     console.log(this.goodsCart);
//
// }