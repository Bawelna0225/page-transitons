window.onload = () => {
    const transitionElement = document.querySelector('.transition')
    const anchors = document.querySelectorAll('a')

    setTimeout(() => {
        transitionElement.classList.remove('is-active')
    }, 500)

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