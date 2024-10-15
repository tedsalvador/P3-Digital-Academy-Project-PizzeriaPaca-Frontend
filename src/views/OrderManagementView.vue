<script setup>
import { ref } from "vue";

import OrderManagement from "../components/OrderManagement.vue";
import TituloAdmin from "@/components/TituloAdmin.vue";
import NavBarAdmin from "@/components/NavBarAdmin.vue";
</script>

<template>
  <main>
    <TituloAdmin></TituloAdmin>
    <NavBarAdmin></NavBarAdmin>
    <OrderManagement />
  </main>
</template>
