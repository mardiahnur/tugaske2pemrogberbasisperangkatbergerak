<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Prakiraan Cuaca Jakarta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Data Cuaca (time dan temperature_2m)</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <table style="width:100%; border-collapse: collapse; text-align:left; font-size:14px;">
            <thead>
              <tr style="background-color:#f0f0f0;">
                <th style="border:1px solid #ccc; padding:8px;">time</th>
                <th style="border:1px solid #ccc; padding:8px;">temperature_2m (°C)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(temp, index) in weatherData.temperature_2m" :key="index">
                <td style="border:1px solid #ccc; padding:8px;">{{ weatherData.time[index] }}</td>
                <td style="border:1px solid #ccc; padding:8px;">{{ temp }}</td>
              </tr>
            </tbody>
          </table>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getWeatherData } from '@/services/EndPointAccess';

const weatherData = ref<{ time: string[]; temperature_2m: number[] }>({
  time: [],
  temperature_2m: [],
});

onMounted(async () => {
  const data = await getWeatherData();
  weatherData.value = data.hourly;
});
</script>
