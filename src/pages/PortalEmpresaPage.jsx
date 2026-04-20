import { useState } from "react";
import { Link } from "react-router-dom";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
const overviewCards = [
  {
    title: "Home",
    text: "Acesso as funcionalidades para gerenciamento e visualização das informaçõees cadastradas.",
  },
  {
    title: "Departamentos e setores",
    text: "Cadastro de departamentos e setores conforme a rotina da empresa.",
  },
  {
    title: "Cargos",
    text: "Cadastro de cargos de acordo com a rotina de cada colaborador.",
  },
  {
    title: "Cartões",
    text: "Cadastro e vinculação de cartões ao colaborador, com habilitação de acesso.",
  },
];

const featureGroups = [
  {
    id: "01",
    title: "Dashboard",
    description:
      "Visão geral da operação com informações de agendamentos e acessos autorizados",
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
      "Funcionários centralizados em uma única base",
      "Departamentos e setores conforme a rotina da empresa",
      "Cartões e cargos vinculados ao cadastro do colaborador",
    ],
    image:
      "https://sogsfxjgqyubcbcscsob.supabase.co/storage/v1/object/public/photos/cadastro_de_funcionarios.png",
  },
];

const supportModules = [
  {
    title: "Reserva de espaço",
    text: "Caso a empresa possua salas de reunião, é possível cadastrá-las para uso interno dos funcionários habilitados.",
  },
  {
    title: "Documentos",
    text: "Publicação de arquivos referentes à rotina do condomínio em um ambiente único de consulta.",
  },
  {
    title: "Mural",
    text: "Comunicados e enquetes direcionados aos usuários da plataforma.",
  },
  {
    title: "Acessos",
    text: "Visualização completa dos acessos vinculados aos agendamentos previamente autorizados.",
  },
  {
    title: "Acessos funcionários",
    text: "Visualização dos registros de acesso de todos os funcionários cadastrados na base da empresa.",
  },
];

const processTimeline = [
  {
    step: "01",
    title: "Acesso a home",
    text: "A empresa entra no portal e visualiza rapidamente as informaçõees e funcionalidades dispon­íveis para a rotina operacional.",
  },
  {
    step: "02",
    title: "Organização da base",
    text: "Funcionários, departamentos, setores, cargos e cartões são cadastrados para estruturar corretamente os perfis e acessos.",
  },
  {
    step: "03",
    title: "Agendamentos e autorizações",
    text: "Visitantes e prestadores de serviço são pré-autorizados por categoria, com controle mais claro sobre cada entrada prevista.",
  },
  {
    step: "04",
    title: "Rotina e comunicação",
    text: "Reservas, documentos, comunicados e enquetes ficam disponíveis em um único ambiente para uso interno e comunicação contínua.",
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
  "Evolution Corporate",
  "West Side",
  "Edifício Alfacon",
  "Complexo Madeira",
];
const benefits = [
  {
    title: "Agilidade Operacional",
    description:
      "Reduza o tempo de espera na recepção com pré-autorizações enviadas diretamente pelo portal.",
    icon: "",
  },
  {
    title: "Conformidade LGPD",
    description:
      "Gestão segura dos dados de visitantes e funcionários, seguindo as normas de proteção de dados.",
    icon: "",
  },
  {
    title: "Redução de Erros",
    description:
      "Elimine falhas de comunicação entre a empresa e a administração com um canal centralizado.",
    icon: "",
  },
];

const faqItems = [
  {
    question: "Como os visitantes recebem o acesso?",
    answer:
      "Após o agendamento no portal, o visitante recebe as instruções de acesso, que podem incluir QR Codes ou liberação via documento na portaria.",
  },
  {
    question: "O portal funciona em dispositivos móveis?",
    answer:
      "Sim! O Portal Empresa é totalmente responsivo e também possui uma versão em aplicativo para maior comodidade.",
  },
  {
    question: "É possível extrair relatórios de acesso?",
    answer:
      "Sim, os administradores podem visualizar e exportar o histórico de acessos dos funcionários e visitantes agendados.",
  },
];
function Copyright(props) {
  return (
    <p className="text-center text-sm text-white/70" {...props}>
      Copyright Â©{" "}
      <a
        className="font-semibold text-white transition hover:text-[#adb9df]"
        href="https://grupodetk.com.br/"
        target="_blank"
        rel="noreferrer"
      >
        Grupo DETK
      </a>{" "}
      {new Date().getFullYear()}.
    </p>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[580px]">
      <div className="absolute -left-10 top-14 hidden h-32 w-32 rounded-full bg-[#242c48]/45 blur-3xl lg:block" />
      <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-[#adb9df]/30 blur-3xl" />
      <div className="absolute top-[-200px] rounded-[36px]  p-4 ">
        <img
          src="../bannerempresa.svg"
          alt="Tela de funcionÃ¡rios do Portal Empresa"
          className="w-[80%] rounded-[16px] object-contain object-top"
        />
      </div>
    </div>
  );
}

export default function PortalEmpresaPage() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(173,185,223,0.2),_transparent_22%),radial-gradient(circle_at_88%_12%,_rgba(36,44,72,0.92),_transparent_24%),linear-gradient(180deg,#0b1020_0%,#12182b_100%)]" />
        <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl">
          <Header />

          <div className="grid gap-16 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pt-20">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-[#adb9df]/25 bg-[#242c48]/50 px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#d8e1fb]">
                Portal Empresa
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl font-['Syne'] text-2xl leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
                  Mais controle, autonomia e comunicaÃ§Ã£o.
                </h1>

                <p className="max-w-2xl font-['Manrope'] text-lg leading-8 text-slate-300 md:text-xl">
                  O Portal Empresa foi desenvolvido para concentrar informaçõs,
                  acessos e funcionalidades em um único ambiente, facilitando a
                  operação diária e a comunicação com a administração do
                  condomínio.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://portalempresa.grupodetk.com.br/login"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#adb9df] px-7 py-4 font-['Manrope'] text-base font-semibold text-[#242c48] shadow-[0_20px_50px_rgba(173,185,223,0.28)] transition hover:-translate-y-0.5 hover:bg-[#bcc6e5]"
                >
                  Acessar plataforma
                </a>

                <a
                  href="#modulos"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 font-['Manrope'] text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ver mÃ³dulos principais
                </a>
              </div>
            </div>

            <DashboardPreview />
          </div>
          <div></div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px]  px-6 py-8 md:px-8 md:py-10">
          <div className="flex overflow-hidden">
            <div className="flex min-w-max animate-[client-marquee_22s_linear_infinite] gap-6 pr-6 cursor-pointer">
              {[...clientShowcase, ...clientShowcase].map((client, index) => (
                <article
                  key={`${client.cliente}-${index}`}
                  className="flex h-28 w-[320px] shrink-0 items-center gap-4 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(36,44,72,0.95),rgba(173,185,223,0.18))] px-5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
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
          <div className="text-center mb-12">
            <h2 className="font-['Syne'] text-3xl md:text-5xl tracking-[-0.05em] mb-4">
              Por que utilizar o portal?
            </h2>
            <p className="font-['Manrope'] text-slate-400 max-w-2xl mx-auto">
              Muito mais que um cadastro, uma ferramenta estratégica para o dia
              a dia da sua empresa.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-[32px] border border-white/10 bg-[#242c48]/30 hover:bg-[#242c48]/50 transition"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="font-['Syne'] text-xl mb-3">{benefit.title}</h3>
                <p className="font-['Manrope'] text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[38px] bg-[#242c48] p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-10">
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#adb9df]">
              Finalidade
            </p>
            <h2 className="mt-4 max-w-md font-['Syne'] text-4xl leading-tight tracking-[-0.05em]">
              Um único ambiente para aproximar empresa e administração.
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

      <section id="modulos" className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#adb9df]">
                Funcionalidades em destaque
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Recursos que acompanham a rotina completa da empresa.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              Da visualização inicial na home aos registros de acesso, a
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
                  <div className="inline-flex rounded-full bg-[#242c48] px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.22em] text-[#d8e1fb]">
                    Etapa {group.id}
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
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#adb9df]" />
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
                    className="block w-full cursor-zoom-in overflow-hidden rounded-[30px] bg-[#242c48] p-3 text-left shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition hover:scale-[1.01]"
                  >
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full rounded-[24px] object-cover object-top"
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
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#adb9df]">
                Processo da plataforma
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Como o Portal Empresa acompanha a operação do início ao controle
                final.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A jornada foi organizada para mostrar como a plataforma centraliza
              cadastro, autorização, comunicação e consulta de acessos em um só
              fluxo.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#adb9df]/60 via-[#adb9df]/25 to-transparent md:block" />

            <div className="space-y-6">
              {processTimeline.map((item) => (
                <article
                  key={item.step}
                  className="relative grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[120px_1fr] md:items-start md:pl-12"
                >
                  <div className="absolute left-[7px] top-8 hidden h-4 w-4 rounded-full border-4 border-[#0b1020] bg-[#adb9df] md:block" />

                  <div className="inline-flex w-fit rounded-full bg-[#242c48] px-4 py-2 font-['Manrope'] text-xs font-semibold uppercase tracking-[0.22em] text-[#d8e1fb]">
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

      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.28em] text-[#adb9df]">
                Recursos complementares
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Mais funcionalidades para apoiar a operação diária.
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

      <section className="px-6 pb-24 pt-12 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[linear-gradient(135deg,#242c48_0%,#313b60_55%,#adb9df_140%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.3em] text-[#e1e7f8]">
                Portal Empresa
              </p>
              <h2 className="mt-4 font-['Syne'] text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                Uma plataforma completa para conectar empresa e administração
                com mais eficiência.
              </h2>
              <p className="mt-5 font-['Manrope'] text-base leading-8 text-slate-200">
                Reúna gestão de visitantes, cadastro de colaboradores,
                departamentos, cargos, cartões, reservas, documentos, mural e
                histórico de acessos em uma experiência única.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/app_portal_empresa"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-[#07111B] transition hover:bg-[#eef7ff]"
              >
                Ver versao app
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

      {fullscreenImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1020]/92 px-6 py-10 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setFullscreenImage(null)}
            className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-['Manrope'] text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Fechar
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#242c48] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <img
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              className="max-h-[85vh] w-full rounded-[24px] object-contain"
            />
          </div>
        </div>
      ) : null}

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
