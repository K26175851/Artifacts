import { Box } from "@mui/joy";
import { useState } from "react";

const Exhibition = ({ href, imgSrc, imgAlt, title, location, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.3)' 
            : '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Image Container */}
        <Box sx={{ position: 'relative', overflow: 'hidden', paddingTop: '75%' }}>
          <Box
            component="img"
            src={imgSrc}
            alt={imgAlt}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
              opacity: isHovered ? 0.9 : 0.6,
              transition: 'opacity 0.4s ease',
            }}
          />
          {/* AR Badge */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: 'rgba(139, 92, 246, 0.9)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
            }}
          >
            AR
          </Box>
        </Box>

        {/* Content */}
        <Box
          sx={{
            padding: '20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Box sx={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: 'white',
            marginBottom: '4px',
            letterSpacing: '-0.5px',
          }}>
            {title}
          </Box>
          
          <Box sx={{ 
            fontSize: '13px', 
            color: 'rgba(255, 255, 255, 0.6)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '8px',
          }}>
            <span style={{ fontSize: '16px' }}>📍</span>
            {location}
          </Box>

          <Box sx={{ 
            fontSize: '14px', 
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {description}
          </Box>

          {/* View Button */}
          <Box
            sx={{
              marginTop: 'auto',
              paddingTop: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#8b5cf6',
              transition: 'gap 0.3s ease',
              ...(isHovered && { gap: '12px' }),
            }}
          >
            <span>View in AR</span>
            <span style={{ 
              transition: 'transform 0.3s ease',
              display: 'inline-block',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}>→</span>
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default Exhibition;