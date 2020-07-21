Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'TestApp.view.main.MainController',
        'TestApp.view.main.MainModel',
        'TestApp.view.main.List',
        'TestApp.view.main.GoodsCard'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Учет товаров'
            },
            flex: 0
        },
        items: [{
            xtype: 'button',
            text: 'Товары',
            margin: '10 0',
            handler: 'onGoodsClickButton'
        }, {
            xtype: 'button',
            text: 'Выход',
            margin: '10 0',
            handler: 'onLogoutClickButton'
        }]  
    },
   
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 5,
    },

})
