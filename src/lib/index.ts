import URL from './URL.svelte';
import { config } from 'rizom/util'

export default config.external(URL, import.meta.url);
