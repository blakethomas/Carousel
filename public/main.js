async function slides() {
  const response = await fetch('http://localhost:3000/image')
  return await response.json()
}

const carousel = {
  slides: null,
  current: 0
}

const switchSlide = () => {
  const image = document.querySelector('.img')
  const indicatorOne = document.querySelector('#indicator-one')
  const indicatorTwo = document.querySelector('#indicator-two')
  const indicatorThree = document.querySelector('#indicator-three')

  image.setAttribute('src', `${carousel.slides[carousel.current].url}`)

  switch (carousel.current){
    case 0:
    indicatorThree.classList.remove('active')
    indicatorTwo.classList.remove('active')
    indicatorOne.classList.add('active')
    break
    case 1:
    indicatorOne.classList.remove('active')
    indicatorThree.classList.remove('active')
    indicatorTwo.classList.add('active')
    break
    case 2:
    indicatorTwo.classList.remove('active')
    indicatorOne.classList.remove('active')
    indicatorThree.classList.add('active')
  }
}

slides()
.then(data => (carousel.slides = data))
.catch(err => console.log(err))

setInterval(() => {
  if(carousel.current < carousel.slides.length - 1){
    carousel.current++
  }
  else{
    carousel.current = 0
  }
  switchSlide()
}, 3000)

document.querySelector('.right').addEventListener('click', () => {
  if(carousel.current < carousel.slides.length - 1){
    carousel.current++
  }
  else{
    carousel.current = 0
  }
  switchSlide()
})


document.querySelector('.left').addEventListener('click', () => {
  if(carousel.current > 0){
    carousel.current--
  }
  else {
    carousel.current = carousel.slides.length - 1
  }
  switchSlide()
})
