const SearchText = document.querySelector('.search')
const ListGames =document.querySelectorAll('li')



const searchBoard=(e)=>{
  const text=e.target.value.toUpperCase();

ListGames.forEach(game => {
    if(game.textContent.toUpperCase().indexOf(text) !==-1){
        game.style.display ='block'
    }else{
      game.style.display ='none'
    }
})
}


SearchText.addEventListener('keyup', searchBoard)