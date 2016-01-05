import { props } from 'decorators';

@props({
    appRoutes: {
        '': 'index'
    }
})
export default class AppRouter extends Marionette.AppRouter {}