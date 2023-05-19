import React, { useState } from 'react';
import Anamc from '../../assets/img/Cards/Anamc.png';
import Anamm from '../../assets/img/Cards/Anamm.jpg';
import Ángelarr from '../../assets/img/Cards/Ángelarr.jpg';
import CarmenConde from '../../assets/img/Cards/CarmenConde.png';
import CarmenLaforet from '../../assets/img/Cards/CarmenLaforet.png';
import ClaraCampoamor from '../../assets/img/Cards/ClaraCampoamor.png';
import ConcepciónArenal from '../../assets/img/Cards/ConcepciónArenal.png';
import IsabelLaCatólica from '../../assets/img/Cards/IsabelLaCatólica.jpg';
import MargaritaSalas from '../../assets/img/Cards/MargaritaSalas.jpg';
import MaríaZambrano from '../../assets/img/Cards/MaríaZambrano.jpg';
import RosalíaDeCastro from '../../assets/img/Cards/RosalíaDeCastro.png';
import SoledadCazorla from '../../assets/img/Cards/SoledadCazorla.jpeg';

const women = [
  {
    name: "Ana de Mendoza y de la Cerda",
    img: Anamc,
    description: `Ana de Mendoza y de la Cerda (1540-1592), también conocida como la Princesa de Éboli, 
    fue una noble española y una de las mujeres más poderosas e influyentes de su época. 
    Fue una figura política importante en el siglo XVI durante el reinado 
    de Felipe II de España.
    Como miembro de la nobleza, Ana de Mendoza disfrutó de una gran riqueza y prestigio, 
    pero también tuvo que lidiar con el poder y la influencia de las otras familias nobles. 
    Después de casarse en 1565 con Ruy Gómez de Silva, secretario personal y confidente del 
    rey Felipe II, Ana de Mendoza se convirtió en una figura aún más influyente en la corte.
    Durante su vida, Ana de Mendoza también destacó por su habilidad como mecenas y 
    patrocinadora de las artes. Apoyó y financió a muchos de los artistas y escritores más 
    importantes de su tiempo, incluyendo a Lope de Vega y a Benito Arias Montano.
    
    La Princesa de Éboli también es conocida por el misterioso accidente que sufrió en 1579, 
    que la dejó ciega y con un parche en el ojo. Se cree que esto aumentó su leyenda y la 
    convirtió en un personaje aún más intrigante.
    En resumen, Ana de Mendoza y de la Cerda fue una figura poderosa e influyente en la 
    corte de Felipe II y también una destacada mecenas de las artes. Su legado cultural y 
    político se ha mantenido hasta nuestros días.
    
    Fue una de las mujeres más influyente de la España de su época y una figura importante 
    en la educación y formación de la nobleza, especialmente de las mujeres. Su legado no 
    sólo fue importante en su tiempo, sino que ha perdurado hasta la actualidad como un 
    referente para la formación y el desarrollo de la mujer.`
  },
  {
    name: "Ana María Matute",
    img: Anamm,
    description: `Ana María Matute fue una escritora española nacida en Barcelona en 1925 y fallecida en 
    la misma ciudad en 2014. Es una de las figuras más importantes de la literatura española 
    del siglo XX, destacando por su estilo poético y su profundo análisis psicológico de los
    personajes.
    
    Matute comenzó a escribir desde muy joven, y publicó su primera obra, "Los Abel", a los 
    17 años. A lo largo de su carrera literaria, abordó temas como la Guerra Civil española, 
    la posguerra y la infancia, siempre con un enfoque poético y simbólico.
    
    Entre las obras más destacadas de Ana María Matute se encuentran "Olvidado rey Gudú", 
    una de las obras más famosas de la autora, que narra la épica de un reino imaginario a 
    través de diferentes generaciones; "Los niños tontos", una obra que reflexiona sobre la 
    infancia y la locura; y "La torre vigía", que trata sobre la vida y el desarraigo de un 
    grupo de republicanos después de la Guerra Civil española.
    
    Matute recibió numerosos premios a lo largo de su carrera, entre ellos el Premio Nacional 
    de las Letras Españolas en 2007, el Premio Cervantes en 2010 y el Premio Miguel de 
    Cervantes Chico en 2012. Su obra ha sido traducida a numerosos idiomas y ha sido 
    reconocida internacionalmente como una de las grandes figuras de la literatura española 
    del siglo XX.
    `,
  },
  {
    name: "Ángela Ruiz Robles",
    img: Ángelarr,
    description: `Ángela Ruiz Robles (1895-1975) fue una maestra, inventora y escritora española, 
    conocida por su invento de la primera enciclopedia mecánica del mundo, 
    el "Libro Mecánico".
    
    Nacida en Galicia, España, Ruiz Robles se graduó en magisterio y trabajó como maestra 
    durante muchos años. Durante su carrera, notó que los libros escolares eran pesados y 
    voluminosos, lo que dificultaba la enseñanza y el aprendizaje.
    
    En respuesta a esta necesidad, Ruiz Robles inventó un dispositivo que se parecía a un 
    libro y que permitía leer varias páginas en una pantalla mecánica. Con el tiempo, 
    perfeccionó su invento y lo llamó el "Libro Mecánico".
    
    El dispositivo de Ruiz Robles incluía tecnología de audio y video, lo que lo hacía más 
    interactivo y fácil de usar que los libros tradicionales. También incluía un sistema de 
    búsqueda, lo que permitía a los usuarios encontrar información más fácilmente.
    
    Ruiz Robles presentó su invención al gobierno español en 1949, en un esfuerzo por 
    obtener financiamiento y apoyo para producirlo a gran escala. Aunque recibió elogios 
    por su invento, el gobierno no apoyó su proyecto y no se produjo en masa.
    
    A pesar de esto, Ángela Ruiz Robles es recordada por su trabajo innovador, que sentó las 
    bases para los dispositivos electrónicos modernos como los libros electrónicos y las 
    tabletas. En 2019, fue honrada con un doodle de Google para conmemorar su 123º cumpleaños.`,
  },
  {
    name: "Carmen Conde",
    img: CarmenConde,
    description: `Carmen Conde (1907-1996) fue una escritora y poeta española. Fue la primera mujer en 
    ser nombrada Académica de la Real Academia Española (RAE), en 1979.
    
    Nacida en Cartagena, España, Conde comenzó a escribir poesía desde una edad temprana. 
    En 1931, publicó su primer libro de poesía "Brocal", y en los años siguientes, publicó 
    varios otros libros de poesía y prosa.
    
    Durante la Guerra Civil española, Conde se unió al bando republicano y trabajó en una 
    variedad de tareas, como periodismo y ayuda humanitaria. Después de la guerra, se 
    enfrentó a dificultades debido a su lealtad a los republicanos, pero eventualmente pudo 
    continuar su carrera de escritora.
    
    Conde fue una defensora de los derechos de las mujeres y escribió frecuentemente sobre 
    temas feministas. También dedicó gran parte de su carrera a la enseñanza y a su trabajo 
    como catedrática de literatura.
    
    En 1979, Conde fue elegida miembro de la Real Academia Española, convirtiéndose en la 
    primera mujer en recibir este honor. A lo largo de su carrera, recibió numerosos 
    premios literarios y fue una figura influyente en la literatura española del siglo XX.`,
  },
  {
    name: "Carmen Laforet",
    img: CarmenLaforet,
    description: `Carmen Laforet fue una escritora española nacida en Barcelona en 1921 y fallecida en 
    Madrid en 2004. Es una de las figuras más destacadas de la literatura española de 
    posguerra, conocida especialmente por su obra "Nada", publicada en 1945.
    
    Laforet pasó su infancia y adolescencia en Las Palmas de Gran Canaria, y posteriormente 
    se trasladó a Barcelona para estudiar Filosofía en la Universidad de Barcelona. Durante 
    la Guerra Civil, se exilió en Mallorca y, posteriormente, en Madrid. Allí comenzó a 
    escribir su obra más conocida, "Nada", que relata la historia de una joven llamada 
    Andrea, que se traslada a Barcelona para estudiar y se ve envuelta en una serie de 
    situaciones familiares y sociales que la llevan a experimentar la soledad, la 
    incomprensión y la frustración.
    
    "Nada" supuso una innovación en la literatura española de la época, tanto por su estilo 
    narrativo como por su temática, que aborda temas como la soledad, la opresión y la falta 
    de libertad en la sociedad española de posguerra. La obra de Laforet ha sido considerada 
    un exponente del "realismo existencialista", un género literario que aborda la condición 
    humana y la soledad del individuo en un mundo sin sentido ni valor.
    
    Entre las obras más destacadas de Carmen Laforet se encuentran "La isla y los demonios", 
    "Al volver la esquina" y "La mujer nueva". Su legado literario ha sido reconocido con 
    numerosos premios, entre ellos el Premio Nacional de Literatura de España en 1959 y el 
    Premio Cervantes Chico en 1994.`,
  },
  {
    name: "Clara Campoamor",
    img: ClaraCampoamor,
    description: `Clara Campoamor fue una política española nacida en Madrid en 1888 y fallecida en 
    Lausana, Suiza, en 1972. Es recordada por su labor en la defensa de los derechos de la 
    mujer y por ser una de las principales impulsoras del sufragio femenino en España.
    
    En 1931, Clara Campoamor fue elegida diputada en las Cortes Constituyentes de la Segunda 
    República y fue entonces cuando presentó una enmienda para incluir el derecho al voto de 
    las mujeres en la Constitución. A pesar de las oposiciones de algunos sectores políticos, 
    su enmienda fue aprobada y así se convirtió en la principal impulsora para la consecución 
    de este derecho en España.
    
    Después, en las primeras elecciones generales con sufragio universal y en las que las 
    mujeres podían votar y presentarse como candidatas, fue elegida de nuevo diputada. Pero, 
    debido a las tensiones internas del partido al que pertenecía y al veto de sus compañeros 
    de partido, tuvo que abandonar la política activa y exiliarse en Suiza durante 
    la dictadura franquista, regresando a España a finales de los años sesenta.
    
    En definitiva, Clara Campoamor se destacó por su lucha por los derechos de las mujeres y 
    por la consecución del derecho al voto femenino en España, lo que la convierte en una 
    figura histórica importante en la lucha por la igualdad.`,
  },
  {
    name: "Concepción Arenal",
    img: ConcepciónArenal,
    description: `Concepción Arenal fue una escritora, jurista y activista española nacida en Ferrol 
    (La Coruña) en 1820 y fallecida en Vigo en 1893. Es considerada una de las precursoras 
    del feminismo y de los derechos de las mujeres en España.
    
    Arenal se educó de manera autodidacta y se convirtió en la primera mujer en asistir a la 
    Universidad Central de Madrid en 1869, aunque como oyente ya que por aquel entonces las 
    mujeres no podían obtener un título universitario. Fue autora de numerosas obras sobre 
    derecho, literatura y filosofía, y destacó por su defensa de los derechos de las mujeres 
    y su lucha contra la discriminación y la violencia de género.
    
    Además de su carrera literaria y jurídica, Arenal también fue activista social y 
    filantrópica, dedicando gran parte de su vida al cuidado de los presos y la reforma del 
    sistema penitenciario español. También fue una firme defensora de la educación y la 
    formación de las mujeres, y luchó por su acceso a la educación y su derecho a 
    desarrollarse como personas y ciudadanas.
    
    Entre las obras más destacadas de Concepción Arenal se encuentran "La cuestión social", 
    "La mujer del porvenir", "La instrucción del ciego" y "Estudio sobre la educación de la 
    mujer". Su lucha y su contribución a la sociedad española han hecho de ella una de las 
    figuras más importantes de la historia del feminismo y la igualdad en España.`,
  },
  {
    name: "Isabel La Católica",
    img: IsabelLaCatólica,
    description: `Isabel la Católica fue una reina de Castilla y León que gobernó junto con su esposo, 
    Fernando II de Aragón, en el siglo XV. Es considerada una de las figuras más importantes 
    de la historia de España por su papel en la unificación del país y la expansión del 
    territorio español en América.
    
    Isabel nació en 1451 en Madrigal de las Altas Torres, y contrajo matrimonio en 1469 con 
    Fernando, con quien reinó conjuntamente hasta su muerte en 1504. Durante su reinado, los 
    Reyes Católicos llevaron a cabo importantes reformas legales, sociales y religiosas, 
    tales como la instauración del Tribunal de la Inquisición y la expulsión de los judíos y 
    los musulmanes que se negaron a convertirse al cristianismo.
    
    Isabel también fue clave en la financiación del viaje de Cristóbal Colón hacia lo que 
    hoy en día conocemos como América, que dio lugar a la expansión del territorio español 
    en el Nuevo Mundo.
    
    Isabel la Católica es recordada por muchos como una gobernante firme, justa y piadosa. 
    Fue canonizada por la Iglesia Católica como Santa Isabel de Portugal en 1625.`,
  },
  {
    name: "Margarita Salas",
    img: MargaritaSalas,
    description: `Margarita Salas (1938 - 2019) fue una destacada bioquímica española, considerada una de 
    las científicas más importantes del siglo XX en España. Fue la primera mujer en obtener 
    una catedra de investigacion del Consejo Superior de Investigaciones Científicas (CSIC) 
    en 1988.
    
    En su prolífica carrera científica, Margarita Salas logró importantes contribuciones en 
    el campo de la genética molecular y la biología molecular, siendo en especial su trabajo 
    en la síntesis enzimática de ADN, obtenido en el laboratorio del Premio Nobel Severo 
    Ochoa, uno de los más destacados. En el ámbito académico, Salas fue profesora 
    universitaria en varias instituciones y dictó conferencias en congresos y simposios 
    internacionales.
    
    Margarita Salas recibió numerosos premios y reconocimientos a lo largo de su carrera, 
    tanto en España como en el extranjero. Fue miembro de la Real Academia Española de 
    Ciencias Exactas, Físicas y Naturales, la Academia Nacional de Ciencias de Estados 
    Unidos y la Academia Pontificia de las Ciencias, entre otras instituciones. En su honor, 
    se han creado diversos premios y becas científicas, así como un instituto de 
    investigación en biomedicina en Madrid.`,
  },
  {
    name: "María Zambrano",
    img: MaríaZambrano,
    description: `María Zambrano fue una filósofa y escritora española, nacida en Vélez-Málaga en 1904 y 
    fallecida en Madrid en 1991. Es considerada una de las figuras más importantes de la 
    filosofía y el pensamiento español del siglo XX.
    
    Su obra se caracteriza por la exploración de temas como la libertad, la razón, la 
    naturaleza del ser humano y la relación entre el ser humano y Dios. Fue una de las 
    primeras filósofas en defender el pensamiento poético, que consideraba una forma de 
    conocimiento igual de válida que la razón.
    
    Durante la Guerra Civil Española, María Zambrano se exilió a Francia y posteriormente a 
    México, donde trabajó como profesora universitaria y se relacionó con otros destacados 
    exiliados españoles, como Octavio Paz y Carlos Fuentes. En 1953 regresó a España, pero 
    no fue hasta el final del régimen franquista que se le permitió volver a dar clases en 
    la Universidad.
    
    Entre sus obras más destacadas se encuentran "Horizonte del liberalismo", "El hombre y 
    lo divino" y "Filosofía y poesía". En 1981 recibió el Premio Príncipe de Asturias de 
    Comunicación y Humanidades.
    `,
  },
  {
    name: "Rosalía De Castro",
    img: RosalíaDeCastro,
    description: `Rosalia de Castro fue una escritora y poeta gallega del siglo XIX. Es considerada una 
    de las figuras más importantes de la literatura en lengua gallega, y su obra ha sido 
    fundamental para la promoción del gallego como lengua literaria.
    
    Nacida en Santiago de Compostela en 1837, Rosalía de Castro se trasladó a vivir a Madrid 
    siendo aún una niña, aunque siempre mantuvo un vínculo especial con su tierra natal. 
    En su poesía, plasmó de forma muy emotiva tanto la belleza de los paisajes gallegos como 
    las vidas de las gentes que habitaban sus aldeas.
    
    Su obra más conocida es "Cantares Gallegos", una colección de poesía escrita en gallego 
    que fue publicada en 1863. Este trabajo se considera un hito en la literatura gallega, 
    ya que supuso el primer reconocimiento literario de la lengua gallega y también la 
    recuperación del folclore y la tradición popular gallega.
    
    Además de sus poemas, Rosalía de Castro también publicó varias novelas, obras de teatro 
    y artículos periodísticos. Su legado literario ha sido ampliamente reconocido, y está 
    considerada una de las figuras más influyentes en la literatura española del siglo XIX.
    `,
  },
  {
    name: "Soledad Cazorla",
    img: SoledadCazorla,
    description: `Soledad Cazorla fue una reconocida abogada y defensora de los derechos de las mujeres 
    en España, particularmente en lo que se refiere a la violencia de género. También fue 
    Fiscal jefe de la Fiscalía Provincial de Madrid.
    
    Nacida en 1955 en Linares, España, Cazorla estudió derecho en la Universidad Complutense 
    de Madrid y se especializó en derecho penal, enfocándose en los casos de violencia de 
    género.
    
    En 1998, fue nombrada Fiscal Delegada Especial para la Violencia contra las Mujeres en 
    Madrid, un puesto que le permitió trabajar en estrecha colaboración con las 
    organizaciones feministas y los servicios sociales y de salud para combatir la violencia 
    de género en la ciudad.
    
    Cazorla fue una defensora infatigable de los derechos de las mujeres, y dedicó su 
    carrera a hacer frente a la violencia machista y a garantizar que las mujeres víctimas 
    de violencia doméstica tuvieran acceso a la justicia. Durante su trayectoria profesional, 
    Cazorla destacó por su compromiso y dedicación en el enjuiciamiento de casos de 
    violencia de género, lo que le valió reconocimiento y respeto entre sus colegas y la 
    comunidad en general.
    
    En 2015, Cazorla recibió la Gran Cruz de la Orden de San Raimundo de Peñafort, en 
    reconocimiento a su destacada trayectoria profesional y su defensa de los derechos de 
    las mujeres en el sistema judicial español. Cazorla falleció en 2015 a causa de una 
    enfermedad, dejando un legado importante en la lucha por los derechos de las mujeres y 
    la erradicación de la violencia de género.`,
  }
];

const LearnWomanView = () => {
  const [selectedWoman, setSelectedWoman] = useState(null);
  const [opacity, setOpacity] = useState('1')

  const showDetails = (woman) => {
    setSelectedWoman(woman);
    setOpacity('0.3')
  };

  const hideDetails = () => {
    setSelectedWoman(null);
    setOpacity('1')
  };

  return (
 
    <div style={{maxHeight:"100vh", overflowY:"auto"}}>
      <div>
      {women.map((woman, index) => (
        <section key={index} style={{backgroundColor:'#8c52ff',opacity:opacity , boxShadow: '15px 15px 15px #A582AF', display: 'flex', alignItems: 'center', height: '10vh', width: '60vw', marginLeft: '5vw', marginTop: '3vw', borderRadius: '1vw', position: 'relative'}}>
          <img src={woman.img} alt={`Imagen de ${woman.name}`} style={{maxHeight: '100%', width:"7vw", height:"10vw"}} /> 
          <p style={{marginLeft: '2rem', marginTop:"1rem", fontSize:"2vw", fontFamily:"sans-serif"}}>{woman.name}</p> 
          <button className="btn btn-secondary" style={{position: 'absolute', bottom: '10px', right: '10px', padding: '10px'}} onClick={() => showDetails(woman)}>ver más</button>
        </section>
      ))}
</div>
      {selectedWoman && (
        <div style={{position: "fixed", top: "50%", left: "40%", transform: "translate(-50%, -50%)", backgroundColor: "white", width: "50%", border: "5px solid #8c52ff", borderRadius: "10px", padding: "20px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", zIndex: "1"}}>
          <span style={{color: "#8c52ff", fontWeight: "bold", fontSize: "2rem", marginBottom: "1rem"}}>{selectedWoman.name}</span>
          <p style={{textAlign: "justify"}}>{selectedWoman.description}</p>
          <button style={{backgroundColor: "#8c52ff", color: "#fff", border: "none", borderRadius: "5px", padding: "10px", marginRight: "1rem", marginTop: "1rem", cursor: "pointer", float: "right"}} onClick={hideDetails}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default LearnWomanView;






