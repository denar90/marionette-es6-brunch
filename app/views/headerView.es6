import template from 'templates/header';
import { props } from 'decorators';

@props({
    template: template,
    className: 'text-center',
    tagName: 'h1'
})
export default class ItemView extends Marionette.ItemView {
}