function loadingPage() {
  const loadingElement = document.getElementById('loading')

  setTimeout(() => {
    loadingElement.classList.add('hidden')
    document.body.style.removeProperty('overflow')
  }, 0)
}

window.onload = () => loadingPage()
