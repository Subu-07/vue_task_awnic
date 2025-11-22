<script setup lang="ts">
import { defineProps, computed } from 'vue';
// Assuming 'Button' is a custom component, similar to the React example's "@/components/ui/button"
import { Button } from '@/components/ui/button';
// Assuming 'Info' is an imported icon component (e.g., from 'lucide-vue-next')
import { Info } from 'lucide-vue-next';

// 1. Define Props
interface InsuranceOptionProps {
  icon: any; // Using 'any' for the icon component/content
  title: string;
  subtitle?: string;
  status?: string;
  hasAdd?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<InsuranceOptionProps>(), {
  subtitle: undefined,
  status: undefined,
  hasAdd: false,
  disabled: false,
});

// 2. Define Emits (Equivalent to the onEdit/onAdd functions in React)
const emit = defineEmits(['edit', 'add']);

// 3. Computed Class for Disabled State
const containerClasses = computed(() => [
  'flex',
  'items-center',
  'justify-between',
  'py-4',
  { 'opacity-50': props.disabled },
]);

// 4. Handle Click Events
const handleAction = () => {
  if (props.hasAdd) {
    emit('add');
  } else {
    emit('edit');
  }
};
</script>

<template>
  <div :class="containerClasses">
    <div class="flex items-center gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <component :is="props.icon" class="h-6 w-6" />
      </div>

      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-2">
          <span class="font-medium text-foreground">{{ props.title }}</span>
          <Info class="h-4 w-4 text-muted-foreground" />
        </div>
        
        <span v-if="props.subtitle" class="text-sm text-muted-foreground">{{ props.subtitle }}</span>
        
        <span v-if="props.status" class="text-sm font-semibold text-foreground">{{ props.status }}</span>
      </div>
    </div>

    <div>
      <Button
        variant="outline"
        size="lg"
        @click="handleAction"
        :disabled="props.disabled && props.hasAdd"
        class="rounded-lg "
      >
        {{ props.hasAdd ? 'Add' : 'Edit' }}
      </Button>
    </div>
  </div>
</template>
