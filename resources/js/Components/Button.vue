<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: { type: String, default: 'button'},
    variant: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
});

const computedClasses = computed(() => {
    const base = 'bg-brand-lightTeal px-6 py-3 font-semibold rounded-md transition duration-200 drop-shadow-lg';
    const variants = {
        secondary: 'bg-brand-secondary text-white hover:bg-brand-primary',
        outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };
    return `${base} ${variants[props.variant]} ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
});
</script>

<template>
    <button
        :type="type"
        :class="computedClasses"
        :disabled="disabled">
        <slot />
    </button>
</template>
