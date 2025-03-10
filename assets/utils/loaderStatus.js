export const showLoader = () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
}

export const hideLoader = () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
}