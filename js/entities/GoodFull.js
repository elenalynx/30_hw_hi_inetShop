export class GoodFull extends Good {
    id;
    name;
    price;

    description;

    constructor(id, name, price, description) {
        super(id, name, price);
        this.description = description;
    }
}