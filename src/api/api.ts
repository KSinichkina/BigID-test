import axios from 'axios';
import { USERS_URL } from './costants';

export const requestUsers = () => axios.get(USERS_URL);