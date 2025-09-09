function Footer() {
  return (
    <footer
      style={{
        background: "#333",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
