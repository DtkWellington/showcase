import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-empresa.svg";
import Header from "../components/Header";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { Warehouse } from "@phosphor-icons/react";

const adminHighlights = [
  {
    title: "Versao web exclusiva",
    text: "A plataforma web foi pensada para a administracao do condominio, concentrando operacao, comunicacao e consulta em um unico ambiente.",
  },
  {
    title: "Rotina mais organizada",
    text: "Avisos, documentos, encomendas e acompanhamentos ficam estruturados com mais clareza para o time responsavel pelo dia a dia.",
  },
  {
    title: "Integracao com o detk Acesso",
    text: "O portal trabalha conectado ao sistema de controle de acesso para apoiar a rotina operacional com mais agilidade e rastreabilidade.",
  },
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
const adminModules = [
  {
    id: "01",
    title: "Convites de acesso",
    description:
      "Acesso mais simples e seguro para visitantes, prestadores de servico",
    items: [
      "Mais praticidade para administração",
      "Informações claras para os moradores",
      "Informações em tempo real sobre",
    ],
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/app%20_convites_de_acesso.png",
  },
  {
    id: "02",
    title: "Encomendas",
    description: "Encomendas disponiveis de forma estruturada.",
    items: [
      "Organização das entregas para os moradores",
      "Historico centralizado para consulta recorrente",
      "Mais transparencia no relacionamento com os condominos",
    ],
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/Encomenda%20(2).png",
  },
  {
    id: "03",
    title: "Segurança e controle de acesso",
    description: "Mais seguranca e confiabilidade no dia a dia.",
    items: [
      "Autenticacao segura",
      "Controle de acesso para a administracao",
      "Informações em tempo real sobre a movimentação do condominio",
    ],
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/app_visualizacao.png",
  },
];

const adminFeatures = [
  "Mural de avisos centralizado",
  "Publicacao de documentos e regulamentos",
  "Gestao de encomendas e notificacoes",
  "Acompanhamento de reservas de espacos",
  "Consulta de demandas ligadas aos moradores",
  "Mais controle sobre a rotina administrativa",
];

const adminTimeline = [
  {
    step: "01",
    title: "Centralizar a informacao",
    text: "A administracao organiza comunicados, documentos e materiais importantes em um ambiente unico.",
  },
  {
    step: "02",
    title: "Acompanhar a operacao",
    text: "Reservas, encomendas e registros passam a ser tratados com mais visibilidade e menos dependencia de fluxos informais.",
  },
  {
    step: "03",
    title: "Ganhar eficiencia",
    text: "Com o portal integrado ao detk Acesso, a rotina do condominio fica mais simples, organizada e rastreavel.",
  },
];

const clientShowcase = [
  "Assosiação Residencial 1",
  "Myra",
  "Assosiação Residencial 2",
  "Myra 2",
  "Assosiação Residencial 1",
  "Myra",
  "Assosiação Residencial 2",
  "Myra 2",
];

function Copyright(props) {
  return (
    <p className="text-center text-sm text-white/70" {...props}>
      Copyright ©{" "}
      <a
        className="font-semibold text-white transition hover:text-cyan-300"
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

function AdminPreview() {
  return (
    <div className="relative mx-auto flex w-full min-h-[420px] items-center justify-center lg:min-h-[560px]">
      <div className="absolute -left-10 top-14 hidden h-32 w-32 rounded-full bg-[#242c48]/45 blur-3xl lg:block" />
      <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-[#adb9df]/30 blur-3xl" />

      <div className="relative flex h-full w-full items-center justify-center rounded-[36px] p-4 lg:p-0">
        <img
          src="../bannermorador.svg"
          alt="Tela de funcionários do Portal Morador"
          className="h-auto w-full max-w-[780px] rounded-[16px] object-contain lg:max-w-[920px]"
        />
      </div>
    </div>
  );
}

export default function PortalMoradorPage() {
  const [isPreviewFullscreen, setIsPreviewFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07111B] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(87,182,255,0.16),_transparent_22%),radial-gradient(circle_at_88%_12%,_rgba(10,24,38,0.92),_transparent_26%),linear-gradient(180deg,#07111B_0%,#0B1622_100%)]" />
        <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl">
          <Header />

          <div className="grid gap-16 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-20">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Portal Morador
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl font-['Syne'] text-4xl leading-[0.94] tracking-[-0.06em] text-white md:text-7xl">
                  O Detk Portal Morador na operacao da administracao.
                </h1>

                <p className="max-w-2xl font-['Manrope'] text-lg leading-8 text-slate-300 md:text-xl">
                  A versao web e exclusiva para a administracao do condominio e
                  foi desenvolvida para organizar a rotina, centralizar
                  comunicacoes e dar mais controle sobre as informacoes ligadas
                  aos moradores e as residencias.
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
                  href="#etapas"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 font-['Manrope'] text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Ver módulos principais
                </a>
              </div>
            </div>

            <AdminPreview />
          </div>
        </div>
      </section>
      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[42px]  px-6 py-8 md:px-8 md:py-10">
          <div className="flex overflow-hidden">
            <div className="flex min-w-max animate-[client-marquee_32s_linear_infinite] gap-6 pr-6 cursor-pointer">
              {[...clientShowcase, ...clientShowcase].map((client, index) => (
                <article
                  key={`${client.cliente}-${index}`}
                  className="flex h-28 w-[320px] shrink-0 items-center gap-4 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(36,44,72,0.95),rgba(173,185,223,0.18))] px-5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {adminHighlights.map((card) => (
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
      </section>
      <section id="etapas" className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Funcionalidades em destaque
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                O que fica na parte web da administracao.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A versao web concentra o que a administracao precisa para
              comunicar, organizar e acompanhar a operacao do condominio.
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
                  <div className="inline-flex rounded-full bg-[#0B1622] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
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
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <p className="font-['Manrope'] text-sm leading-6 text-slate-200">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-[30px] bg-[#0B1622] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full rounded-[24px] object-cover object-top"
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Recursos de apoio
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Funcionalidades que fortalecem a gestao do condominio.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A administracao ganha uma base mais clara para informar,
              documentar e apoiar a operacao de forma consistente.
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Jornada web
              </p>
              <h2 className="mt-4 max-w-3xl font-['Syne'] text-4xl leading-tight tracking-[-0.05em] text-white md:text-5xl">
                Como a administracao usa o portal na pratica.
              </h2>
            </div>

            <p className="max-w-xl font-['Manrope'] text-base leading-8 text-slate-300">
              A experiencia web foi organizada para transformar a rotina do
              condominio em um fluxo mais simples e confiavel.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-cyan-300/25 to-transparent md:block" />

            <div className="space-y-6">
              {adminTimeline.map((item) => (
                <article
                  key={item.step}
                  className="relative grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[120px_1fr] md:items-start md:pl-12"
                >
                  <div className="absolute left-[7px] top-8 hidden h-4 w-4 rounded-full border-4 border-[#07111B] bg-cyan-300 md:block" />

                  <div className="inline-flex w-fit rounded-full bg-[#0B1622] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
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
        <div className="mx-auto max-w-7xl rounded-[42px] bg-[linear-gradient(135deg,#0B1622_0%,#12314B_55%,#57B6FF_140%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:px-12 md:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
                Portal Morador Web
              </p>
              <h2 className="mt-4 font-['Syne'] text-4xl leading-tight tracking-[-0.05em] md:text-5xl">
                A parte web cuida da administracao. O app cuida da rotina do
                morador.
              </h2>
              <p className="mt-5 font-['Manrope'] text-base leading-8 text-slate-200">
                Essa separacao deixa a operacao mais clara para o condominio:
                administracao com mais controle no desktop e moradores com mais
                autonomia no celular.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/app_portal_morador"
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
