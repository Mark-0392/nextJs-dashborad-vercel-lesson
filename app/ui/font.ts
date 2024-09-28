import { Inter, Lusitana, Roboto_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['greek-ext'] })
export const lusitnana = Lusitana({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
