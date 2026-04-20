import { Link } from "react-router-dom";
import Logo from "../assets/logo-empresa.svg";

export default function Header() {
  return (
      <header className="rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-['Manrope'] text-sm font-semibold text-white transition hover:bg-[#2d3658]"
              >
                <span aria-hidden="true">←</span>
                Voltar ao showcase
              </Link>

              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <a href="https://www.grupodetk.com.br/">
    <img src={Logo} alt="Logo do Portal Empresa" className="h-8 w-auto" />
              </a>
            
              </div>
            </div>
          </header>
  );
}