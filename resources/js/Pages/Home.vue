<script setup>
import { Head } from '@inertiajs/vue3';
import Nav from "@/Components/Nav.vue";
import HeroSection from "@/Components/HeroSection.vue";
</script>
<template>
    <Head title="Turtley Yours" />
    <div class="bg-brand-lightPurple min-h-screen h-screen">
        <div class="max-w-[1440px] mx-auto relative">
            <Nav />
            <HeroSection />
        </div>
    </div>
</template>
