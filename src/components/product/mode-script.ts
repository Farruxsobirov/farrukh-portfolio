/** Runs before the page paints (inlined in the product layout) so there is no flash. */
export const modeScript = `(function(){try{var m=localStorage.getItem('mode');if(m!=='light'&&m!=='dark'){m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.mode=m}catch(e){document.documentElement.dataset.mode='light'}})();`;
