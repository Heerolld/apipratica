const buscarGatinhos = e => {
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const img = document.createElement('img')
                    img.src = cat.url
                    document.querySelector("#gatinhos").appendChild(img)
                });
            } else {
                alert('Erro na requisição')
            }
        }
    }
    xhr.send()
}
const btnMostrar = document.querySelector('#mostrar-gatinhos')
btnMostrar.addEventListener("click", buscarGatinhos)