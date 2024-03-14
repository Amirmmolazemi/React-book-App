import style from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://github.com/amirmmolazemi">Amirmmolazemi </a>| react
          course Practice
        </p>
      </header>
      <main>{children}</main>
      <footer className={style.footer}>
        <p>Developed by Amirmohammad molazemi with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
