<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <header class="sticky w-full p-4 text-white bg-black">
        <section class="flex items-center justify-between">
          <!-- Logo de la F1 -->
          <div class="flex items-center text-lg font-bold font-poppins">
            <span class="text-red-600 animate-pulse">F</span>
            <span class="text-white">1 </span>
          </div>
          <!-- Menú de navegación -->
          <div class="flex w-full pl-4 overflow-auto text-sm justify-evenly">
            <router-link to="/home" class="text-gray-300 hover:underline font-poppins">Home</router-link>
            <router-link to="/drivers" class="text-gray-300 hover:underline font-poppins">Conductores</router-link>
            <router-link to="/teams" class="text-gray-300 hover:underline font-poppins">Equipos</router-link>
            <router-link to="/contact" class="text-gray-300 hover:underline font-poppins">Contacto</router-link>
          </div>
        </section>
      </header>
  
      <!-- Main -->
      <main class="flex-grow w-full">
        <slot name="main"></slot>
      </main>
  
      <!-- Footer -->
      <footer class="p-4 text-center text-white bg-black font-poppins">
        <p class="text-sm">
          &copy; PACA. Todos los derechos reservados. |
          <span class="text-red-600">Speed, Precision, Passion</span>
        </p>
      </footer>
    </div>
  </template>
  
  <script lang="ts" setup>
  // Aquí puedes añadir cualquier lógica necesaria para el componente
  </script>
  