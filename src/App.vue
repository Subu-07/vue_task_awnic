<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Shield,
  Wrench,
  Heart,
  User,
  CloudRain,
  Car,
  Bug,
  Plane,
  Home,
  Luggage,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'


import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import InsuranceOption from './components/InsuranceOption.vue'
import VehicleSummary from './components/VehicleSummary.vue'

// --- Main App Logic (Index) ---

const premium = ref(2100)
const minPremium = 670
const maxPremium = 6500


const handleSliderChange = (value?: number[] | undefined) => {
  if (!value || value.length === 0) return
  const first = value[0]
  if (first === undefined) return
  premium.value = first
}

const formattedPremium = computed(() => premium.value.toLocaleString())


const logoError = ref(false)
const handleLogoError = () => {
  logoError.value = true
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <header class="border-b border-border bg-card px-4 sm:px-6 py-3">
      <div class="mx-auto max-w-7xl">
        <img
          v-if="!logoError"
          src="https://awnic.com/logo.svg"
          alt="Al Wathba Insurance"
          class="h-10 sm:h-12 -primary"
          @error="handleLogoError"
        />
        <div v-else class="text-xl sm:text-2xl font-bold text-primary">AL WATHBA INSURANCE</div>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
      <div class="flex flex-col lg:flex-row lg:gap-12">
        <div class="grow">
          <div class="mb-6 sm:mb-8 ">
            <h1 class="mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">
              We'll help you Pick Your Premium so you get the right <br>protection at the right price.
            </h1>
            <p class="text-sm sm:text-base text-muted-foreground">
              Adjust the premium with the slider to review the policy inclusions.
            </p>
          </div>

          <div class="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-card p-4 sm:p-6 ">
            <div class="mb-4 sm:mb-6 text-center">
              <div class="text-2xl md:text-3xl font-bold text-foreground">
                AED {{ formattedPremium }}
              </div>
              <div class="text-xs uppercase tracking-wide text-primary mt-0.5">
                PER ANNUM
              </div>
            </div>

            <div class="relative mb-3 sm:mb-4">
              <Slider
                :modelValue="[premium]"
                @update:modelValue="handleSliderChange"
                @value-change="handleSliderChange"
                :min="minPremium"
                :max="maxPremium"
                :step="10"
                class="w-full"
              />
            </div>

            <div class="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
              <div class="flex items-center gap-2 sm:gap-3">
                <button
                  class="flex items-center justify-center bg-card rounded-full p-1 sm:p-2 border border-border shadow-sm hover:shadow-md transition-shadow"
                  @click="handleSliderChange([Math.max(premium - 100, minPremium)])"
                  aria-label="Decrease Premium"
                >
                  <ChevronLeft class="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                <div class="text-xs sm:text-sm">AED {{ minPremium }}</div>
              </div>

              <div class="flex items-center gap-2 sm:gap-3">
                <div class="text-xs sm:text-sm">AED {{ maxPremium }}</div>
                <button
                  class="flex items-center justify-center bg-card rounded-full p-1 sm:p-2 border border-border shadow-sm hover:shadow-md transition-shadow"
                  @click="handleSliderChange([Math.min(premium + 100, maxPremium)])"
                  aria-label="Increase Premium"
                >
                  <ChevronRight class="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>

          <div class="rounded-xl sm:rounded-2xl bg-card p-4 sm:p-6 ">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-4">
                <InsuranceOption
                  :icon="Shield"
                  title="Third-party Liability (TPL) Coverage"
                  subtitle="Own damage not covered"
                  @edit="() => console.log('Edit TPL')"
                />
                <InsuranceOption
                  :icon="Wrench"
                  title="Premium Workshops"
                  subtitle="Explore"
                  @edit="() => console.log('Edit Workshops')"
                />
                <InsuranceOption
                  :icon="Heart"
                  title="Personal Injury"
                  status="Limit up to ₿20,000"
                  @edit="() => console.log('Edit Injury')"
                />
                <InsuranceOption
                  :icon="User"
                  title="Personal Accident to Driver"
                  status="Limit up to ₿200,000/-"
                  @edit="() => console.log('Edit PA Driver')"
                />
                <InsuranceOption
                  :icon="CloudRain"
                  title="Natural Perils"
                  status="Storm/Flood/Rain & Fresh Water Damage"
                  @edit="() => console.log('Edit Natural Perils')"
                />
                <InsuranceOption
                  :icon="Car"
                  title="Roadside Assistance"
                  status="Silver"
                  @edit="() => console.log('Edit Roadside')"
                />
                <InsuranceOption
                  :icon="CreditCard"
                  title="*Orange Card"
                  subtitle="No Coverage"
                  :hasAdd="true"
                  :disabled="true"
                  @add="() => console.log('Add Orange Card')"
                />
                <InsuranceOption
                  :icon="Luggage"
                  title="Loss of personal belongings"
                  status="Limit up to ₿1,000"
                  @edit="() => console.log('Edit Luggage')"
                />
              </div>

              <div class="space-y-4">
                <InsuranceOption
                  :icon="CloudRain"
                  title="Windscreen damage"
                  subtitle="No Coverage"
                  :hasAdd="true"
                  @add="() => console.log('Add Windscreen')"
                />
                <InsuranceOption
                  :icon="User"
                  title="Personal Accident Per Passenger"
                  status="Limit up to ₿200,000/- each"
                  @edit="() => console.log('Edit PA Passenger')"
                />
                <InsuranceOption
                  :icon="CloudRain"
                  title="Off-road Extension"
                  subtitle="No Coverage"
                  :hasAdd="true"
                  @add="() => console.log('Add Off-road')"
                />
                <InsuranceOption
                  :icon="Car"
                  title="Hire Car Allowance"
                  status="7 Days"
                  @edit="() => console.log('Edit Hire Car')"
                />
                <InsuranceOption
                  :icon="Bug"
                  title="Cyber Insurance"
                  status="Bronze"
                  @edit="() => console.log('Edit Cyber')"
                />
                <InsuranceOption
                  :icon="Plane"
                  title="Travel"
                  status="21 Days"
                  @edit="() => console.log('Edit Travel')"
                />
                <InsuranceOption
                  :icon="Home"
                  title="Home"
                  status="Standard Coverage"
                  @edit="() => console.log('Edit Home')"
                />
              </div>
            </div>
          </div>

          <div class="mt-6 sm:mt-8 flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="lg"
              class=" text-muted-foreground border-border bg-card rounded-full"
            >
              Back
            </Button>
            <Button size="lg" class=" bg-primary text-primary-foreground rounded-full">
              Continue
            </Button>
          </div>
        </div>

        <div class="hidden lg:block lg:w-[320px]">
          <VehicleSummary
            :premium="premium"
            vehicle="Toyota Corolla"
            :year="2022"
            spec="2.0 GR 7 Speed CVT Transmission"
          />
        </div>
      </div>
    </main>
  </div>
</template>