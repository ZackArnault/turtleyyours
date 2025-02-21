<script setup>
import { Link } from '@inertiajs/vue3';
const NavItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/' },
    { title: 'Showcase', path: '/' },
    { title: 'Events', path: '/' },
    { title: 'Contact', path: '/' },
];
</script>
<template>
    <nav class="flex justify-between items-center py-8 absolute top-0 left-0 w-full">
        <Link :href="'/'" class="text-3xl font-bold">
            <img src="/images/LOGO_wordmark.svg" alt="Turtley Yours Logo" class="h-12 w-auto">
        </Link>
        <ul class="flex font-bold">
            <li v-for="item in NavItems" :key="item.title" class="px-8 text-xl">
                <Link :href="item.path">
                    {{ item.title }}
                </Link>
            </li>
        </ul>
    </nav>
</template>
