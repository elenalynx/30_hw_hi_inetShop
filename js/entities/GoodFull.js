export class GoodFull extends Good {
    id;
    title;
    price;
    imgSrc;

    description;

    constructor(id, title, price, imgSrc, description) {
        super(id, title, price, imgSrc);

        this.description = description;
    }
}