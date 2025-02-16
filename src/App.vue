<template>
  <div>
    <router-view @orderCreated="addOrder" @orderUpdated="updateOrder" @orderDeleted="deleteOrder"
      :products="products" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", supplier: "John Doe", price: 25, qty: 1, total: 25 },
        { id: 2, name: "Product 2", supplier: "Jane Doe", price: 30, qty: 2, total: 60 }
      ],
    };
  },
  methods: {
    addOrder(newOrder) {
      const lastId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) : 0;
      newOrder.id = lastId + 1;
      this.products.push(newOrder);
    },
    updateOrder(updatedOrder) {
      const index = this.products.findIndex(p => p.id === updatedOrder.id);
      if (index !== -1) {
        this.products.splice(index, 1, updatedOrder); // Replace existing order
      }
    },
    deleteOrder(orderId) {
      this.products = this.products.filter(p => p.id !== orderId);
    }
  },
};
</script>
