export class Shop {
    categoriesWrapper = document.querySelector('.categories_wrapper');
    goodsWrapper = document.querySelector('.goods_wrapper');
    goodWrapper = document.querySelector('.good_wrapper');

    constructor(config) {
        this.config = config;
    }

    init() {
        this.render();

        this.categoriesWrapper.addEventListener('click', ({target}) => {
            if (target.matches('li')) {
                const {id} = target.dataset;
                const category = this.config.categories.find((item) => item.id === +id);
                const goods = this.config.goods.filter((item) => category.arrayGoodsId.includes(item.id));
                this.renderGoods(goods);
            }
        });
    }

    render() {
        this.renderCategories();
        this.renderGoods(this.config.goods);
    }

    renderCategories() {
        this.config.categories.forEach(({title, id}) => {
            // const categoryList = this.categoriesWrapper.querySelector('ul');
            const categoryItem = document.createElement('li');

            categoryItem.classList.add('btn', 'categories_item');
            categoryItem.dataset.id = id;
            categoryItem.innerText = title.toUpperCase();
            this.categoriesWrapper.append(categoryItem);
        });
    }

    renderGoods(goods) {
        this.goodsWrapper.innerHTML = '';
        goods.forEach(({id, title, price, imgSrc}) => {
            const goodItem = document.createElement('div');

            goodItem.dataset.id = id;
            goodItem.classList.add('goods_item');
            goodItem.innerHTML = `
            <div class="for_img">
                <img class="good_img" src="${imgSrc}" alt="good">
            </div>
            <h3>${title}</h3>
            <p>${price} UAH</p>
            <a class="btn" href="">See more</a>`;

            this.goodsWrapper.append(goodItem);
        });
    }
}