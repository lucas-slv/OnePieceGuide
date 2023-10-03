const btns = document.querySelectorAll('.btn')
const characters = document.querySelectorAll('.character')
btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const btnActive = document.querySelector('.btn.active')
    btnActive.classList.remove('active')
    
    btn.classList.add('active')
    
    const characterActive = document.querySelector('.character.active')
    characterActive.classList.remove('active')

    characters[index].classList.add('active')
  })
})

