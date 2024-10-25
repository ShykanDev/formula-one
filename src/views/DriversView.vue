<template>
    <div>
      <MainLayout>
        <template #main>
            <section class="relative w-full overflow-hidden">
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
          <img class="object-cover w-full h-auto"
            src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,g_faces,ar_16:9/content/dam/fom-website/manual/Misc/2021manual/2021BritishManualAdds/2022CarImages/2022CarImageSTUDIO/DXI13865_20210715121506180_EDIT_2_20210715125904868"
            alt="Fórmula 1 en México"><h2
            class="absolute top-[-100px] overflow-hidden inset-0 flex items-center justify-center text-white font-bold font-karla animate-fade-right animate-duration-[2000ms] text-4xl md:text-5xl lg:text-6xl">
            Fórmula 1
          </h2>

          <h2
            class="absolute sm:top-[50px] bottom-0 overflow-hidden left-0 right-0 flex items-center justify-center font-bold text-white font-karla animate-fade-left top-4 animate-delay-500 animate-duration-[2000ms] text-6xl md:text-8xl lg:text-9xl">
            Drivers
          </h2>

        </section>
        <article class="p-5 bg-slate-200">
          <section class="p-4 bg-white rounded-md drivers-section font-poppins">
            <h2 class="mb-4 text-4xl font-medium text-center font-poppins">Drivers 2024</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div class="p-6 transition-transform transform bg-[#ff0000] hover:bg-[#cc0000] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Max Verstappen</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/verstappen.png" alt="">
                <p class="mt-2 text-white">Campeón defensor con un estilo de conducción agresivo y un fuerte ritmo de carrera.</p>

              </div>
              <div class="p-6 transition-transform transform bg-[#00d2be] hover:bg-[#008b77] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Sergio Pérez</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/perez.png" alt="">
                <p class="mt-2 text-white">Piloto hábil conocido por su manejo de neumáticos y sus podios.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#00bfff] hover:bg-[#0085c7] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">George Russell</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/russell.png" alt="">
                <p class="mt-2 text-white">Talento prometedor con un enfoque en la estrategia de carrera y rápida adaptación.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#ff8700] hover:bg-[#c56d00] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Lando Norris</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/norris.png" alt="">
                <p class="mt-2 text-white">Joven piloto talentoso conocido por su velocidad y carisma dentro y fuera de la pista.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#0072b8] hover:bg-[#005fa3] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Lewis Hamilton</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/hamilton.png" alt="">
                <p class="mt-2 text-white">Siete veces campeón, un piloto legendario con una consistencia notable.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#ff4500] hover:bg-[#cc3700] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Charles Leclerc</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/leclerc.png" alt="">
                <p class="mt-2 text-white">Joven y talentoso, conocido por su excepcional velocidad en calificación y destreza en carrera.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#b40000] hover:bg-[#9f0000] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Carlos Sainz</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/sainz.png" alt="">
                <p class="mt-2 text-white">Competidor consistente con un fuerte ritmo de carrera y gran jugador de equipo.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#3d85c6] hover:bg-[#007b8a] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Fernando Alonso</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/alonso.png" alt="">
                <p class="mt-2 text-white">Dos veces campeón del mundo, conocido por su experiencia y astucia táctica.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#d10000] hover:bg-[#a30000] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Esteban Ocon</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/ocon.png" alt="">
                <p class="mt-2 text-white">Fuerte contendiente con gran destreza en carrera y rendimiento consistente.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#3d85c6] hover:bg-[#007b8a] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">

                <h3 class="text-xl font-semibold text-center text-white font-karla">Lance Stroll</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/stroll.png" alt="">
                <p class="mt-2 text-white">Joven piloto con potencial, trabajando para mejorar su consistencia en carrera.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#39a562] hover:bg-[#63ff70] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">

                <h3 class="text-xl font-semibold text-center text-white font-karla">Guanyu Zhou</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/zhou.png" alt="">
                <p class="mt-2 text-white">Piloto chino que está destacando con sus fuertes actuaciones y potencial.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#39a562] hover:bg-[#63ff70] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Valteri Bottas</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/bottas.png" alt="">
                <p class="mt-2 text-white">Trabajando duro para mejorar sus habilidades y establecerse en el deporte.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#ff8700] hover:bg-[#c56d00] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Oscar Piastri</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/piastri.png" alt="">
                <p class="mt-2 text-white">Talento novato, demostrando habilidades impresionantes y capacidad de aprendizaje rápido.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#1e90ff] hover:bg-[#1c75a8] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Kevin Magnussen</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/magnussen.png" alt="">
                <p class="mt-2 text-white">Piloto veterano con valiosa experiencia y determinación.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#2e4ca0] hover:bg-[#4a83ec] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Franco Colapinto</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/colapinto.png" alt="">
                <p class="mt-2 text-white">Con sangre de campeón, buscando su camino hacia la cima.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#2e4ca0] hover:bg-[#4a83ec] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Alex Albon</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/albon.png" alt="">
                <p class="mt-2 text-white">Emerging talent, looking to prove himself in the competitive field.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#0052cc] hover:bg-[#004aaa] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Yuki Tsunoda</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/tsunoda.png" alt="">
                <p class="mt-2 text-white">Fast and aggressive, known for his competitive spirit and enthusiasm.</p>
              </div>
              <div class="p-6 transition-transform transform bg-[#0052cc] hover:bg-[#004aaa] bg-center bg-cover rounded-lg shadow-lg driver-card hover:scale-105">
                <h3 class="text-xl font-semibold text-center text-white font-karla">Liam Lawson</h3>
                <img src="https://media.formula1.com/image/upload/v1712849101/content/dam/fom-website/drivers/2024Drivers/lawson.png" alt="">
                <p class="mt-2 text-white">Chasing talent, looking to prove himself in the competitive field.</p>
              </div>
            </div>
          </section>
        </article>

        </template>
      </MainLayout>
    </div>
  </template>
  <script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue';
</script>
  <style scoped>
  .drivers-section {
    background-color: #f8f8f8;
  }
  
  .driver-card {
    transition: transform 0.3s, background-color 0.3s;
  }
  </style>
  