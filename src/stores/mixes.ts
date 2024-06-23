import { defineStore } from 'pinia'
import {ref} from "vue";

export const useMixesStore = defineStore('nixes', ()=>{
    const mixes = ref([
        { title: 'Chill Mix' },
        { title: 'Insta Hits' },
        { title: 'Your Top Songs 2021' },
        { title: 'Mellow Songs' },
        { title: 'Anime Lofi & Chillhop Music' },
        { title: 'BG Afro “Select” Vibes' },
        { title: 'Afro “Select” Vibes' },
        { title: 'Happy Hits!' },
        { title: 'Deep Focus' },
        { title: 'Instrumental Study' },
        { title: 'OST Compilations' },
        { title: 'Nostalgia for old souled mill...' },
        { title: 'Mixed Feelings' },
    ])

    const recommended = ref([
        { title: 'Chill Mix' , artists: 'Julia Wolf, Khalid, ayokay and more' , preview : '/src/assets/images/central/mixes/Chill-mix.png' },
        { title: 'Pop Mix' , artists: 'Hey Violet, VÉRITÉ, Timeflies and more', preview : '/src/assets/images/central/mixes/Pop-mix.png' },
        { title: 'Daily Mix 1' , artists: 'Ayra Starr, Lil Kesh, Ed Sheeran and more', preview : '/src/assets/images/central/mixes/Daily-mix-1.png' },
        { title: 'Daily Mix 5' , artists: 'FRENSHIP, Brooke Sierra, Julia Wolf an...', preview : '/src/assets/images/central/mixes/Daily-mix-5.png' },
        { title: 'Folk & Acoustic Mix' , artists: 'Canyon City, Crooked Still, Gregory Alan...', preview : '/src/assets/images/central/mixes/Folk-mix.png' },
        { title: 'Indie Mix' , artists: 'Joywave, The xx, The Neighbourhood and...', preview : '/src/assets/images/central/mixes/Indie-mix.png' },
        { title: 'Pheelz Mix' , artists: 'WizKid, Asake, Tiwa Savage and more', preview : '/src/assets/images/central/mixes/Pheelz-mix.png' },
    ])

    return { mixes , recommended }
})