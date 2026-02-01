import React from 'react';
import bgImage from '../../assets/background.png';
import { Navbar } from './Navbar';

export const Layout = ({ children, auth }) => {
    const styles = {
        background: {
            // "Make the opacity of image high" -> Less overlay coverage.
            // We will make the overlay very subtle (0.3 down to 0.1) so the image pops.
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
        },
        scrollWrapper: {
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '80px'
        },
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1,
            padding: 'clamp(1rem, 3vw, 2rem)',
            maxWidth: '1280px',
            margin: '0 auto',
            width: '100%'
        }
    };

    return (
        <div style={styles.background}>
            <Navbar auth={auth} />
            <div style={styles.scrollWrapper}>
                <div className="scene-3d" style={styles.content}>
                    {children}
                </div>
            </div>
            <style>{`
        /* Scrollbar aesthetics */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent; /* Optional: just hide it for cleaner look or style it minimal */
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
        </div>
    );
};
