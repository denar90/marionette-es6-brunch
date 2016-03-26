import AppRouter from './appRouter';
import AppLayout from './views/appLayout';
import AppController from './appController';
import config from 'config';

export default Marionette.Application.extend({
    region: '#app',

    onBeforeStart: function() {
        this.router = new AppRouter({controller: new AppController()});
        $.ajaxSetup({
            headers: {
                "accept": "application/json",
                "X-Auth-Token": config.token
            }
        });
    },

    onStart: function() {
        this.showView(new AppLayout());
        Backbone.history.start({
            pushState: true
        });
    }
});