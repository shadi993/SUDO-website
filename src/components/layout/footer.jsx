function Footer() {
  return (
    <footer>
      <div className="flex justify-center mt-20 mb-8">
        <ul className="grid grid-flow-col gap-x-8 text-foreground">
          <li>
            <a
              className="hover:text-primary transition-colors duration-200"
              href="https://discord.gg/sudors"
              target="_blank"
            >
              Discord server
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary transition-colors duration-200"
              href="https://twitter.com/sudoUwU"
              target="_blank"
            >
              Twitter/X
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary transition-colors duration-200"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              Really secret stuff
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
