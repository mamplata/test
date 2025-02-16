<template>
    <div class="box" v-if="product">
        <h3>Product Details</h3>
        <p><strong>Name:</strong> {{ product.name }}</p>
        <p><strong>Supplier:</strong> {{ product.supplier }}</p>
        <p><strong>Price:</strong> {{ product.price }}</p>
        <p><strong>Quantity:</strong> {{ product.qty }}</p>
        <p><strong>Total:</strong> {{ product.total }}</p>
    </div>
    <p v-else>No product found</p>
</template>

<script>
export default {
    name: "ViewDetails",
    props: {
        productId: Number,
        products: Array
    },
    computed: {
        product() {
            return this.products.find(p => p.id === this.productId);
        }
    }
}
</script>

<style>
.box {
    border: 1px solid black;
    text-align: center;
}
</style>
