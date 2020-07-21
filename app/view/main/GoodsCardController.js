Ext.define("TestApp.view.main.GoodsCardController", {
  extend: "Ext.app.ViewController",
  alias: "controller.goodscard",

  goodsCardSaveButton: function(button) {

    const changedValues = button.up().up().down('form').getForm().getValues()
    const indexOfthisGood = button.up().up().down('displayfield').value - 1
    const thisGood = Ext.getStore("mylist").data.items[indexOfthisGood];

    console.log(1)

    if (Number.isInteger(+changedValues.price) && Number.isInteger(+changedValues.count)) {
        if (changedValues.price <= 0 && changedValues.count < 0) {

        Ext.Msg.alert('Ошибка', 'Недопустимое значение в поле "Цена" и "Кол-во"')

      } else if (changedValues.price <= 0) {

        Ext.Msg.alert('Ошибка', 'Недопустимое значение в поле "Цена"')

      } else if (changedValues.count < 0) {

        Ext.Msg.alert('Ошибка', 'Недопустимое значение в поле "Кол-во"')

      } else {

        Ext.Msg.confirm('Подтверждение действия', 'Сохранить изменения?', callbackFunction = (btn) => {
          if(btn == 'yes') {

            thisGood.data.price = +changedValues.price
            thisGood.data.count = +changedValues.count

            Ext.getCmp('mylist').getView().refresh();
        
            this.getView().destroy()

         } else {

            this.getView().destroy()

         }
        })

        

      }
    } else {

      Ext.Msg.alert('Ошибка', 'Недопустимое значение')

    }

  },

  goodsCardCancelButton: function(button) {

    this.getView().destroy()

  }

})
