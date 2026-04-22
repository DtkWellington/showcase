import { Link } from "react-router-dom";
import Logo from "../assets/logo-empresa.svg";
import Header from "../components/Header";
import { Copyright } from "../components/portal/Copyright";

const mobileHighlights = [
  {
    title: "Mobilidade operacional",
    text: "A versão mobile coloca os fluxos essenciais do Portal Empresa mais próximos de quem precisa consultar e agir rápido.",
  },
  {
    title: "Leitura imediata",
    text: "As telas priorizam visualização objetiva, acesso recorrente e acompanhamento contínuo da rotina pelo celular.",
  },
  {
    title: "Extensão do portal web",
    text: "O app complementa a plataforma principal com praticidade para uso fora da mesa de trabalho.",
  },
];

const residentModules = [
  {
    title: "Acesso e validação",
    description:
      "A entrada no app foi pensada para ser rápida e recorrente, reduzindo fricção para quem usa a plataforma no dia a dia.",
  },
  {
    title: "Home mobile",
    description:
      "A versão app organiza os principais atalhos e informações para que o usuário enxergue rapidamente o que precisa acompanhar.",
  },
  {
    title: "Uso contínuo na rotina",
    description:
      "O app mantém a operação por perto, ajudando a acompanhar a plataforma mesmo quando o usuário está fora do desktop.",
  },
  {
    title: "Consulta rápida",
    description:
      "Mais autonomia para acompanhamento em campo com acesso rápido as informações essenciais.",
  },
  {
    title: "Validação simplificada",
    description:
      "Leitura rápida da interface com integração com a operação da empresa.",
  },
  {
    title: "Extensão prática",
    description:
      "Experiência web complementada com praticidade para uso fora da mesa de trabalho.",
  },
];

const mobileTimeline = [
  {
    step: "01",
    title: "Abrir o app",
    text: "O usuário entra na versão mobile e acessa rapidamente a interface principal.",
  },
  {
    step: "02",
    title: "Visualizar a home",
    text: "A tela inicial apresenta os pontos mais importantes da rotina para consulta imediata.",
  },
  {
    step: "03",
    title: "Acompanhar informações",
    text: "O app apoia a consulta e o acompanhamento dos fluxos relevantes da empresa.",
  },
  {
    step: "04",
    title: "Ganhar agilidade",
    text: "A operação fica mais próxima de quem precisa responder, validar ou monitorar a rotina em movimento.",
  },
];

export default function PortalEmpresaMobilePage() {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.grupodetk.appportalempresa.app_portalempresa";
  const IOSUrl =
    "https://apps.apple.com/br/app/detk-portal-empresa/id6756574538";

  const features = [
    {
      title: "Acesso rápido",
      description:
        "Fluxo de acesso preparado para uso frequente com validação simples e leitura rápida da interface.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/app%20_convites_de_acesso.png",
    },
    {
      title: "Acompanhamento",
      description:
        "Extensão prática da experiência web para uso fora da mesa de trabalho.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/app_visualizacao.png",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(173,185,223,0.2),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(36,44,72,0.92),transparent_24%),linear-gradient(180deg,#0b1020_0%,#12182b_100%)]" />
        <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl">
         <Header/>

          <div className="grid gap-16 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-20">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-[#91A8F3]/25 bg-[#242c48]/50 px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#d8e1fb]">
                Versão mobile
              </div>

              <div className="space-y-6">
               <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                  A comodidade que seu condomínio precisa 
                 
                </h1>
                <p className="max-w-2xl font-['Manrope'] text-lg leading-8 text-slate-300 md:text-xl">
                  A versão mobile leva a experiência do portal para o celular com uma interface mais direta, preparada para consulta rápida, validação e acompanhamento da rotina em movimento.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={APKUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#91A8F3] px-6 py-4 text-center text-base font-semibold text-[#122053] shadow-[0_20px_60px_rgba(145,168,243,0.25)] transition hover:scale-[1.02]"
                >
                  Baixar na Google Play
                </a>

                <a
                  href={IOSUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10"
                >
                  Baixar na App Store
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-2xl justify-center">
              <div className="absolute inset-auto top-16 h-72 w-72 rounded-full bg-[#91A8F3]/20 blur-3xl" />

              <div className="relative grid w-full max-w-2xl grid-cols-2 gap-5">
                <div className="translate-y-8 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <img
                    src="https://sogsfxjgqyubcbcscsob.supabase.co/storage/v1/object/public/photos/splash.jpeg"
                    alt="Tela inicial do app Portal Empresa"
                    className="aspect-9/19 w-full rounded-[22px] object-cover object-top"
                  />
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <img
                    src="https://sogsfxjgqyubcbcscsob.supabase.co/storage/v1/object/public/photos/validation.jpeg"
                    alt="Tela de validação do app Portal Empresa"
                    className="aspect-9/19 w-full rounded-[22px] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {mobileHighlights.map((card) => (
            <article
              key={card.title}
              className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur"
            >
              <h2 className="font-['Syne'] text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h2>
              <p className="mt-4 font-['Manrope'] text-sm leading-7 text-slate-300">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-linear-to-r from-[#91A8F3] to-[#c5d4ff]" />
          <h2 className="font-['Syne'] text-3xl font-bold md:text-5xl">
            Recursos que facilitam a rotina empresarial
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-['Manrope'] text-base leading-8 text-slate-300 md:text-lg">
            Uma experiência pensada para gestores e colaboradores com mais 
            mobilidade, agilidade e controle em um só lugar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-[30px] bg-[#0B1622]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-16/10 w-full object-contain bg-[#0B1622] transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="space-y-3 p-6">
                <h3 className="font-['Syne'] text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="font-['Manrope'] text-sm leading-7 text-slate-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#91A8F3]">
              Funcionalidades do app
            </p>
            <h2 className="mt-4 max-w-3xl font-['Syne'] text-3xl font-bold leading-tight md:text-5xl">
              O que fica na parte mobile da empresa.
            </h2>
          </div>

          <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
            Esta é a versão voltada para o ambiente corporativo, reunindo recursos práticos
            para consulta, validação e acompanhamento das operações.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {residentModules.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur"
            >
              <h3 className="font-['Syne'] text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 font-['Manrope'] text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#91A8F3]">
              Jornada mobile
            </p>
            <h2 className="mt-4 max-w-3xl font-['Syne'] text-3xl font-bold leading-tight md:text-5xl">
              Como o app acompanha a rotina no dia a dia.
            </h2>
          </div>

          <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
            O aplicativo foi estruturado para reduzir atrito e tornar o acompanhamento
            das operações mais simples para quem trabalha fora do desktop.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-linear-to-b from-[#91A8F3]/60 via-[#91A8F3]/25 to-transparent md:block" />

          <div className="space-y-6">
            {mobileTimeline.map((item) => (
              <article
                key={item.step}
                className="relative grid gap-4 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[120px_1fr] md:items-start md:pl-12"
              >
                <div className="absolute left-1.75 top-8 hidden h-4 w-4 rounded-full border-4 border-[#0b1020] bg-[#91A8F3] md:block" />

                <div className="inline-flex w-fit rounded-full bg-[#242c48] px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.22em] text-[#d8e1fb]">
                  Etapa {item.step}
                </div>

                <div>
                  <h3 className="font-['Syne'] text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl font-['Manrope'] text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[linear-gradient(135deg,#242c48_0%,#313b60_55%,#adb9df_140%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.3em] text-[#e1e7f8]">
                Portal Empresa Mobile
              </p>
              <h2 className="mt-4 font-['Syne'] text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                Uma extensão mobile para manter a operação próxima de quem decide.
              </h2>
              <p className="mt-5 font-['Manrope'] text-base leading-8 text-slate-200">
                A versão app complementa o portal web com mobilidade, leitura rápida e acesso mais prático para o acompanhamento da rotina.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/portal-empresa"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-['Manrope'] text-base font-semibold text-[#242c48] transition hover:bg-[#eef2fb]"
              >
                Versão web
              </Link>

              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 font-['Manrope'] text-base font-semibold text-white transition hover:bg-white/15"
              >
                Voltar ao showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-8">
        <Copyright />
      </footer>
    </div>
  );
}
