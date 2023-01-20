import {Modal} from "./Modal.js";

export class Form {
    elem;
    modal;
    dataOrder;

    /**
     * @param elem
     * @param {Modal} modal
     */
    constructor(elem, modal) {
        this.elem = elem;
        this.modal = modal;
    }

    initForm() {
        this.renderOrderForm();
    }

    renderOrderForm() {

    }

    /**
     * @param {Object} orderInfo
     */
    setInfo(orderInfo) {
        this.dataOrder = orderInfo;
    }
}