Ext.define('TestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(button) {

        const formValues = button.up('form').getForm().getValues()

        if (formValues.username === 'admin' && formValues.password === 'padmin') {

            localStorage.setItem("TestLoggedIn", true)

            this.getView().destroy();

            Ext.create({
                xtype: 'app-main'
            });
            
        } else {

            const passIsWrongWarning = button.up('form').down('displayfield')
            
            passIsWrongWarning.setValue('Не удается войти')

            setTimeout(() => passIsWrongWarning.setValue(''), 1500)

        }
    }
})