submit.addEventListener('click',(e)=> {
    console.log(e)
    let ti = title.value
    let des = desc.value
    localStorage.setItem(ti,des)
    wrt.innerHTML =
    `<h3>${ti} : <h4>${des}<h4/><h3/>`

})

del.addEventListener('click',(e)=> {
    console.log(e)
    let del = title.value
    localStorage.removeItem(del)
    wrt.innerHTML =''
})