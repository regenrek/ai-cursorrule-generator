<script setup lang="ts">
import { getULinkProps } from '#ui/utils'
const route = useRoute()

console.log("/", route.path)

const links = computed(() => [{
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-home-modern',
  active: (route.path === '/')
}, {
  label: 'About',
  to: '/about',
  icon: 'i-heroicons-academic-cap',
  active: (route.path.startsWith('/about'))
}])

const config = computed(() => ({
  navlink: {
    active: 'text-primary',
    inactive: 'hover:text-primary',
  }
}))

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({})
  }
})

const { ui, attrs } = useUI('appheader', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<template>
    <header>
        <ul>
            <li v-for="(link, index) of links" :key="index" class="relative">
              <ULink
                  v-bind="getULinkProps(link)"
                  @click="link.click"
                   :active-class="ui.navlink.active"
                   :inactive-class="ui.navlink.inactive"
                >
                {{ link.label }}
              </ULink>
            </li>
        </ul>

    </header>
</template>