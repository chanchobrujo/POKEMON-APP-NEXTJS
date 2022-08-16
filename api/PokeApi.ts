import axios from 'axios';

const poke_api = axios.create({baseURL: 'https://pokeapi.co/api/v2'});

export default poke_api;
