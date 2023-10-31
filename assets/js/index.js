const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

function state() {
  const openMenu = false

  const services = [
    {
      img: '/assets/img/icon/ic_cabelos.png',
      title: 'Arte em cabelos',
      description: 'Criamos cortes e estilos que\nrealçam sua beleza única.',
    },
    {
      img: '/assets/img/icon/ic_sobrancelhas.png',
      title: 'Olhar encantador',
      description:
        'Moldamos suas sobrancelhas\ncom precisão para realçar\na beleza natural dos seus.',
    },
    {
      img: '/assets/img/icon/ic_unhas.png',
      title: 'Unhas impecáveis',
      description:
        'Cuidaremos das suas unhas,\nproporcionando-lhes um toque\nde elegância e sofisticação.',
    },
  ]

  const gallery = [
    { path: '/assets/img/gallery/foto1.png' },
    { path: '/assets/img/gallery/foto2.png' },
    { path: '/assets/img/gallery/foto3.png' },
    { path: '/assets/img/gallery/foto4.png' },
    { path: '/assets/img/gallery/foto5.png' },
    { path: '/assets/img/gallery/foto6.png' },
    { path: '/assets/img/gallery/foto7.png' },
    { path: '/assets/img/gallery/foto8.png' },
    { path: '/assets/img/gallery/foto9.png' },
    { path: '/assets/img/gallery/foto10.png' },
  ]

  const contact = [
    {
      icon: '/assets/img/icon/ic_local.svg',
      title: 'Conheça nosso espaço',
      description: 'Rua João Lopes Araújo | Salomão - BA',
    },
    {
      icon: '/assets/img/icon/ic_whatsapp.svg',
      title: 'Agende seu horário',
      description:
        'teste',
    },
    {
      icon: '/assets/img/icon/ic_instagram.svg',
      title: 'Veja mais de nosso trabalho',
      description:
        'https://www.instagram.com/studioanarodry/',
    },
  ]

  return { menuSideBar: false, openMenu, services, gallery, contact }
}

new Swiper('.carousel-gallery', {
  watchSlidesProgress: true,
  loop: true,
  autoplay: true,
  breakpoints: {
    [breakpoints.xs]: {
      slidesPerView: 2,
    },
    [breakpoints.sm]: {
      slidesPerView: 2,
    },
    [breakpoints.md]: {
      slidesPerView: 4,
    },
    [breakpoints.lg]: {
      slidesPerView: 4,
    },
    [breakpoints.xl]: {
      slidesPerView: 5,
    },
  },
})
