submit.addEventListener('click',(e)=> {
    console.log(e)
    let ti = title.value
    let des = desc.value
    localStorage.setItem(ti,des)
    wrt.innerHTML = wrt.innerHTML +
    `<h3>${ti} : <span class = "small">${des}<span/><h3/>`
    title.value = ''
    desc.value = ''

})

del.addEventListener('click',(e)=> {
    console.log(e)
    let del = title.value
    localStorage.clear()
    wrt.innerHTML =''
})