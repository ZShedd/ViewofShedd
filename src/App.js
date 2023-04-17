import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Forest from './assets/images/Forest.jpg';
import Footer from './components/Footer';

const styles = {
  body: {
    backgroundColor: '#040404',
  },
  container: {
    backgroundImage: `url(${Forest})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundRepeat: 'repeat-y',
    backgroundAttachment: 'fixed',
    width: '80vw',
    minHeight: '150vh',
    marginLeft: '10%',
  },
};

const App = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <PortfolioContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;