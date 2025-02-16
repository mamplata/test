<template>
    <div>
        <router-link to="/">
            <button>Back to Order List</button>
        </router-link>
    </div>
    <br>

    <div>
        <h2>Edit Order</h2>
        <form @submit.prevent="updateOrder">
            <div>
                <label for="name">Product Name:</label>
                <input type="text" id="name" v-model="order.name" required />
            </div>

            <div>
                <label for="supplier">Supplier:</label>
                <input type="text" id="supplier" v-model="order.supplier" required />
            </div>

            <div>
                <label for="price">Price:</label>
                <input type="number" id="price" v-model="order.price" required />
            </div>

            <div>
                <label for="qty">Quantity:</label>
                <input type="number" id="qty" v-model="order.qty" required />
            </div>

            <div>
                <label for="total">Total:</label>
                <input type="number" id="total" v-model="computedTotal" readonly />
            </div>

            <br>
            <button type="submit">Update Order</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "EditOrder",
    props: {
        products: Array,
        orderId: Number
    },
    emits: ["orderCreated", "orderUpdated", "orderDeleted"],
    data() {
        return {
            order: {
                id: null,
                name: "",
                supplier: "",
                price: 0,
                qty: 1,
            },
        };
    },
    computed: {
        computedTotal() {
            return this.order.price * this.order.qty;
        },
    },
    created() {
        const existingOrder = this.products.find(product => product.id === this.orderId);
        if (existingOrder) {
            this.order = { ...existingOrder };
        }
    },
    methods: {
        updateOrder() {
            if (!this.order.name || !this.order.supplier) {
                alert("Please fill in all fields.");
                return;
            }
            this.order.total = this.computedTotal;
            this.$emit("orderUpdated", this.order);
            this.$router.push("/");
        }
    }
};
</script>
