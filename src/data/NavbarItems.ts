import type { INavbarItem } from '@/interfaces/INavbarItem'
import { useRouter } from 'vue-router'

export function createNavbarItems() {
  const router = useRouter()

  return [
    {
      label: 'Despre',
      command: () => {
        router.push('/despre')
      },
    },
    {
      label: 'Produse',
      command: () => {
        router.push('/produse')
      },
    },
    {
      label: 'Contact',
      command: () => {
        router.push('/contact')
      },
    },
  ] as INavbarItem[]
}
