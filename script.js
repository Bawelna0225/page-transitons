window.onload = () => {
    const transitionElement = document.querySelector('.transition')
    const anchors = document.querySelectorAll('a.link')

    setTimeout(() => {
        transitionElement.classList.remove('is-active')
    }, 1000)

    anchors.forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault()
            let target = e.target.href
            
            transitionElement.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target
            }, 500)
        })
    })
}