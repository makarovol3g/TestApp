Ext.define('TestApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'TestApp.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',

    
    title: 'Окно входа',
    closable: false,
    autoShow: true,
    bodyPadding: 10,
    
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Пользователь',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            fieldStyle: 'color: red',
            value: ''
        }],
        buttons: [{
            text: 'Войти',
            listeners: {
                click: 'onLoginClick',
            }
        }]
    }

})