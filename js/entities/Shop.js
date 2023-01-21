import {Modal} from "./Modal.js";
import {Form} from "./Form.js";
import {Cart} from "./Cart.js";

export class Shop {
    categoriesWrapper = document.querySelector('.categories_wrapper');
    goodsWrapper = document.querySelector('.goods_wrapper');
    goodWrapper = document.querySelector('.good_wrapper');
    modal = new Modal(document.querySelector('.modalOrderData'));
    orderForm = new Form(document.querySelector('.order-form'), this.modal);
    cart = new Cart();
    cartWrapper = document.querySelector('.cart_div');

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

        this.goodsWrapper.addEventListener('click', ({target}) => {
            const listItem = target.closest('.goods_item');

            if (listItem || target.matches('goods_item')) {
                const {id} = listItem.dataset;
                const good = this.config.goods.find((item) => item.id === +id);

                this.renderGood(good);
            }
        });

        this.goodWrapper.addEventListener('click', ({target}) => {
            if (target.matches('button')) {
                // HW 30
                // this.clearGoodDetail();
                // this.clearGoods();

                // HW 26
                const {id} = target.dataset;
                console.log(id);
                this.cart.addGoods(id, this.config);
                this.modal.show();
                // this.orderForm.renderOrderForm();
            }
        });

        this.orderForm.elem.addEventListener('submit', (event) => {
            event.preventDefault();

            const orderInfo = {
                firstName: this.orderForm.elem.elements.firstName.value,
                lastName: this.orderForm.elem.elements.lastName.value,
                city: this.orderForm.elem.elements.city.value,
                novaPoshta: this.orderForm.elem.elements.novaPoshta.value,
                paymentType: this.orderForm.elem.elements.paymentType.value,
                quantity: this.orderForm.elem.elements.quantity.value,
            };

            this.orderForm.setInfo(orderInfo);
            console.log(orderInfo);
            this.modal.hide();
            this.orderForm.elem.reset();
            // openCart()
            this.renderCart(this.cart.goodsCart);
        });


        // НЕ розумію як через ФормДату все отримати

        // this.orderForm.onsubmit = async (event) => {
        //     event.preventDefault();
        //     let result = new FormData(this.orderForm);
        // let response = await fetch('', {
        //     method: 'POST',
        //     body: new FormData(this.orderForm)
        // });
        //
        // let result = await response.json();
        // let res = result.getAll('order-form');
        // console.log(result);
        // console.log(res);
        // }
    }

    render() {
        this.renderCategories();
        // this.renderGoods(this.config.goods);
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

    clearGoods() {
        this.goodsWrapper.innerHTML = '';
    }

    clearGoodDetail() {
        this.goodWrapper.innerHTML = '';
    }

    /**
     * @param {[]} goods
     */
    renderGoods(goods) {
        this.clearGoods();

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
            <button class="btn" type="button">See more</button>`;

            this.goodsWrapper.append(goodItem);
        });
    }

    /**
     * @param {Good} good
     */
    renderGood({id, title, price, imgSrc, description}) {
        this.clearGoodDetail();

        const goodItem = document.createElement('div');
        goodItem.dataset.id = id;
        goodItem.classList.add('goods_item');

        goodItem.innerHTML = `
            <div class="for_img">
                <img class="good_img" src="${imgSrc}" alt="good">
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
            <p>${price} UAH</p>
            <button data-id="${id}" class="btn modal-order-btn" type="button">Buy</button>`;

        this.goodWrapper.append(goodItem);
    }

    /**
     *
     * @param {[]} goodsCartArr
     */
    renderCart(goodsCartArr) {
        let result = '';
        console.log(Object.entries(goodsCartArr))
        const sum = Object.entries(goodsCartArr).reduce((acc, [index, {id, count}]) => {
            console.log(acc, index, id, count)
            const good = this.config.goods.find((item) => {
                console.log(item)

                if (item.id === +id) {
                    console.log(item)
                    // console.log(item.id)
                    // console.log(item.title)
                    // console.log(item.price)
                    return item;
                }
            });
            console.log(good)
            result = `
            ${result}
            <tr>
            <td>${good.title}</td>
            <td>${count}</td>
            <td>${good.price}</td>
            </tr>
            `;
            // console.log(good.price)
            // return acc++;
            return acc + (+good.price * count);
        }, 0);

        result = `
        ${result}
        <tr>
        <th colspan="2">Total:</th>
        <th>${sum}</th>
        </tr>
        `;

        this.cartWrapper.innerHTML = result;
        console.log(sum);

    }
}