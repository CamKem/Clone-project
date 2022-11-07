<script>
import Register from "resources/js/Pages/Auth/Register.vue";
import Login from "resources/js/Pages/Auth/Login";

    export default {
        data: function() {
            return {
                tabs: ["Login", "Register"],
                selected: "Login"
            };
        },
        components: {
            Register,
            Login
        }
    };
</script>

<template>
    <div>
        <button
            v-for="tab in tabs"
            :key="tab"
            @click="selected = tab;"
            :class="['tab-btn', { active: selected === tab }]"
        >
            {{ tab }}
        </button>
    <component :is="selected" class="tab"></component>
    </div>
</template>

