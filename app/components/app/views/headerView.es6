import template from 'templates/header';

export default class ItemView extends Marionette.ItemView {
    get template() {
        return template;
    }

    get className() {
        return 'text-center';
    }

    get tagName() {
        return 'h1';
    }
}