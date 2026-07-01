import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM Project</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a target="_blank" rel="noreferrer">Hesam project</a> Next.js | CRM project &copy;
      </footer>
    </>
  );
}

export default Layout;
