const input1 = document.getElementById('input1')
const form1 = document.getElementById('form')

form1.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(input1.value===''){
        alert('Field cannot be empty')
    }else{
        let input = parseFloat(input1.value)
        let cal = (input * 9/5) + 32
        const C = document.getElementById('C')
        const F = document.getElementById('F')
        C.innerHTML =`C = ${input} ⁰C`
        F.innerHTML =`F = ${cal} ⁰F`
    }
})


const input2 = document.getElementById('input2')
const form2 = document.getElementById('form2')

form2.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(input2.value===''){
        alert('Field cannot be empty')
    }else{
        let input = parseFloat(input2.value)
        let cal = (input - 32) * 5/9
        const C = document.getElementById('C2')
        const F = document.getElementById('F2')
        F.innerHTML =`F = ${input} ⁰F`
        C.innerHTML =`C = ${cal} ⁰C`
    }
})

const input3 = document.getElementById('input3')
const form3 = document.getElementById('form3')

form3.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(input3.value===''){
        alert('Field cannot be empty')
    }else{
        let input = parseFloat(input3.value)
        let cal = input - 273.15
        const K = document.getElementById('K')
        const C = document.getElementById('C3')
        K.innerHTML =`K = ${input} ⁰k`
        C.innerHTML =`C = ${cal} ⁰C`
    }
})

const input4 = document.getElementById('input4')
const form4 = document.getElementById('form4')

form4.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(input4.value===''){
        alert('Field cannot be empty')
    }else{
        let input = parseFloat(input4.value)
        let cal = input + 273.15
        const K = document.getElementById('K2')
        const C = document.getElementById('C4')
        C.innerHTML =`C = ${input} ⁰C`
        K.innerHTML =`K = ${cal} ⁰K`
    }
})

const input5 = document.getElementById('input5')
const form5 = document.getElementById('form5')

form5.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(input5.value===''){
        alert('Field cannot be empty')
    }else{
        let input = parseFloat(input5.value)
        let cal = (input - 491.67)/1.8
        const R = document.getElementById('R')
        const C = document.getElementById('C5')
        R.innerHTML =`R = ${input} ⁰R`
        C.innerHTML =`C = ${cal} ⁰C`
    }
})