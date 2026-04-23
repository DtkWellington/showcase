import { useState } from "react";
import { Link } from "react-router-dom";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import { Copyright } from "../components/portal/Copyright";
const overviewCards = [
  {
    title: "Home",
    text: "Acesso as funcionalidades para gerenciamento e visualização  das informações cadastradas.",
  },
  {
    title: "Departamentos e setores",
    text: "Divisão de departamentos e setores conforme a rotina da empresa.",
  },
  {
    title: "Cargos",
    text: "Cadastro de cargos de acordo com a rotina de cada colaborador.",
  },
  {
    title: "Cartões",
    text: "Vínculos de cartões com colaboradores, para habilitação de acesso.",
  },
];

const featureGroups = [
  {
    id: "01",
    title: "Dashboard",
    description:
      "visão geral da operação com informações de agendamentos e acessos autorizados",
    items: [
      "Tela inicial com visão geral da operação diária",
      "Fluxos de acessos diários e pessoas no prédio",
      "Fluxo de convites previstos para o dia",
    ],
    image:
      "https://sogsfxjgqyubcbcscsob.supabase.co/storage/v1/object/public/photos/dashboard.png",
  },
  {
    id: "02",
    title: "Agendamentos",
    description:
      "Pré-autorização de acesso por categorias, contemplando visitante simples, visitante especial, prestador de serviço e múltiplos visitantes.",
    items: [
      "Agendamento anticipado de acesso para visitantes",
      "Categorias de visitantes para diferentes fluxos de acesso",
      "Histórico de agendamentos e acessos vinculados para consulta",
    ],
    image:
      "https://sogsfxjgqyubcbcscsob.supabase.co/storage/v1/object/public/photos/convites_de_acesso.png",
  },
  {
    id: "03",
    title: "Cadastro de funcionários e estrutura da empresa",
    description:
      "Cadastro e gerenciamento das informações dos funcionários, com organização de departamentos, setores, cargos e cartões de acesso.",
    items: [
      "funcionários centralizados em uma única base",
      "Departamentos e setores conforme a rotina da empresa",
      "cartões e cargos vinculados ao cadastro do colaborador",
    ],
    image:
      "https://sogsfxjgqyubcbcscsob.supabase.co/storage/v1/object/public/photos/cadastro_de_funcionarios.png",
  },
];

const supportModules = [
  {
    title: "Reserva de espaço",
    text: "Caso a empresa possua salas de reunião, e possivel cadastra-las para uso interno dos funcionários habilitados.",
  },
  {
    title: "Documentos",
    text: "Publicação de arquivos referentes a rotina do condomínio em um ambiente único de consulta.",
  },
  {
    title: "Mural",
    text: "Comunicados e enquetes direcionados aos úsuarios da plataforma.",
  },
  {
    title: "Acessos",
    text: "visualização  completa dos acessos vinculados aos agendamentos previamente autorizados.",
  },
  {
    title: "Acessos funcionários",
    text: "visualização  dos registros de acesso de todos os funcionários cadastrados na base da empresa.",
  },
];

const processTimeline = [
  {
    step: "01",
    title: "Acesso a home",
    text: "A empresa entra no portal e visualiza rapidamente as informações e funcionalidades disponíveis para a rotina operacional.",
  },
  {
    step: "02",
    title: "Organização da base",
    text: "funcionários, departamentos, setores, cargos e cartões são cadastrados para estruturar corretamente os perfis e acessos.",
  },
  {
    step: "03",
    title: "Agendamentos e autorizações",
    text: "Visitantes e prestadores de serviço são pré-autorizados por categoria, com controle mais claro sobre cada entrada prevista.",
  },
  {
    step: "04",
    title: "Rotina e comunicação",
    text: "Reservas, documentos, comunicados e enquetes ficam disponíveis em um único ambiente para uso interno e comunicação continua.",
  },
  {
    step: "05",
    title: "Acompanhamento de acessos",
    text: "A plataforma registra os acessos autorizados e também permite consultar os registros de entrada dos funcionários cadastrados.",
  },
];

const clientShowcase = [
  "West Corp",
  "West Towers",
  "West Side",
  "West Point",
  "Evolution Corporate",
  "condomínio Montreal Plaza",
  "Edificio Alfacon",
  "Complexo Madeira",
  "condomínio Canopus",
];
const benefits = [
  {
    title: "Agilidade Operacional",
    description:
      "Reduza o tempo de espera na recepção com pre-autorizações enviadas diretamente pelo portal.",
    icon: "",
  },
  {
    title: "Conformidade LGPD",
    description:
      "Gestão segura dos dados de visitantes e funcionários, seguindo as normas de proteção de dados.",
    icon: "",
  },
  {
    title: "Redução  de Erros",
    description:
      "Elimine falhas de comunicação entre empresas e administração, com um canal centralizado.",
    icon: "",
  },
];

const faqItems = [
  {
    question: "Como os visitantes recebem o acesso?",
    answer:
      "Apos o agendamento no portal, o visitante recebe as instrucoes de acesso, que podem incluir QR Codes ou liberação via documento na portaria.",
  },
  {
    question: "O portal funciona em dispositivos moveis?",
    answer:
      "Sim! O Portal Empresa e totalmente responsivo e tambem possui uma versão em aplicativo para maior comodidade.",
  },
  {
    question: "E possível extrair relatorios de acesso?",
    answer:
      "Sim, os administradores podem visualizar e exportar o historico de acessos dos funcionários e visitantes agendados.",
  },
];

function Banner() {
 return (
    <div className="relative mx-auto w-full max-w-195">
      <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-[#91A8F3]/18 blur-3xl lg:block" />
      <div className="absolute -right-6 bottom-6 h-36 w-36 rounded-full" />

      <div className="relative overflow-hidden p-3 md:p-4">
        <div className="overflow-hidden rounded-[22px]  md:rounded-[28px]">
          <img
            src="../bannerempresa.svg"
            alt="Tela de funcionários do Portal Morador"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default function PortalEmpresaPage() {
  return (
    <div className="min-h-screen bg-[#122053] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(145,168,243,0.2),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(18,32,83,0.92),transparent_24%),linear-gradient(180deg,#122053_0%,#0E1942_100%)]" />
        <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl">
          <Header />

          <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14 lg:pt-16">
            <div className="space-y-7 lg:pr-4">
              <div className="inline-flex rounded-full border border-[#91A8F3]/25 bg-[#122053]/50 px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E0FC]">
                Portal Empresa
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-['Syne'] text-[2.7rem] leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                  Mais controle, autonomia e comunicação.
                </h1>

                <p className="max-w-xl font-['Manrope'] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
                  O Portal Empresa foi desenvolvido para concentrar informações,
                  acessos e funcionalidades em um único ambiente, facilitando a
                  operação diária e a comunicação com a administração do
                  condomínio.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://portalempresa.grupodetk.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#91A8F3] px-7 py-4 font-['Manrope'] text-base font-semibold text-[#122053] shadow-[0_20px_50px_rgba(145,168,243,0.28)] transition hover:-translate-y-0.5 hover:bg-[#A1B6F5]"
                >
                  Acessar plataforma
                </a>

                <a
                  href="#Módulos"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 font-['Manrope'] text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ver Módulos principais
                </a>
              </div>
            </div>

            <Banner />
          </div>
          <div></div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px]  px-6 py-8 md:px-8 md:py-10">
          <div className="flex overflow-hidden">
            <div className="flex min-w-max animate-[client-marquee_22s_linear_infinite] cursor-pointer gap-6 pr-6">
              {[...clientShowcase, ...clientShowcase].map((client, index) => (
                <article
                  key={`${client.cliente}-${index}`}
                  className="flex h-28 w-[320px] shrink-0 items-center gap-4 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,32,83,0.95),rgba(145,168,243,0.18))] px-5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full p-2 shadow-[inset_0_0_0_1px_rgba(11,16,32,0.06)]">
                    <span>
                      <BuildingOfficeIcon className="w-14" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="block font-['Syne'] text-xl leading-tight tracking-[-0.04em] text-white">
                      {client}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-['Syne'] text-3xl tracking-[-0.05em] md:text-5xl">
              Por que utilizar o portal?
            </h2>
            <p className="mx-auto max-w-2xl font-['Manrope'] text-slate-400">
              Muito mais que um cadastro, uma ferramenta estratégica para o dia
              a dia da sua empresa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-4xl border border-white/10 bg-[#122053]/45 p-8 transition hover:bg-[#122053]/65"
              >
                <div className="mb-6 text-4xl">{benefit.icon}</div>
                <h3 className="mb-3 font-['Syne'] text-xl">{benefit.title}</h3>
                <p className="font-['Manrope'] text-sm leading-relaxed text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[38px] bg-[#122053] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-10">
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#91A8F3]">
              Finalidade
            </p>
            <h2 className="mt-4 max-w-md font-['Syne'] text-3xl leading-tight tracking-[-0.05em]">
              Um ambiente para aproximar empresas e administração promovendo uma comunicação integrada.
            </h2>
            <p className="mt-5 max-w-lg font-['Manrope'] text-base leading-8 text-slate-300">
              A solução tem como objetivo proporcionar maior controle e
              autonomia sobre as informações da empresa, oferecendo recursos que
              auxiliam a comunicação com a administração do condomínio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {overviewCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <h3 className="font-['Syne'] text-2xl leading-tight tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 font-['Manrope'] text-sm leading-7 text-slate-300">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="Módulos" className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#91A8F3]">
                Funcionalidades em destaque
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Recursos que acompanham a rotina completa da empresa.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              Da visualização  inicial na home aos registros de acesso, a
              plataforma centraliza agendamentos, colaboradores, comunicação e
              informações operacionais em um único fluxo.
            </p>
          </div>

          <div className="space-y-8">
            {featureGroups.map((group, index) => (
              <article
                key={group.title}
                className={`grid gap-8 rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
                  index % 2 === 1 ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex rounded-full bg-[#122053] px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.22em] text-[#D7E0FC]">
                    Módulo {group.id}
                  </div>
                  <h3 className="mt-5 max-w-xl font-['Syne'] text-3xl leading-tight tracking-[-0.05em] text-white md:text-4xl">
                    {group.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-['Manrope'] text-base leading-8 text-slate-300">
                    {group.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[22px] bg-white/5 px-4 py-4"
                      >
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#91A8F3]" />
                        <p className="font-['Manrope'] text-sm leading-6 text-slate-200">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <button
                    type="button"
                    onClick={() =>
                      setFullscreenImage({
                        src: group.image,
                        alt: group.title,
                      })
                    }
                    className="block w-full overflow-hidden rounded-[30px] bg-[#122053] p-3 text-left shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition hover:scale-[1.01]"
                  >
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full rounded-3xl object-cover object-top"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#91A8F3]">
                Recursos complementares
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Mais funcionalidades para apoiar a operação diaria.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              O portal amplia a experiência com recursos que fortalecem
              comunicação, reservas, documentos e consulta de históricos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {supportModules.map((module) => (
              <article
                key={module.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <h3 className="font-['Syne'] text-2xl leading-tight tracking-[-0.04em] text-white">
                  {module.title}
                </h3>
                <p className="mt-4 font-['Manrope'] text-sm leading-7 text-slate-300">
                  {module.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#91A8F3]">
                Processo da plataforma
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Como o Portal Empresa acompanha a operação do início ao controle
                final.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A jornada foi organizada para mostrar como a plataforma centraliza
              cadastro, autorização, comunicação e consulta de acessos em um so
              fluxo.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-linear-to-b from-[#91A8F3]/60 via-[#91A8F3]/25 to-transparent md:block" />

            <div className="space-y-6">
              {processTimeline.map((item) => (
                <article
                  key={item.step}
                  className="relative grid gap-4 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[120px_1fr] md:items-start md:pl-12"
                >
                  <div className="absolute left-1.75 top-8 hidden h-4 w-4 rounded-full border-4 border-[#122053] bg-[#91A8F3] md:block" />

                  <div className="inline-flex w-fit rounded-full bg-[#122053] px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.22em] text-[#D7E0FC]">
                    Etapa {item.step}
                  </div>

                  <div>
                    <h3 className="font-['Syne'] text-2xl leading-tight tracking-[-0.04em] text-white">
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
        </div>
      </section>

      <section className="px-6 pb-24 pt-12 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[linear-gradient(135deg,#0E1942_0%,#122053_55%,#91A8F3_140%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.3em] text-[#E3EAFD]">
                Portal Empresa
              </p>
              <h2 className="mt-4 font-['Syne'] text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                Uma plataforma completa para conectar empresa e administração
                com mais eficiência.
              </h2>
              <p className="mt-5 font-['Manrope'] text-base leading-8 text-slate-200">
                Gestão de visitantes, cadastro de colaboradores,
                departamentos, cargos, cartões, reservas, documentos, mural e
                histórico de acessos em uma experiência única.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/app_portal_empresa"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-[#122053] transition hover:bg-[#EEF2FE]"
              >
                Versão app
              </Link>

              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
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

      <style>{`
        @keyframes client-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
