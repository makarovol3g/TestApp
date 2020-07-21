Ext.define('TestApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TestApp',

    stores: [

    ],

    launch: function () {

        var loggedIn;

        loggedIn = localStorage.getItem('TestLoggedIn')

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        })

    },

})