Ext.define("TestApp.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",
  id: 'mylist',

  requires: ["TestApp.store.Personnel"],

  title: "Список товаров",

  store: {
    type: "personnel",
  },

  columns: [
    { text: "ID", dataIndex: "id", flex: 0, sortable: false },
    { text: "Имя", dataIndex: "name", flex: 1, sortable: false },
    { text: "Описание", dataIndex: "description", flex: 1, sortable: false },
    { text: "Цена", dataIndex: "price", flex: 0, sortable: false },
    { text: "Количество", dataIndex: "count", flex: 0, sortable: false, tdCls: 'x-change-ceil'},
  ],

  tbar: {
    xtype: "fieldset",
    items: [
      {
        xtype: "textfield",
        fieldLabel: 'ID',
        listeners: {
          specialkey: "onIdFilterChange"
        },
      }, {
        xtype: "textfield",
        fieldLabel: 'Описание',        
        listeners: {
          specialkey: "onDescriptionFilterChange"
        },
      },
    ],
  },

  listeners: {
    select: "onItemSelected",
  },

})
