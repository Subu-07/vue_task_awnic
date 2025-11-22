<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router';
import { computed } from 'vue';
// Assuming 'cn' is a utility function for conditionally merging Tailwind classes
// If you don't have a 'cn' equivalent, you can implement it or use an array/object approach for classes.
import { cn } from '@/lib/utils'; 

// 1. Define Props (Extending RouterLinkProps)
interface NavLinkCompatProps extends /* @vue-ignore */ Omit<RouterLinkProps, 'class'> {
  // 'to' is inherited from RouterLinkProps
  className?: string; // Base class
  activeClassName?: string; // Class when the link is active
  pendingClassName?: string; // Class when the navigation is pending (less common in Vue Router)
}

const props = defineProps<NavLinkCompatProps>();

// 2. Compute the to-prop value (RouterLink expects the `to` prop)
const to = computed(() => props.to);

</script>

<template>
  <RouterLink :to="to" custom v-slot="{ href, isActive, isExactActive, navigate }">
    <a 
      :href="href" 
      @click="navigate"
      :class="cn(
        props.className, 
        isActive && props.activeClassName, 
        // Note: Vue Router typically doesn't expose a 'isPending' state 
        // in the same way React Router does, so we focus on isActive.
        // If you need pending state, you'd integrate with global router events.
        // For simplicity and alignment, we'll keep the prop but note its limited use here.
        // isPending && props.pendingClassName 
      )"
    >
      <slot />
    </a>
  </RouterLink>
</template>