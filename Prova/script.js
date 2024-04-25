function changePageTitle(Estados) {
    document.title = Estados
  }

function generateInfoSection(src, nome) {
    const ol = document.createElement('ol')
    ol.id = "info-pokemon-label"

    const section = document.querySelector('#nome')
}

async function getPokemonData(name) { 
  try {
  const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)

  const jsonData = await data.json()

  generateInfoSection(jsonData.sprites.front_default, name)
} catch (error) {
  console.error(error)
}}

function getSearchParams() {
  if (!location.search) {
    return
  }

  const urlSearchParams = new URLSearchParams(location.search)

  const pokemonName = urlSearchParams.get('name')

}