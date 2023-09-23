const getLocalStorage = () =>{
    const job = localStorage.getItem('job')
    // console.log(job)
    if(job){
        return JSON.parse(job)
    // console.log(JSON.parse(job))

    } return []
}
const setLocalStorage = (id) =>{
    const callLocalStore = getLocalStorage()
    const findId = callLocalStore.find(loc => loc === id)
    if(findId){
        return
    }else{
        callLocalStore.push(id)
        localStorage.setItem('job', JSON.stringify(callLocalStore))
    }
    console.log(findId, callLocalStore, id)
}

export {getLocalStorage, setLocalStorage}