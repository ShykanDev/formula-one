<template>
  <div class="">
    <!-- Main Layout -->
    <MainLayout>
      <!-- Header -->
      <template #main>
        <section class="relative w-full overflow-hidden">
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
          <img class="object-cover w-full h-auto"
            src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Mexico"
            alt="Fórmula 1 en México"><h2
            class="absolute top-[-100px] overflow-hidden inset-0 flex items-center justify-center text-white font-bold font-karla animate-fade-right animate-duration-[2000ms] text-4xl md:text-5xl lg:text-6xl">
            Fórmula 1
          </h2>

          <h2
            class="absolute sm:top-[50px] bottom-0 overflow-hidden left-0 right-0 flex items-center justify-center font-bold text-white font-karla animate-fade-left top-4 animate-delay-500 animate-duration-[2000ms] text-6xl md:text-8xl lg:text-9xl">
            2024
          </h2>

          <h2
            class="absolute bottom-0 overflow-hidden left-0 right-0 flex items-center justify-center font-bold text-white font-karla animate-fade-up sm:top-[150px] top-20 pt-11 animate-delay-[2100ms] animate-duration-[2000ms] text-xl md:text-3xl lg:text-4xl">
            Mexico 25-27 OCT
          </h2>
        </section>

        <div class="w-full py-10 bg-slate-50">
          <div class="w-full ">
            <!-- Título principal -->
            <!-- <h1 class="mb-6 text-4xl font-bold text-center text-gray-800">Fórmula 1 (F1)</h1> -->
            <div class="flex justify-center w-full">
              <img class="" src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" alt="">
            </div>

            <!-- Sección de descripción general -->
            <section class="mt-5 mb-12">
              <h2 class="mb-4 text-2xl font-semibold text-gray-800 font-poppins">¿Qué es la Fórmula 1?</h2>
              <p class="font-medium text-gray-700 font-karla">
                La Fórmula 1 (F1) es la categoría más alta del automovilismo, reconocida como el pináculo de la
                tecnología y el rendimiento en los deportes de motor. Organizada por la Federación Internacional del
                Automóvil (FIA), la F1 se compone de una serie de carreras llamadas Grandes Premios, celebradas en
                circuitos de todo el mundo.
              </p>
            </section>

            <!-- Sección de campeonato -->
            <section class="w-full py-5 mb-12 bg-white">
              <h2 class="mb-4 text-2xl font-semibold text-gray-900 font-poppins">El Campeonato de Fórmula 1</h2>
              <p class="mb-4 font-medium text-gray-700 font-karla">
                El campeonato de F1 se divide en dos títulos principales: el Campeonato de Pilotos y el Campeonato de
                Constructores. Los pilotos y equipos compiten en distintas carreras a lo largo de la temporada, buscando
                acumular puntos y alcanzar la gloria.
              </p>
              <ul class="pl-6 text-gray-700 list-decimal">
                <li class="font-bold"> El Campeonato de Pilotos se otorga al piloto con más puntos.</li>
                <li class="font-bold"> El Campeonato de Constructores se otorga al equipo que suma más puntos
                  combinados.</li>
              </ul>
            </section>

            <!-- Sección del formato de un Gran Premio -->
            <section class="py-3 mb-12 bg-white">
              <h2 class="mb-4 text-2xl font-semibold text-gray-800 font-poppins">Formato de un Gran Premio</h2>
              <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div class="gap-2 p-6 bg-white rounded-lg shadow">
                  <h3 class="mb-2 text-xl font-semibold text-gray-800 font-poppins">Prácticas Libres</h3>
                  <div class="flex justify-center w-full">
                    <img class="rounded-md"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6EAwsuaaoWUOOqvU3tiVv5xC_LMKa_bWHg&s"
                      alt="">
                  </div>
                  <p class="mt-2 text-sm text-gray-700 font-poppins">
                    Tres sesiones donde los equipos ajustan el coche y prueban estrategias antes de la carrera.
                  </p>
                </div>
                <div class="gap-2 p-6 bg-white rounded-lg shadow">
                  <h3 class="mb-2 text-xl font-semibold text-gray-800 font-poppins">Clasificación</h3>
                  <div class="flex justify-center w-full">
                    <img class="w-[80%] rounded-md"
                      src="https://www.informador.mx/__export/1677808738614/sites/elinformador/img/2023/03/02/fxrmula_1_crop1677808379839.jpg_788543494.jpg"
                      alt="">
                  </div>
                  <p class="mt-2 text-sm text-gray-700 font-poppins">
                    Sesión que decide el orden de salida de la carrera. El piloto más rápido obtiene la pole
                    position.
                  </p>
                </div>
                <div class="gap-2 p-6 bg-white rounded-lg shadow">
                  <h3 class="mb-2 text-xl font-semibold text-gray-800">Carrera</h3>
                  <div class="flex justify-center w-full">
                    <img class="w-[80%] rounded-md"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjva9NTzQmUwWBfeT1z3ah_R4hNLl2MtYBIw&s"
                      alt="">
                  </div>
                  <p class="mt-2 text-sm text-gray-700 font-poppins">
                    El evento principal. Los pilotos compiten por la victoria en un recorrido de más de 300 km.
                  </p>
                </div>
              </div>
            </section>

            <!-- Sección de puntuación -->
            <section class="px-5 mb-12 font-poppins">
              <h2 class="mb-4 text-2xl font-semibold text-gray-800">Sistema de Puntuación</h2>
              <p class="mb-4 text-gray-700">
                Los pilotos ganan puntos según su posición final en cada carrera. El sistema actual de puntuación es el
                siguiente para los 10 primeros:
              </p>
              <table class="min-w-full bg-white rounded-lg shadow">
                <thead class="text-white bg-sky-900">
                  <tr>
                    <th class="px-4 py-2">Posición</th>
                    <th class="px-4 py-2">Puntos</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700">
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">1</td>
                    <td class="px-4 py-2 text-center">25</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">2</td>
                    <td class="px-4 py-2 text-center">18</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">3</td>
                    <td class="px-4 py-2 text-center">15</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">4</td>
                    <td class="px-4 py-2 text-center">12</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">5</td>
                    <td class="px-4 py-2 text-center">10</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">6</td>
                    <td class="px-4 py-2 text-center">8</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">7</td>
                    <td class="px-4 py-2 text-center">6</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">8</td>
                    <td class="px-4 py-2 text-center">4</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">9</td>
                    <td class="px-4 py-2 text-center">2</td>
                  </tr>
                  <tr class="border-t">
                    <td class="px-4 py-2 text-center">10</td>
                    <td class="px-4 py-2 text-center">1</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <!-- Sección de leyendas y equipos icónicos -->
            <section class="w-full py-5 mb-12 bg-white font-poppins">
              <h2 class="mb-4 text-2xl font-semibold text-gray-800">Equipos y Pilotos Icónicos</h2>
              <p class="mb-4 text-gray-700">
                A lo largo de la historia, la Fórmula 1 ha visto a algunos de los pilotos y equipos más legendarios.
                Algunos de los nombres más destacados son:
              </p>
              <ul class="pl-6 space-y-4 text-lg text-gray-800 list-disc">
                <li class="flex items-center p-2 transition duration-300 rounded-lg shadow bg-slate-50 hover:bg-gray-100">
                  <strong class="text-slate-700">Michael Schumacher</strong> <span class="text-gray-600">(7 títulos
                    mundiales)</span>
                </li>
                <li class="flex items-center p-2 transition duration-300 rounded-lg shadow bg-slate-50 hover:bg-gray-100">
                  <strong class="text-slate-700">Ayrton Senna</strong> <span class="text-gray-600">(3 títulos
                    mundiales)</span>
                </li>
                <li class="flex items-center p-2 transition duration-300 rounded-lg shadow bg-slate-50 hover:bg-gray-100">
                  <strong class="text-slate-700">Lewis Hamilton</strong> <span class="text-gray-600">(7 títulos
                    mundiales)</span>
                </li>
                <li class="flex items-center p-2 transition duration-300 rounded-lg shadow bg-slate-50 hover:bg-gray-100">
                  <strong class="text-slate-700">Scuderia Ferrari</strong> <span class="text-gray-600">(equipo con más
                    victorias)</span>
                </li>
                <li class="flex items-center p-2 transition duration-300 rounded-lg shadow bg-slate-50 hover:bg-gray-100">
                  <strong class="text-slate-700">Mercedes-AMG Petronas</strong> <span class="text-gray-600">(dominante en
                    la era híbrida)</span>
                </li>
              </ul>

            </section>

            <!-- Sección del futuro de la F1 -->
            <section class="py-5 font-poppins">
              <h2 class="mb-4 text-2xl font-semibold text-gray-800">El Futuro de la Fórmula 1</h2>
              <p class="text-gray-700">
                Con un enfoque hacia la sostenibilidad, la Fórmula 1 busca ser neutral en carbono para 2030, utilizando
                tecnologías de vanguardia como combustibles sostenibles y motores más eficientes. Nuevas carreras en
                ciudades clave como Miami y Las Vegas apuntan a expandir su popularidad global.
              </p>
            </section>
          </div>
          <section id="faq" class="p-6 bg-white dark:bg-gray-900">
  <h3 class="mb-8 font-karla text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:tracking-[-0.36px] lg:mb-8 lg:text-4xl">
    Datos Curiosos de la F1
  </h3>
  <div class="max-w-2xl mx-auto">
    <details class="mb-4 border-b border-gray-200">
      <summary class="flex items-center justify-between py-4 text-lg font-medium leading-tight text-gray-900 cursor-pointer hover:bg-gray-100">
        <span>¿Cuál es la velocidad máxima registrada en una carrera de F1?</span>
        <svg class="w-6 h-6 transition-transform duration-200 transform" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </summary>
      <p class="p-4 text-gray-700">
        La velocidad máxima registrada en una carrera de F1 es de 372.5 km/h (231.5 mph), establecida por el piloto Valtteri Bottas durante el Gran Premio de México en 2016.
      </p>
    </details>

    <details class="mb-4 border-b border-gray-200">
      <summary class="flex items-center justify-between py-4 text-lg font-medium leading-tight text-gray-900 cursor-pointer hover:bg-gray-100">
        <span>¿Quién tiene el récord de más victorias en la F1?</span>
        <svg class="w-6 h-6 transition-transform duration-200 transform" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </summary>
      <p class="p-4 text-gray-700">
        El récord de más victorias en la Fórmula 1 lo tiene Lewis Hamilton, con más de 100 triunfos a lo largo de su carrera.
      </p>
    </details>

    <details class="mb-4 border-b border-gray-200">
      <summary class="flex items-center justify-between py-4 text-lg font-medium leading-tight text-gray-900 cursor-pointer hover:bg-gray-100">
        <span>¿Qué equipo ha ganado más campeonatos de constructores?</span>
        <svg class="w-6 h-6 transition-transform duration-200 transform" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </summary>
      <p class="p-4 text-gray-700">
        Ferrari es el equipo con más campeonatos de constructores en la historia de la F1, habiendo ganado el título en 16 ocasiones.
      </p>
    </details>

    <details class="mb-4 border-b border-gray-200">
      <summary class="flex items-center justify-between py-4 text-lg font-medium leading-tight text-gray-900 cursor-pointer hover:bg-gray-100">
        <span>¿Cuánto dura una carrera de F1?</span>
        <svg class="w-6 h-6 transition-transform duration-200 transform" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </summary>
      <p class="p-4 text-gray-700">
        Una carrera de F1 generalmente dura entre 1.5 y 2 horas, dependiendo de la longitud del circuito y de las condiciones de la carrera.
      </p>
    </details>

    <details class="border-b border-gray-200">
      <summary class="flex items-center justify-between py-4 text-lg font-medium leading-tight text-gray-900 cursor-pointer hover:bg-gray-100">
        <span>¿Qué piloto es conocido como el "Rey de la F1"?</span>
        <svg class="w-6 h-6 transition-transform duration-200 transform" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </summary>
      <p class="p-4 text-gray-700">
        Michael Schumacher es conocido como el "Rey de la F1" por su impresionante récord de siete campeonatos mundiales, un logro que muchos consideran un hito en el deporte.
      </p>
    </details>
  </div>
</section>



        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>