<script setup>
import { ref } from "vue";
import AdminDashboard from "../components/AdminDashboard.vue";
import TituloAdmin from "@/components/TituloAdmin.vue";
import NavBarAdmin from "@/components/NavBarAdmin.vue";
</script>

<template>
  <TituloAdmin></TituloAdmin>
  <NavBarAdmin></NavBarAdmin>
  <div class="admin-dashboard">
    <AdminDashboard />
  </div>
</template>
