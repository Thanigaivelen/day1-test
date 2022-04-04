import { useState } from "react";
import "./styles.css";

export default function App() {
  const [ham, setham] = useState("hide");

  const handleClick = () => {
    if (ham == "hide") {
      setham("a");
    } else {
      setham("hide");
    }
  };

  return (
    <div className="App">
      <div className="hamburger" onClick={handleClick}>
        =
      </div>
      <nav className="navbar">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#footer">Footer</a>
        </div>
      </nav>

      <div className={`ham-content ${ham}`}>
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#footer">Footer</a>
        </div>
      </div>

      <div id="home" className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan
          semper iaculis. Mauris urna nunc, pellentesque eget posuere quis,
          maximus vitae odio. Mauris quis nisi rhoncus, lobortis purus commodo,
          mollis ante. Etiam fermentum in mi a sagittis. In tincidunt congue
          risus nec mollis. Pellentesque laoreet auctor magna, quis condimentum
          lacus suscipit eu. Aenean eleifend augue in sapien tempor, ut
          elementum diam convallis. Phasellus vel dolor sed purus tincidunt
          euismod eu ut enim. Donec vel ultricies eros. Phasellus ullamcorper
          vel diam sed ultrices. Fusce vestibulum bibendum rhoncus. Nunc porta
          at tortor nec ullamcorper. Donec at arcu vitae libero finibus
          sagittis. Quisque placerat nisl eu risus interdum varius
        </p>
      </div>
      <div id="about" className="content">
        <p>
          Nulla cursus erat ac dolor pellentesque vehicula. Curabitur malesuada
          nisl arcu, nec faucibus ex pulvinar non. Donec euismod fringilla orci,
          ut commodo velit. Morbi lacinia luctus condimentum. Nunc vehicula sem
          at est laoreet hendrerit. Donec ullamcorper mattis lacus, ut ornare
          enim pretium id. Integer vitae eleifend urna, eu tincidunt nulla.
          Aliquam fermentum posuere turpis, nec sodales massa. Phasellus
          malesuada ipsum ac diam pretium aliquet. Praesent ultrices suscipit
          pharetra.
        </p>
      </div>
      <div id="contact" className="content">
        <p>
          Aenean ultricies tortor sed tellus gravida sollicitudin. Sed ut nulla
          sem. Sed eget tellus placerat quam mollis tincidunt at eget arcu.
          Maecenas id neque quis eros bibendum sollicitudin. Ut at placerat dui,
          sed ullamcorper dolor. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Aliquam egestas et enim
          id maximus. Ut finibus dui sed massa mattis scelerisque. Donec
          pharetra tincidunt sem ac consectetur.
        </p>
      </div>
      <div id="footer" className="content">
        <p>
          Vestibulum semper, quam eget vulputate iaculis, urna nisi iaculis
          nisl, et ultrices lectus enim a leo. Nullam dignissim tortor ut ex
          ullamcorper fringilla. Suspendisse aliquet, risus malesuada malesuada
          tempor, nunc enim scelerisque odio, a commodo justo turpis et diam.
          Aenean tortor justo, aliquam semper quam non, aliquam aliquam diam.
          Etiam dignissim lobortis condimentum. Mauris vehicula, libero sit amet
          laoreet ornare, nisi ex sodales est, quis tincidunt nisl lectus
          ultrices tellus. In hac habitasse platea dictumst. Etiam porta mauris
          est, id tempus neque fringilla id. Nunc vitae convallis est. Quisque
          sit amet tellus eget elit ullamcorper varius quis et tellus. Mauris
          velit dolor, tincidunt et condimentum ac, euismod nec urna. In
          imperdiet eros eget augue tincidunt, ut congue ipsum maximus. Nunc et
          tortor tincidunt, tincidunt dui non, mattis lectus. Aenean at laoreet
          sapien. Duis ex massa, malesuada ut lobortis quis, ultrices eget dui.
        </p>
      </div>
    </div>
  );
}
