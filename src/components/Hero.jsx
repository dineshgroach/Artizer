import { logo } from '../assets';

function Hero() {
  return (
    <header className="w-full flex
    justify-center item-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Altizer_Logo" className="w-28 object-contain" />
        
        <button type="button"
          onClick={() => window.open('https://github.com/dineshgroach')}
        className="black_btn">
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles using<br className="max-md:hidden"/>
        <span className="orange_gradient">Chat-GPT 3.5</span>
      </h1>
      <center>
        <h2 className="desc">
        By using OpenAI API's to use GPT 3.5 model
        to summarize articles with the help of the
        Artifical Intellilgence to provide concise
        information  and summary to the reader
      </h2>
      </center>
    </header>
  )
}

export default Hero