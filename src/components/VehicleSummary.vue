<script setup lang="ts">
import { computed } from 'vue';


interface VehicleSummaryProps {
  premium: number;
  vehicle: string;
  year: number;
  spec: string;
}

const props = defineProps<VehicleSummaryProps>();


import carImage from '@/assets/blue-car.png';


const formattedPremium = computed(() => {
  
  return props.premium.toLocaleString();
});
</script>

<template>
  <div class="sticky top-8 rounded-2xl bg-card p-8 shadow-lg border border-border">
    <div class="mb-6 text-center">
      <div class="text-4xl font-bold text-foreground">
        AED {{ formattedPremium }}
      </div>
      <div class="mt-1 text-sm text-muted-foreground ">
        Excluding VAT • 1 year validity
      </div>
    </div>

    <div class="mb-6 flex justify-center">
      <img :src="carImage" alt="Vehicle" class="h-48 w-auto object-contain" />
    </div>

    <div class="space-y-4 border-t border-border pt-6">
      
      <div class="flex justify-between">
        <span class="text-sm text-muted-foreground">Vehicle</span>
        <span class="font-semibold text-foreground">{{ props.vehicle }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-sm text-muted-foreground">Year</span>
        <span class="font-semibold text-foreground">{{ props.year }}</span>
      </div>
      
      <div class="flex justify-between">
        <span class="text-sm text-muted-foreground">Spec</span>
        <span class="text-right font-semibold text-foreground">{{ props.spec }}</span>
      </div>
    </div>
  </div>
</template>