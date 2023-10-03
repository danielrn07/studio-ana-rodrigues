function state() {
  const openMenu = false
  const services = [
    {
      img: '/assets/img/ic_cabelos.png',
      title: 'Arte em cabelos',
      description: 'Criamos cortes e estilos que\nrealçam sua beleza única.',
    },
    {
      img: '/assets/img/ic_unhas.png',
      title: 'Unhas impecáveis',
      description:
        'Cuidaremos das suas unhas,\nproporcionando-lhes um toque\nde elegância e sofisticação.',
    },
    {
      img: '/assets/img/ic_sobrancelhas.png',
      title: 'Olhar encantador',
      description:
        'Moldamos suas sobrancelhas\ncom precisão para realçar\na beleza natural dos seus.',
    },
  ]

  return { menuSideBar: false, openMenu, services }
}
