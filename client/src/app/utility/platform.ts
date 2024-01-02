/* global window */

// declare var process: any;

const BROWSER_PLATFORM: boolean = typeof window !== 'undefined' && typeof window.document !== 'undefined';


export {BROWSER_PLATFORM};