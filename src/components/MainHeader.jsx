import logo from '../assets/dc-logo.png'

function MainHeader() {


  return (
    <header>
   <figure>
    <img src={logo} alt="" />
   </figure>
   <nav>
    <ul>
      <li>CHARACTERS</li>
      <li>COMICS</li>
      <li>MOVIES</li>
      <li>TV</li>
      <li>GAMES</li>
      <li>COLLECTIBLES</li>
      <li>VIDEOS</li>
      <li>FANS</li>
      <li>NEWS</li>
      <li>SHOP</li>
    </ul>
   </nav>
   </header>
  )
}

export default MainHeader
