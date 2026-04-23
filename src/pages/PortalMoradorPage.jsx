import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-empresa.svg";
import Header from "../components/Header";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { Warehouse } from "@phosphor-icons/react";
import { Copyright } from "../components/portal/Copyright";

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
      "Elimine falhas de comunicação entre a empresa e a administração com um canal centralizado.",
    icon: "",
  },
];
const adminModules = [
  {
    id: "01",
    title: "Convites de acesso",
    description:
      "Acesso mais simples e seguro para visitantes, prestadores de serviço",
    items: [
      "Mais praticidade para administração",
      "informações claras para os moradores",
      "informações em tempo real sobre",
    ],
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/app%20_convites_de_acesso.png",
  },
  {
    id: "02",
    title: "Encomendas",
    description: "Encomendas disponiveis de forma estruturada.",
    items: [
      "Organizacao das entregas para os moradores",
      "Historico centralizado para consulta recorrente",
      "Mais transparência no relacionamento com os condominos",
    ],
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/Encomenda%20(2).png",
  },
  {
    id: "03",
    title: "Segurança e controle de acesso",
    description: "Mais segurança e confiabilidade no dia a dia.",
    items: [
      "Autenticação segura",
      "Controle de acesso para a administração",
      "informações em tempo real sobre a movimentacao do condomínio",
    ],
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/AutenticacaoApp%20(1).png",
  },
];

const adminFeatures = [
  "Mural de avisos e comunicados",
  "Agendamento de visitas e prestadores de serviço",
  "Historico de Acesso",
  "Reservas de espacos",
  "Ficha de Viagem",
  "Botao de pânicopara emergencias",
];

const adminTimeline = [
  {
    step: "01",
    title: "Centralizar a informacao",
    text: "A administração organiza comunicados, documentos e materiais importantes em um ambiente único.",
  },
  {
    step: "02",
    title: "Acompanhar a operação",
    text: "Reservas, encomendas e registros passam a ser tratados com mais visibilidade e menos dependencia de fluxos informais.",
  },
  {
    step: "03",
    title: "Ganhar eficiencia",
    text: "Com o portal integrado ao detk Acesso, a rotina do condomínio fica mais simples, organizada e rastreavel.",
  },
];

const clientShowcase = [
  "Assosiação residencial 1",
  "Myra",
  "Montblanc ",
  "Ghaia",
  "Saint paul",
];

function Banner() {
  return (
    <div className="relative mx-auto w-full max-w-195">
      <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-[#53AEF4]/18 blur-3xl lg:block" />
      <div className="absolute -right-6 bottom-6 h-36 w-36 rounded-full" />

      <div className="relative overflow-hidden p-3 md:p-4">
        <div className="overflow-hidden rounded-[22px]  md:rounded-[28px]">
          <img
            src="../bannermorador.svg"
            alt="Tela de funcionários do Portal Morador"
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default function PortalMoradorPage() {
  return (
    <div className="min-h-screen bg-[#0F2537] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(83,174,244,0.16),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(15,37,55,0.92),transparent_26%),linear-gradient(180deg,#0F2537_0%,#0C1D2C_100%)]" />
        <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl">
          <Header />

          <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14 lg:pt-16">
            <div className="space-y-7 lg:pr-4">
              <div className="inline-flex rounded-full border border-[#53AEF4]/25 bg-[#53AEF4]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#BFE3FC]">
                Portal Morador
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-['Syne'] text-[2.7rem] leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                  O Detk Portal Morador na operação da administração.
                </h1>

                <p className="max-w-xl font-['Manrope'] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
                  A versâo web e exclusiva para a administração do condomínio e
                  foi desenvolvida para organizar a rotina, centralizar
                  comunicacoes e dar mais controle sobre as informações ligadas
                  aos moradores e as residências.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://portalmorador.grupodetk.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#53AEF4] to-[#7EC4F7] px-7 py-4 font-['Manrope'] text-base font-semibold text-[#0F2537] shadow-[0_20px_50px_rgba(83,174,244,0.28)] transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Acessar plataforma
                </a>

                <a
                  href="#etapas"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 font-['Manrope'] text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ver Módulos principais
                </a>
              </div>
            </div>

            <Banner />
          </div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px]  px-6 py-8 md:px-8 md:py-10">
          <div className="flex overflow-hidden">
            <div className="flex min-w-max animate-[client-marquee_32s_linear_infinite] cursor-pointer gap-6 pr-6">
              {[...clientShowcase, ...clientShowcase].map((client, index) => (
                <article
                  key={`${client.cliente}-${index}`}
                  className="flex h-28 w-[320px] shrink-0 items-center gap-4 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(15,37,55,0.95),rgba(83,174,244,0.18))] px-5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full p-2 shadow-[inset_0_0_0_1px_rgba(11,16,32,0.06)]">
                    <span>
                      <Warehouse size={32} />
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
                className="rounded-4xl border border-white/10 bg-[#0F2537]/55 p-8 transition hover:bg-[#0F2537]/75"
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

      <section id="etapas" className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9ED5FA]/80">
                Funcionalidades em destaque
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                O que fica na parte web da administração.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A versâo web concentra o que a administração precisa para
              comunicar, organizar e acompanhar a operação do condomínio.
            </p>
          </div>

          <div className="space-y-8">
            {adminModules.map((group, index) => (
              <article
                key={group.title}
                className={`grid gap-8 rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center ${
                  index % 2 === 1 ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex rounded-full bg-[#0C1D2C] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#BFE3FC]">
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
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#53AEF4]" />
                        <p className="font-['Manrope'] text-sm leading-6 text-slate-200">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-[30px] bg-[#0C1D2C] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full rounded-3xl object-cover object-top"
                    />
                  </div>
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9ED5FA]/80">
                Recursos complementares
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Funcionalidades que fortalecem a Gestão do condomínio.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A administração ganha uma base mais clara para informar,
              documentar e apoiar a operação de forma consistente.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {adminFeatures.map((item) => (
              <article
                key={item}
                className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <p className="font-['Syne'] text-2xl leading-tight tracking-[-0.04em] text-white">
                  {item}
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9ED5FA]/80">
                Jornada web
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Como a administração usa o portal na pratica.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A experiência web foi organizada para transformar a rotina do
              condomínio em um fluxo mais simples e confiavel.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-linear-to-b from-[#53AEF4]/60 via-[#53AEF4]/25 to-transparent md:block" />

            <div className="space-y-6">
              {adminTimeline.map((item) => (
                <article
                  key={item.step}
                  className="relative grid gap-4 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[120px_1fr] md:items-start md:pl-12"
                >
                  <div className="absolute left-1.75 top-8 hidden h-4 w-4 rounded-full border-4 border-[#0F2537] bg-[#53AEF4] md:block" />

                  <div className="inline-flex w-fit rounded-full bg-[#0C1D2C] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#BFE3FC]">
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
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[linear-gradient(135deg,#0C1D2C_0%,#0F2537_55%,#53AEF4_140%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4EEFE]">
                Portal Morador Web
              </p>
              <h2 className="mt-4 font-['Syne'] text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                A parte web cuida da administração. O app cuida da rotina do
                morador.
              </h2>
              <p className="mt-5 font-['Manrope'] text-base leading-8 text-slate-200">
                Essa separacao deixa a operação mais clara para o condomínio:
                administração com mais controle no desktop e moradores com mais
                autonomia no celular.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/app_portal_morador"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-[#0F2537] transition hover:bg-[#DFF1FE]"
              >
                Versâo app
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
