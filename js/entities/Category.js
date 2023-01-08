export class Category {
    id;
    title;
    arrayGoodsId;

    constructor(id, title, goodsId = []) {
        this.id = id;
        this.title = title;
        this.arrayGoodsId = goodsId;
    }
}