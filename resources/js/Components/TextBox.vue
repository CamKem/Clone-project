<script setup>
import { onMounted, ref } from 'vue';

defineEmits(['update:modelValue']);

const box = ref(null);

onMounted(() => {
    if (box.value.hasAttribute('autofocus')) {
        box.value.focus();
    }
});

defineProps({
    modelValue: {
        modelValue: String,
    },
    rows: {
        rows: String,
    },
});
</script>

<template>
    <textarea :rows="rows" class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm align-items: stretch; flex-wrap: nowrap; flex-direction: row;" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
    <slot />
</template>
