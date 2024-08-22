import { defineStore } from 'pinia'
import {ref} from "vue";
import axios, {Axios} from "axios";
import type {RouteParamValue} from "vue-router";

interface IArtist {
    id: number,
    artistName: string,
    artistDescription: string,
    artistPhoto: string,
}

export const useArtistsStore = defineStore('artists', ()=>{
    const artists  = ref<IArtist[]>([])
    const artist  = ref<IArtist>()
    const error = ref <string | null>(null)

    async function fetchArtists(){
        try{
            const response = await axios.get('https://localhost:7017/api/Artist')
            artists.value = response.data
        } catch (err) {
            error.value = 'failed to fetch artists'
        }
    }
    async function fetchArtistById(id: string | string[]){
        try{
            const response = await axios.get('https://localhost:7017/api/Artist/'+id)
            artist.value = response.data
        } catch (err) {
            error.value = 'failed to fetch artists'
        }
    }

    return { artists , artist , error , fetchArtists , fetchArtistById }
})