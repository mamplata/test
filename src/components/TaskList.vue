<template>
    <div style="margin: 20px;">
        <table>
            <thead>
                <tr>
                    <th>Order Number</th>
                    <th>Product Name</th>
                    <th>Supplier</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.supplier }}</td>
                    <td>
                        <button @click="viewProduct(product.id)">
                            View Details
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <ViewDetails v-if="selectedProductId" :productId="selectedProductId" :products="products" />
    </div>
</template>

<script>
import ViewDetails from './ViewDetails.vue';

export default {
    name: "TaskList",
    components: {
        ViewDetails
    },
    data() {
        return {
            products: [
                { id: 1, name: "Product 1", supplier: "John Doe", price: 25, qty: 1, total: 25 },
                { id: 2, name: "Product 2", supplier: "Jane Doe", price: 30, qty: 2, total: 60 }
            ],
            selectedProductId: null
        };
    },
    methods: {
        viewProduct(productId) {
            this.selectedProductId = productId;
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
    text-align: center;
}

button {
    cursor: pointer;
}
</style>
