import axios from 'axios';
import { GET_SHELTERS } from './types';

export function retrieveShelters(shelters) {
  return {
    type: GET_SHELTERS,
    shelters
  };
}