Ext.define("TestApp.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onItemSelected: function (item) {

    Ext.create("TestApp.view.main.GoodsCard", {

      title: `Карточка товара: ${item.lastSelected.data.name}`, 

      items: [{
        xtype: 'form',
        reference: 'form',

        items: [{
          xtype: 'displayfield',
          fieldLabel: 'ID',
          value: `${item.lastSelected.data.id}`
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Наименование',
            value: `${item.lastSelected.data.name}`
        }, {
            xtype: 'spinnerfield',
            name: 'price',
            fieldLabel: 'Цена',
            allowBlank: false,
            width: '80%',
            value: `${item.lastSelected.data.price}`,
            onSpinUp: function() {
              if (this.value >= 0) {this.setValue(+(this.value) + 1)}
            },
            onSpinDown: function() {
              if (this.value > 0) {this.setValue(+(this.value) - 1)}
            },
        }, {
            xtype: 'spinnerfield',
            name: 'count',
            fieldLabel: 'Кол-во',
            allowBlank: false,
            width: '80%',
            value: `${item.lastSelected.data.count}`,
            onSpinUp: function() {
              if (this.value >= 0) {this.setValue(+(this.value) + 1)}
            },
            onSpinDown: function() {
              if (this.value > 0) {this.setValue(+(this.value) - 1)}
            },
        }]

      }],

    }).show();
    
  },

  onLogoutClickButton: function () {

    localStorage.removeItem('TestLoggedIn')

    this.getView().destroy()

    Ext.create({
      xtype: 'login',
    })

  },

  onGoodsClickButton: function (button) {

    const panel = button.up().up()

    panel.add({
      title: "Товары",
      items: [
        {
          xtype: "mainlist",
        },
      ],
    })

  },

  onIdFilterChange: function (field) {

    const storeOfGoods = Ext.getStore("mylist")
    const filterFieldValue = +(field.value)

    storeOfGoods.clearFilter()

    storeOfGoods.filterBy((item) => {
      if (filterFieldValue === item.data.id) {
        return item
      } else if (filterFieldValue == '') {
        return item
      }
    })

  },

  onDescriptionFilterChange: function (field) {

    const storeOfGoods = Ext.getStore("mylist")
    const filterFieldValue = field.value

    storeOfGoods.clearFilter();

    storeOfGoods.filterBy((item) => {
      if (item.data.description.toLowerCase().includes(filterFieldValue.toLowerCase())) {
        return item
      } else if (filterFieldValue == '') {
        return true
      }
    })

  },

})
