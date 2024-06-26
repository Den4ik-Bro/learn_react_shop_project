function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="/learn_react_shop_project" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Den4ik-Bro/learn_react_shop_project" target="_blank" rel="noreferrer">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
