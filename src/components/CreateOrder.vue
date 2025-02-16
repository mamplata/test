<template>
    <div>
        <router-link to="/">
            <button>Back to Order List</button>
        </router-link>
    </div>
    <br>

    <div>
        <h2>Create Order</h2>
        <form @submit.prevent="submitOrder">
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
            <button type="submit">Submit Order</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "CreateOrder",
    props: {
        products: Object,
    },
    emits: ["orderCreated", "orderUpdated", "orderDeleted"], // Declare the emitted event
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
    methods: {
        submitOrder() {
            if (!this.order.name || !this.order.supplier) {
                alert("Please fill in all fields.");
                return;
            }

            // Assign the total before emitting
            const newOrder = {
                ...this.order,
                total: this.computedTotal
            };

            this.$emit("orderCreated", newOrder);
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
}

form div {
    margin-bottom: 10px;
}

input {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
}

button {
    cursor: pointer;
}
</style>