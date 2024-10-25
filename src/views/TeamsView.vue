<template>
    <div class="">
        <MainLayout>
            <template #main>
                <section class="relative w-full overflow-hidden">
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
          <img class="object-cover w-full h-auto"
            src="https://i.ibb.co/CBBk9BH/ascc-1.jpg"
            alt="Fórmula 1 en México"><h2
            class="absolute top-[-100px] overflow-hidden inset-0 flex items-center justify-center text-white font-bold font-karla animate-fade-right animate-duration-[2000ms] text-4xl md:text-5xl lg:text-6xl">
            Fórmula 1
          </h2>

          <h2
            class="absolute sm:top-[50px] bottom-0 overflow-hidden left-0 right-0 flex items-center justify-center font-bold text-white font-karla animate-fade-left top-4 animate-delay-500 animate-duration-[2000ms] text-6xl md:text-8xl lg:text-9xl">
                Teams
          </h2>
        </section>

          <article>
            <div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-8 bg-gray-100">
    <!-- Red Bull Racing -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Red Bull Racing</h2>
        <img src="https://cdn.racingnews365.com/Teams/Red-Bull/_503xAUTO_crop_center-center_none/f1_2021_redbull_logo.png?v=1643808334" alt="Logotipo de Red Bull Racing" class="w-full">
        <p class="text-gray-600">Red Bull Racing destaca por su alianza con Honda y sus pilotos, incluyendo al campeón Max Verstappen. Innovadores y audaces, buscan dominar la parrilla cada temporada.</p>
    </section>

    <!-- Mercedes-AMG Petronas -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Mercedes-AMG Petronas</h2>
        <img src="https://cdn.racingnews365.com/Teams/Mercedes/_503xAUTO_crop_center-center_none/f1_2021_mercedes_logo.png?v=1643808332" alt="Logotipo de Mercedes-AMG Petronas" class="w-full">
        <p class="text-gray-600">Mercedes sigue siendo un contendiente fuerte con Lewis Hamilton y George Russell, apoyados por motores de rendimiento excepcional.</p>
    </section>

    <!-- Ferrari -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Ferrari</h2>
        <img src="https://cdn.racingnews365.com/Teams/Ferrari/_503xAUTO_crop_center-center_none/f1_2021_ferrari_logo.png?v=1643808341" alt="Logotipo de Ferrari" class="w-full ">
        <p class="text-gray-600">Ferrari, el equipo histórico de F1, cuenta con Charles Leclerc y Carlos Sainz, y continúa con su propio desarrollo de motores.</p>
    </section>

    <!-- McLaren -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">McLaren</h2>
        <img src="https://static.vecteezy.com/system/resources/previews/020/500/043/non_2x/mclaren-brand-logo-symbol-orange-design-british-car-automobile-illustration-free-vector.jpg" alt="Logotipo de McLaren" class="w-full">
        <p class="text-gray-600">McLaren, impulsado por motores Mercedes, sigue compitiendo en la cima con Lando Norris y Oscar Piastri.</p>
    </section>

    <!-- Aston Martin -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Aston Martin</h2>
        <img src="https://cdn-4.motorsport.com/images/amp/6n9WqglY/s1000/aston-martin-f1-team-logo-1.jpg" alt="Logotipo de Aston Martin" class="w-full">
        <p class="text-gray-600">Aston Martin busca crecimiento constante en la F1, con Fernando Alonso y Lance Stroll como sus pilotos principales.</p>
    </section>

    <!-- Alpine -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Alpine</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Logo_of_alpine_f1_team_2022.png/1200px-Logo_of_alpine_f1_team_2022.png" alt="Logotipo de Alpine" class="w-full">
        <p class="text-gray-600">Alpine, con motores Renault y pilotos Pierre Gasly y Esteban Ocon, representa a Francia en la F1.</p>
    </section>

    <!-- Williams -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Williams</h2>
        <img src="https://cdn-4.motorsport.com/images/mgl/2y39NBy6/s8/williams-racing-logo-1.jpg" alt="Logotipo de Williams" class="w-full">
        <p class="text-gray-600">Williams busca regresar a la gloria con Alex Albon y el novato Franco Colapinto, usando motores Mercedes.</p>
    </section>

    <!-- Alfa Romeo (Audi Sauber) -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Alfa Romeo (Audi Sauber)</h2>
        <img src="https://upload.wikimedia.org/wikipedia/it/f/f2/Stake_F1_Team_Kick_Sauber.webp" alt="Logotipo de Alfa Romeo (Audi Sauber)" class="w-full">
        <p class="text-gray-600">Alfa Romeo, en transición a Audi, tiene a Valtteri Bottas y Zhou Guanyu como pilotos.</p>
    </section>

    <!-- AlphaTauri -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">AlphaTauri</h2>
        <img src="https://cdn.worldvectorlogo.com/logos/scuderia-alpha-tauri.svg" alt="Logotipo de AlphaTauri" class="w-full">
        <p class="text-gray-600">AlphaTauri, el equipo secundario de Red Bull, corre con motores Honda y cuenta con Daniel Ricciardo y Yuki Tsunoda.</p>
    </section>

    <!-- Haas -->
    <section class="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Haas</h2>
        <img src="https://cdn.racingnews365.com/Teams/Haas/_503xAUTO_crop_center-center_none/f1_2021_haas_logo.png?v=1643808346" alt="Logotipo de Haas" class="w-full">
        <p class="text-gray-600">Haas, el equipo estadounidense, utiliza motores Ferrari y cuenta con Kevin Magnussen y Nico Hülkenberg.</p>
    </section>
</div>
          </article>
            </template>
        </MainLayout>       
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>