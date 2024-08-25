import { defineStore } from 'pinia'
import {ref} from "vue";
import axios, {Axios} from "axios";

interface IRelease {
    id: number,
    title: string,
    releaseType: string,
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
            const response = await axios.get('https://localhost:7017/api/Release/artist/'+idArtist)
            releases.value = response.data
        } catch (err) {
            error.value = 'failed to fetch artists'
        }
    }
    async function fetchReleaseById(idRelease: string | string[]){
        try{
            const response = await axios.get('https://localhost:7017/api/Release/'+idRelease)
            release.value = response.data[0]
        } catch (err) {
            error.value = 'failed to fetch artists'
        }
    }

    return { releases , release , error , fetchReleasesByArtist , fetchReleaseById }
})