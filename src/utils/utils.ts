
let APP_SEQUENCE_KEY = new Date().getTime();
export const getAppSequence = () => APP_SEQUENCE_KEY++;

export const getWindowHeight = (): number => {
    if (typeof window !== "undefined") {
        const de = document.documentElement;
        const height = (de && de.offsetHeight) || document.body.offsetHeight;
        return height;
    }
    return 0
}
export const getWindowWidth = (): number => {
    if (typeof window !== "undefined") {
        const de = document.documentElement;
        const width = (de && de.offsetWidth) || document.body.offsetWidth;
        return width;
    }
    return 0;
}