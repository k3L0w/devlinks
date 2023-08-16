function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light") //toggle alterna entre light e dark

    // pegar a tag img
    const img = document.querySelector("#profile img") //pesquisa pelo seletor
    
    // substituir a imagem
    if(html.classList.contains(`light`)) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/assets/avatar-light.png") //adicionar, modificar, seleciontar um atributo.
        img.setAttribute("alt", "Photo Dark Mode")
       
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/assets/avatarPereira.png")
        img.setAttribute("alt", "Photo Ligth Mode")
    }

}