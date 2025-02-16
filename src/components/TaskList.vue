<template>
    <div>
        <div>
            <router-link to="/add">
                <button>Create Order</button>
            </router-link>
        </div>
        <br>
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
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.supplier }}</td>
                    <td>
                        <button @click="viewProduct(product.id)">
                            View Details
                        </button>
                        <router-link :to="'/edit/' + product.id">
                            <button>Edit</button>
                        </router-link>
                        <button @click="confirmDelete(product.id)">
                            Delete
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
    emits: ["orderDeleted"],
    props: {
        products: Array,
    },
    data() {
        return {
            selectedProductId: null
        };
    },
    methods: {
        viewProduct(productId) {
            this.selectedProductId = productId;
        },
        confirmDelete(orderId) {
            if (confirm("Are you sure you want to delete this order?")) {
                this.$emit("orderDeleted", orderId);
            }
        }
    }
}
</script>
