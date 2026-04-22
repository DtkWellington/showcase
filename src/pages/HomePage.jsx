import { Link } from "react-router-dom";
import LogoEmpresa from "../assets/logo-portal-empresa.svg";
import LogoMorador from "../assets/logo-portal-morador.svg";
export default function HomePage() {
  const solutions = [
    {
      title: "Portal Morador",
      description:
        "Experiência para moradores com reservas, encomendas, avisos e autenticação em um único ambiente.",
      webLink: "/portal-morador",
      appLink: "/app_portal_morador",
      accent: "from-[#57B6FF] to-cyan-300",
      image: LogoMorador,
    },
    {
      title: "Portal Empresa",
      description:
        "Plataforma para gestão corporativa com versão web e versão mobile organizadas em páginas separadas.",
      webLink: "/portal-empresa",
      appLink: "/app_portal_empresa",
      accent: "from-[#242c48] to-[#adb9df]",
      image: LogoEmpresa,
    },
   
  ];

  return (
    <div className="min-h-screen bg-[#07111B] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -left-[-120px] -top-[-120px] h-80 w-[320px] rounded-full bg-[#57B6FF]/15 blur-3xl" />
          <div className="absolute -right-[-100px] top-30 h-70 w-70 rounded-full bg-[#adb9df]/10 blur-3xl" />
          <div className="absolute -bottom-[-140px] left-1/2 h-75 w-75 -translate-x-1/2 rounded-full bg-[#242c48]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
              showcase.grupodetk.com.br
            </div>

            <h1 className="mt-6 font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Showcase do{" "}
              <span className="bg-linear-to-r from-[#57B6FF] to-[#adb9df] bg-clip-text text-transparent">
                Grupo DETK
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl font-['Manrope'] text-lg leading-8 text-slate-300 md:text-xl">
              Escolha a solução e acesse rapidamente a apresentação da versão
              web ou da versão mobile.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-[34px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div
                  className={`mx-auto flex h-28 w-28 items-center justify-center rounded-[28px] bg-linear-to-br ${solution.accent} p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)]`}
                >
                  <img
                    src={solution.image}
                    alt={`Logo ${solution.title}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <h2 className="mt-8 text-center font-['Syne'] text-3xl leading-tight tracking-[-0.04em] text-white">
                  {solution.title}
                </h2>

                <p className="mt-4 text-center font-['Manrope'] text-sm leading-7 text-slate-300">
                  {solution.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {solution.webLink ? (
                    <>
                      <Link
                      to={solution.webLink}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-['Manrope'] text-sm font-semibold text-[#07111B] transition hover:bg-[#E8EDF8]"
                    >
                      Versão web
                    </Link>
                     <Link
                    to={solution.appLink}
                    className="inline-flex items-center justify-center w-full rounded-full border border-white/15 bg-[#242c48] px-5 py-3 font-['Manrope'] text-sm font-semibold text-[#d8e1fb] transition hover:bg-[#313b60]"
                  >
                    Versão mobile
                  </Link>
                    </>
                  
                  ): (
                  <div className="col-span-2">
                      <Link
                      to={solution.appLink}
                      className="inline-flex items-center justify-center w-full rounded-full border border-white/15 bg-[#242c48] px-5 py-3 font-['Manrope'] text-sm font-semibold text-[#d8e1fb] transition hover:bg-[#313b60]"
                    >
                     Versão mobile
                    </Link>
                  </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
