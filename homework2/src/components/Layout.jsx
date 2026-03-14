function Layout({ children }) {
  return (
    <div className="hw2-page">
      <header className="simple">
        <div className="container">
          <div className="hw2-hero">
            <h1>Однодневные туры на React</h1>
            <p>
              В этой версии уже есть переходы между страницами и отдельная карточка тура.
            </p>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
