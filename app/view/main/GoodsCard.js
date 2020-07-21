Ext.define("TestApp.view.main.GoodsCard", {
  extend: "Ext.window.Window",
  controller: 'goodscard',

  requires: [
    'Ext.plugin.Viewport',
    'TestApp.view.main.List',
    
    'Ext.form.Panel'
  ],

  height: 300,
  width: 500,
  bodyPadding: 5,

  buttons: [{
    text: 'Сохранить',
    handler: 'goodsCardSaveButton'
  },{
    text: 'Отмена',
    handler: 'goodsCardCancelButton'
  }],

})