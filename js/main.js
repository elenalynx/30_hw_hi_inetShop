// Дано 3 блоки
//
// В лівій частині сторінки - перелік категорій.
//     При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
//     Клік на товар - інформацію про товар у правому блоці.
//     В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

import {Shop} from "./entities/Shop.js";
import {Category} from "./entities/Category.js";
import {Good} from "./entities/Good.js";

const data = {
    categories: [
        new Category(1, 'Pillows', [1, 2, 3, 4]),
        new Category(2, 'Blankets', [5]),
        new Category(3, 'Mattresses', [6, 7, 8]),
    ],
    goods: [
        new Good(
            1,
            'Pillow 1',
            450,
            'img/good01.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),

        new Good(
            2,
            'Pillow 2',
            350,
            'img/good02.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),

        new Good(
            3, 'Pillow 3',
            550,
            'img/good03.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),

        new Good(
            4,
            'Pillow 4',
            1000,
            'img/good04.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),

        new Good(
            5,
            'Blanket 1',
            3000,
            'img/good01.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),

        new Good(
            6,
            'Mattress 1',
            2000,
            'img/good01.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),

        new Good(
            7,
            'Mattress 2',
            3000,
            'img/good01.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'
        ),

        new Good(
            8,
            'Mattress 3',
            4000,
            'img/good01.jpg',
            'Seamlessly empower fully researched growth strategies and interoperable internal or “organic”\n' +
            '                    sources. Seamlessly empower fully researched growth strategies and interoperable internal or\n' +
            '                    “organic” sources. Seamlessly empower fully researched growth strategies and interoperable internal\n' +
            '                    or “organic” sources. Seamlessly empower fully researched growth strategies and interoperable\n' +
            '                    internal or “organic” sources. Seamlessly empower fully researched growth strategies and\n' +
            '                    interoperable internal or “organic” sources.'),
    ],
}

const shop = new Shop(data);

shop.init();