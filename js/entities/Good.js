export class Good {
    id;
    title;
    price;
    imgSrc;
    description;

    constructor(id, title, price, imgSrc, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgSrc = imgSrc;
        this.description = description;
    }
}