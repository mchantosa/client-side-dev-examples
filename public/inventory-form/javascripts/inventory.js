var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
      //$("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      var iTmpl = document.querySelector("#inventory_item")
      this.template = iTmpl.innerHTML;
      iTmpl.remove();
      //this.template = iTmpl.innerHTML;
      //var $iTmpl = $("#inventory_item").remove();
      //this.template = $iTmpl.html();
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(itemRow) {
      var id = this.findID(itemRow),
          item = this.get(id);
      item.name = itemRow.querySelector("[name^=item_name]").value;
      item.stock_number = itemRow.querySelector("[name^=item_stock_number]").value;
      item.quantity = itemRow.querySelector("[name^=item_quantity]").value;

      //item.name = $item.find("[name^=item_name]").val();
      //item.stock_number = $item.find("[name^=item_stock_number]").val();
      //item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          item = this.template.replace(/ID/g, item.id);

      document.querySelector("#inventory").insertAdjacentHTML('beforeend', item);
      //$("#inventory").append(item);
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
      return +item.querySelector('input[type=hidden]').value;
      //return +$item.find("input[type=hidden]").val();
    },
    deleteItem: function(e) {
      e.preventDefault();
      var item = this.findParent(e)
      item.remove();
      this.remove(this.findID(item));
    },
    updateItem: function(e) {
      var item = this.findParent(e);
      this.update(item);
    },
    bindEvents: function() {
      document.querySelector("#add_item").addEventListener('click', this.newItem.bind(this));
      document.querySelector("#inventory").addEventListener("click", function(event) {
        if (event.target.tagName === "A" && event.target.classList.contains("delete")) {
          this.deleteItem.call(this, event);
        }
        }.bind(this));
        document.querySelector("#inventory").addEventListener("blur", function(event) {
          if (event.target.matches(":input")) {
            this.updateItem.call(this, event);
          }
          }.bind(this));
 
      // $("#add_item").on("click", $.proxy(this.newItem, this));
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener("DOMContentLoaded", (e) => {
  console.log('page loaded')
  inventory.init.bind(inventory)();
  //inventory.init()
})
//$($.proxy(inventory.init, inventory));
