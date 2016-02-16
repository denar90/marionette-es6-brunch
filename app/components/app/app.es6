import AppRouter from './appRouter';
import AppController from './appController';
import config from 'config';

let app = new Marionette.Application();

app.history = () => {
    Backbone.history.start({
        pushState: true
    });
};

app.addRegions({
    appRegion: '#app'
});

app.on('before:start', () => {
    new AppRouter({controller: new AppController()});
    $.ajaxSetup({
        headers: {
            "accept": "application/json",
            "X-Auth-Token": config.token
        }
    });
});

app.on('start', () => {
    app.history();
});

export default app;