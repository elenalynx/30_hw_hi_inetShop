export class Category {
    id;
    name;
    arrayGoodsId;

    constructor(id, name, [...args]) {
        this.id = id;
        this.name = name;
        this.arrayGoodsId = [args];
    }
}