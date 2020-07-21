Ext.define('TestApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    storeId: 'mylist',

    data: { items: [
        { id: 1, name: "Notebook Lenovo", description: "Ноутбук ThinkPad T460", price: 100, count: 2},
        { id: 2, name: "Keyboard ONKLICK", description: "Клавиатура OKLICK 140M, USB, черный", price: 50, count: 8},
        { id: 3, name: "Network adapter", description: "Сетевой адаптер WiFi D-Link", price: 7, count: 0},
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
})
