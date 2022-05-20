import internal from 'stream';
import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    save: 0,
    subscribe() {
        this.save = this.countPlus.bind(this);
        EventEmitter.on('click', this.save);
    },
    unsubscribe() {
        EventEmitter.off('click', this.save);
    },
    countPlus() {
        this.count++;
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};
