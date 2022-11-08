<script setup>
defineProps(['message']);
</script>

<template>
    <div v-show="message">
        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            <li>{{ message }}</li>
        </ul>
    </div>
</template>
