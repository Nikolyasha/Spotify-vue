import { defineStore } from 'pinia'
import {ref} from "vue";
import axios, {Axios} from "axios";

interface ISong {
    id: number,
    title: string,
    duration: string,
    releaseDate: string,
    releasePreview: string,
    artistId: number,
    songs: string[],
}

export const useReleasesStore = defineStore('releases', ()=>{
    const releases  = ref<IRelease[]>([])
    const release  = ref<IRelease>()
    const error = ref <string | null>(null)

    async function fetchReleasesByArtist(idArtist: string | string[]){
        try{
            const response = await axios.get('https://localhost:7017/api/Release/'+idArtist)
            releases.value = response.data
        } catch (err) {
            error.value = 'failed to fetch artists'
        }
    }

    return { releases , release , error , fetchReleasesByArtist }
})