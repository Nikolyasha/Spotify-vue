import { defineStore } from 'pinia'
import {ref} from "vue";

interface IArtist {
    id: number,
    nickname: string,
    avatar: string,
}

export const useArtistsStore = defineStore('artists', ()=>{
    const artists  = ref(<IArtist[]>[
        { id: 0, nickname: "Depeche Mode", avatar: "/src/assets/images/central/artists/Depeche_Mode.jpeg" },
        { id: 1, nickname: "Metallica", avatar: "/src/assets/images/central/artists/Metallica.jpeg" },
        { id: 2, nickname: "The Police", avatar: "/src/assets/images/central/artists/The_police.jpeg" },
        { id: 3, nickname: "R.E.M.", avatar: "/src/assets/images/central/artists/R.E.M.jpeg" },
        { id: 4, nickname: "AC/DC", avatar: "/src/assets/images/central/artists/AC_DC.jpeg" },
        { id: 5, nickname: "Bon Jovi", avatar: "/src/assets/images/central/artists/Bon_Jovi.jpeg" },
        { id: 6, nickname: "Rammstein", avatar: "/src/assets/images/central/artists/Rammstein.jpeg" },
    ])

    return { artists }
})