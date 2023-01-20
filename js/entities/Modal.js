export class Modal {
    element;
    hiddenClassName = 'hide';

    constructor(elem) {
        this.element = elem;
        this.initHandlers();
    }

    initHandlers() {
        this.element.addEventListener('click', ({target}) => {
            console.log(1)
            if (target.dataset.action === 'close') {
                console.log(2)
                this.hide();
            }
        });
    }

    hide() {
        this.element.classList.add(this.hiddenClassName);
    }

    show() {
        this.element.classList.remove(this.hiddenClassName);
    }
}