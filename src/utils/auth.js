export function getLocalStorage(){
    console.log(111);
    const value = localStorage.getItem('loginData')
    return JSON.parse(value);
}
export function setLocalStorage(data){
    console.log(222,JSON.stringify(data));
    localStorage.setItem('loginData',JSON.stringify(data))
    // localStorage.setItem('asd',123)

}
export function delLocalStorage(){
    localStorage.removeItem('loginData')
}