// const getHasH = () => location.hash // #/1/
const getHasH = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHasH;