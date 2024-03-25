import { GithubLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import "./style.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <span className="information">Todos os direitos reservados</span>
        <div className="social">
          <GithubLogo size={24} weight="fill" />
          <InstagramLogo size={24} weight="fill" />
          <FacebookLogo size={24} weight="fill" />
        </div>
      </footer>
    </>
  );
}
