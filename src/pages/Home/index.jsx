import Exhibition from "../../components/Exhibition";
import { Box } from "@mui/joy";

const data = [
  {
    id: "pyramid",
    model: "pyramid",
    imgSrc: "https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg",
    imgAlt: "Pyramid",
    title: "Pyramid of Khafre",
    location: "Giza, Egypt",
    description: "The Pyramid of Khafre is the second-tallest and second-largest of the Ancient Egyptian Pyramids of Giza. Built around 2570 BC as a tomb for the Pharaoh Khafre, it stands as a testament to ancient Egyptian engineering and architectural prowess. The pyramid originally stood 143.5 meters tall and was covered in smooth Tura limestone casing stones.",
  },
  {
    id: "angel_statue",
    model: "angel_statue",
    imgSrc: "https://t3.ftcdn.net/jpg/05/76/00/82/360_F_576008288_Sw1JWdLINBO8kSoX8mm2GtK9NbO2T6wQ.jpg",
    imgAlt: "Angel Statue",
    title: "Angel Statue",
    location: "Paris, France",
    description: "An elegant sculpture symbolizing grace and divine beauty, this angel statue represents classical European artistic traditions and religious iconography.",
  },
  {
    id: "terracotta_warrior",
    model: "terracotta_warrior",
    imgSrc: "https://smarthistory.org/wp-content/uploads/2019/08/terracotta.jpg",
    imgAlt: "The Terracotta Warriors",
    title: "Terracotta Warrior",
    location: "Xi'an, China",
    description: "Ancient clay sculptures from 210 BC depicting the armies of Qin Shi Huang, the first Emperor of China. Each warrior has unique facial features and expressions.",
  },
  {
    id: "lowpoly_victorian_props_with_customizable_psd",
    model: "lowpoly_victorian_props_with_customizable_psd",
    imgSrc: "https://media.sketchfab.com/models/8e790a9b805a486fb7f8d46a462b14e8/thumbnails/d322e374dfb84625ad79259f1eef2603/6c2b7ac5a4e1403aa71d631a6c3df5f7.jpeg",
    imgAlt: "Victorian Props Collection",
    title: "Victorian Era Props",
    location: "Victorian Era Collection",
    description: "A collection of authentic Victorian-era artifacts including furniture, decorative items, and household objects from the 19th century British Empire period.",
  },
  {
    id: "greek_jar",
    model: "greek_jar",
    imgSrc: "https://images.metmuseum.org/CRDImages/gr/original/DP116936.jpg",
    imgAlt: "Ancient Greek Jar",
    title: "Ancient Greek Amphora",
    location: "Metropolitan Museum of Art",
    description: "A beautifully decorated ancient Greek jar used for storing wine and olive oil. Features intricate black-figure pottery designs depicting mythological scenes.",
  },
  {
    id: "budha_statue",
    model: "budha_statue",
    imgSrc: "https://thumbs.dreamstime.com/z/buddha-statue-japan-kitain-temple-kawagoe-city-disciples-around-him-arhats-gohyaku-rakan-51140413.jpg",
    imgAlt: "Buddha Statue",
    title: "Buddha Statue",
    location: "Kitain Temple, Japan",
    description: "A serene Buddha sculpture representing enlightenment and peace. This statue showcases traditional Buddhist artistic styles from East Asian temple architecture.",
  },
  {
    id: "vertebrate_tyrannosaurus_rex_skull_mote",
    model: "vertebrate_tyrannosaurus_rex_skull_mote",
    imgSrc: "https://assets.superhivemarket.com/store/productimage/1015772/image/xlarge_og-ecde679694b3a256a7ea486fc3f3da45.png",
    imgAlt: "T-Rex Skull",
    title: "Tyrannosaurus Rex Skull",
    location: "Natural History Museum",
    description: "The massive skull of a Tyrannosaurus Rex, one of the largest carnivorous dinosaurs that lived 68-66 million years ago during the Late Cretaceous period.",
  },
  {
    id: "roman_helmet",
    model: "roman_helmet",
    imgSrc: "https://thumbs.dreamstime.com/b/roman-helmet-red-crest-white-background-front-view-d-illustration-roman-helmet-red-crest-white-front-view-d-126283476.jpg",
    imgAlt: "Roman Helmet",
    title: "Roman Military Helmet",
    location: "British Museum, London",
    description: "An authentic Roman legionary helmet featuring a distinctive red crest. Used by Roman soldiers during the height of the Roman Empire's military campaigns.",
  },
];

const Home = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 20s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '50%': { transform: 'translate(-30px, 30px) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 15s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      {/* Header */}
      <Box sx={{ 
        padding: '40px 24px 24px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <Box sx={{ marginBottom: '12px' }}>
          <Box sx={{
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#a78bfa',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Explore in AR
          </Box>
        </Box>
        <Box sx={{ 
          fontSize: { xs: '32px', sm: '40px', md: '48px' },
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '12px',
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Artifacts
        </Box>
        <Box sx={{ 
          fontSize: { xs: '16px', sm: '18px' },
          color: 'rgba(255, 255, 255, 0.6)',
          maxWidth: '600px',
          lineHeight: '1.6',
        }}>
        </Box>
      </Box>

      {/* Gallery Grid */}
      <Box sx={{ 
        padding: '24px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {data.map((item) => (
            <Exhibition
              key={item.id}
              href={`/ar/${item.model}`}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              location={item.location}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;