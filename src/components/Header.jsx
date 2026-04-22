import { Link } from "react-router-dom";
import Logo from "../assets/logo-empresa.svg";

export default function Header() {
  return (
    <header className="rounded-full border border-white/10 bg-white/5 px-3 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur sm:px-5 sm:py-4">
      <div className="flex items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/5 px-3 py-2 font-['Manrope'] text-xs font-semibold text-white transition hover:bg-[#2d3658] sm:px-4 sm:text-sm"
        >
          <span aria-hidden="true">&larr;</span>
          Voltar ao showcase
        </Link>

        <div className="flex items-center justify-end">
          <a
            href="https://www.grupodetk.com.br/"
            className="inline-flex items-center justify-center"
          >
            <img
              src={Logo}
              alt="Logo do Portal Empresa"
              className="h-6 w-auto sm:h-8"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
