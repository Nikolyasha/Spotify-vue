import { defineStore } from 'pinia'
import {ref} from "vue";
import axios, {Axios} from "axios";

interface ISong {
    id: number,
    title: string,
    duration: string,
    trackNumber: number,
    lyrics: string,
    releaseId: number,
    listeners: bigint,
    artists : string[]
}

export const useSongsStore = defineStore('songs', ()=>{
    const songs  = ref<ISong[]>([])
    const song  = ref<ISong>()
    const error = ref <string | null>(null)

    async function fetchSongsByRelease(idRelease: string | string[]){
        try{
            const response = await axios.get('https://localhost:7017/api/Song/'+idRelease)
            songs.value = response.data
        } catch (err) {
            error.value = 'failed to fetch songs'
        }
    }

    return { songs , song , error , fetchSongsByRelease }
})