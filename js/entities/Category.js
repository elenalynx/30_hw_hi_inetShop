export class Category {
    id;
    name;
    arrayGoodsId;

    constructor(id, name, goodsId = []) {
        this.id = id;
        this.name = name;
        this.arrayGoodsId = goodsId;
    }
}