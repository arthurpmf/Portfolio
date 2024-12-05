import './index.css'
import minhafoto from './assets/eu.jpg'
import fotopoke from './assets/poke.png'
import fototodo from './assets/todo.png'
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {

  return (
   <>
   <nav className='navbar'>
    <ul className='navbarlista'>
      <li><a href='#sobre'>Sobre Mim</a></li>
      <li><a href='#projetos'>Projetos</a></li>
      <li><a href="#contatos">Contatos</a></li>
    </ul>
   </nav>

   <section id='sobre' className='section'>
    <h2>Sobre Mim</h2>
    <img src={minhafoto} alt="Foto" className='profile-image' />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aut quia asperiores fugit vero quas porro. Debitis, velit voluptates iste odio placeat omnis explicabo itaque et dignissimos ab temporibus aliquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vero odio laboriosam porro dolorem est accusantium nobis totam assumenda repudiandae tempore praesentium, accusamus aperiam veritatis suscipit voluptas maxime minus!</p>
   </section>

   <section id='projetos' className='section'>
    <h2>Meus Projetos</h2>
    <ul className='listaProjeto'>
      <li>
        <h4>Pokedex</h4>
        <a href="https://github.com/arthurpmf/Pokedex" target='_blank'><img id='imgpokedex' src={fotopoke} alt="pokedex" /></a>
      </li>
      <br />
      <li>
        <h4>To-Do List</h4>
        <a href="https://github.com/arthurpmf/to_do_list"target='_blank'><img id='imgtodolist' src={fototodo} alt="todolist" /></a>
      </li>
    </ul>
   </section>

   <section id='contatos' className='section'>
    <h2>Contatos</h2>
    <div className="icones-contato">
        {/* Ícone WhatsApp */}
        <a
          href="https://wa.me/qr/KWXLLMYGGXVAH1" // Substitua pelo seu número
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={32} color="#25D366" /> {/* Tamanho e cor */}
        </a>

        {/* Ícone LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arthur-pinheiro-moura-fontes-069a25189/" // Substitua pelo seu perfil
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} color="#0A66C2" />
        </a>

        {/* Ícone GitHub */}
        <a
          href="https://github.com/arthurpmf" // Substitua pelo seu GitHub
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} color="#333" />
        </a>
      </div>
   </section>
   </>
  )
}

export default App