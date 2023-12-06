<script lang="ts">
import { defineComponent } from "vue"
import { createClient } from "../utils/createClient";

export default defineComponent({
    data() {
        return {
            description: "",
            isLoading: false
        }
    },

    methods: {
        async onSubmit() {
            this.isLoading = true;
            const client = createClient();
            const response = await client.api.mutations.createTask({ description: this.description });

            if (response.data) {
                this.$emit("task-created", response.data);
                this.isLoading = false;
                this.description = "";
            } else {
                this.isLoading = false;
                throw new Error(response.error.message);
            }
        }
    }
})
</script>

<template>
    <form @submit.prevent="onSubmit">
        <textarea name="description" cols="30" rows="2" placeholder="Enter task description" required
            v-model="description" />
        <button type="submit" :disabled="isLoading">Create</button>
    </form>
</template>