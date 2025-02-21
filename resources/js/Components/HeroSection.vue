<script setup>
import Button from "@/Components/Button.vue";
</script>

<template>
    <div class="flex items-center min-h-screen max-w-[90%] mx-auto">
        <div class="flex-1 max-w-[50%] mx-auto">
            <img src="/images/LOGO_mascot.svg" alt="Turtley Yours Logo" class="w-full h-auto font-sans max-w-[75%] mx-auto">
        </div>
        <div class="flex-1 flex flex-col max-w-[50%] mx-auto justify-center px-12">
            <h1 class="text-brand-darkPurple text-5xl font-accent">HANDMADE CREATIONS FOR POP CULTURE LOVERS</h1>
            <p class="text-lg mt-8 font-montserrat tracking-wider">Welcome to the ultimate treasure trove for pop culture lovers! Whether you're into spooky, sparkly, or straight-up nostalgia, we've got you! Our creations are packed with personality and are totally one-of-a-kind.</p>
            <div class="w-auto mx-auto mt-16">
                <Button variant="primary" class="font-accent px-8 py-4 text-2xl tracking-widest">GET TURTLEY!</Button>
            </div>
        </div>

    </div>
</template>
