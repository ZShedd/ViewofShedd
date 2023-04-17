import React from 'react';

const styles = {
  footer: {
    position: 'absolute',
    bottom: '0px',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    color: '#F6BC7D',
  },
  a: {
    color: '#F6BC7D',
    textDecoration: 'none',
  },
};

function Footer() {
  return (
    <div
      className="footer"
      style={styles.footer}
    >
      <footer>
        <a
          href="https://github.com/ZShedd"
          style={styles.a}
        >
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/zac-shedd-05087a184/"
          style={styles.a}
        >
          <p>LinkedIn</p>
        </a>
        <a
          href="https://stackoverflow.com/users/21414147/zshedd"
          style={styles.a}
        >
          <p>Stack Overflow</p>
        </a>
      </footer>
    </div>
  );
}

export default Footer;