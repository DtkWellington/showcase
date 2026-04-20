import { Link } from "react-router-dom";
import Logo from "../assets/logo-empresa.svg";
import Header from "../components/Header";

const mobileHighlights = [
  {
    title: "Versao app exclusiva",
    text: "O aplicativo foi desenvolvido para o morador, com foco em autonomia, praticidade e acesso rapido as informacoes da residencia.",
  },
  {
    title: "Rotina mais simples",
    text: "Visitantes, encomendas, reservas, comunicados e outros recursos ficam reunidos em um unico ambiente no celular.",
  },
  {
    title: "Integracao com o detk Acesso",
    text: "O app se conecta ao ecossistema do condominio para apoiar liberacoes, acompanhamento de acessos e comunicacao com a administracao.",
  },
];

const residentModules = [
  {
    title: "Agendamento de visitantes",
    description:
      "Realize o agendamento de visitantes de forma simples e rapida, com liberacao automatica de acesso no momento da entrada e dupla checagem no check-in.",
  },
  {
    title: "Historico de acesso",
    description:
      "Acompanhe os registros de acesso relacionados a sua rotina com mais controle e visibilidade dentro do aplicativo.",
  },
  {
    title: "Documentos",
    description:
      "Consulte atas, relatorios, regulamentos e outros materiais compartilhados pela administracao em um unico lugar.",
  },
  {
    title: "Reserva de espaco",
    description:
      "Visualize disponibilidade, faca agendamentos e garanta o uso organizado das areas compartilhadas do condominio.",
  },
  {
    title: "Botao de panico (SOS)",
    description:
      "Na tela inicial, o morador pode acionar rapidamente o recurso em situacoes entendidas como de extrema emergencia.",
  },
  {
    title: "Comunicacao com a administracao",
    description:
      "O app aproxima o morador da administracao com informacoes oficiais, avisos relevantes e tratativas ligadas a rotina da residencia.",
  },
];

const mobileTimeline = [
  {
    step: "01",
    title: "Entrar no app",
    text: "O morador acessa o Portal Morador pelo celular com uma experiencia preparada para uso rapido no dia a dia.",
  },
  {
    step: "02",
    title: "Consultar informacoes",
    text: "Avisos, documentos, acessos, reservas e outros dados importantes ficam disponiveis em um unico lugar.",
  },
  {
    step: "03",
    title: "Executar a rotina",
    text: "Agendar visitantes, reservar espacos, acompanhar encomendas e registrar ficha de viagem passam a exigir menos atrito.",
  },
  {
    step: "04",
    title: "Ganhar autonomia",
    text: "O aplicativo reduz dependencias operacionais e entrega mais controle para o morador sobre as demandas ligadas a residencia.",
  },
];

export default function PortalMoradorMobilePage() {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=com.grupodetk.appportalmorador.app_portalmorador";
  const IOSUrl =
    "https://apps.apple.com/br/app/portal-morador/id6745190100";

  const features = [
    {
      title: "Reservas",
      description:
        "Consulte a disponibilidade dos espacos e reserve datas e horarios com mais autonomia, seguindo as regras do condominio.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/Reservas2.png",
    },
    {
      title: "Ficha de Viagem",
      description:
        "Registre ausencia, notifique a administracao e acompanhe a tratativa com chat integrado para comunicacao direta.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/FichaViagem.png",
    },
    {
      title: "Encomendas",
      description:
        "Receba notificacoes sobre entregas e acompanhe o processo de retirada com mais agilidade e transparencia.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/Encomenda%20(2).png",
    },
    {
      title: "Avisos",
      description:
        "Tenha acesso ao mural de avisos do condominio em um canal oficial e sempre atualizado.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/Avisos.png",
    },
    {
      title: "Autenticacao no App",
      description:
        "Mais seguranca para acessar os recursos do Portal Morador e usar o aplicativo com confiabilidade no dia a dia.",
      image:
        "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/novasFuncoes/AutenticacaoApp%20(1).png",
    },
  ];

  function Copyright(props) {
    return (
      <p className="text-center text-sm text-white/80" {...props}>
        Copyright ©{" "}
        <a
          className="font-medium text-white hover:text-cyan-300"
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

  return (
    <div className="min-h-screen bg-[#07111B] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#57B6FF]/15 blur-3xl" />
          <div className="absolute right-[-100px] top-[120px] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-140px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
        <Header/>

          <div className="grid gap-16 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-20">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Versão mobile
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                  A comodidade que seu condomínio precisa 
                 
                </h1>

                <p className="max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                  O aplicativo e exclusivo para moradores e proporciona mais
                  autonomia, controle e praticidade sobre as demandas e
                  informacoes relacionadas a residencia.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={APKUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-[#57B6FF] to-cyan-400 px-6 py-4 text-center text-base font-semibold text-[#07111B] shadow-[0_20px_60px_rgba(87,182,255,0.25)] transition hover:scale-[1.02]"
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
              <div className="absolute inset-auto top-16 h-72 w-72 rounded-full bg-[#57B6FF]/20 blur-3xl" />

              <div className="relative grid w-full max-w-2xl grid-cols-2 gap-5">
                <div className="translate-y-8 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <img
                    src="https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/splash.jpg"
                    alt="Tela inicial do app"
                    className="aspect-[9/19] w-full rounded-[22px] object-cover object-top"
                  />
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <img
                    src="https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/validation.jpg"
                    alt="Tela de validacao por OTP"
                    className="aspect-[9/19] w-full rounded-[22px] object-cover object-top"
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
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#57B6FF] to-cyan-300" />
          <h2 className="text-3xl font-bold md:text-5xl">
            Recursos que facilitam sua rotina
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Uma experiencia pensada para moradores com mais organizacao,
            comunicacao e seguranca em um so lugar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-t-[30px] bg-[#0B1622]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/10] w-full object-contain bg-[#0B1622] transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-slate-300">
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Funcionalidades do app
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              O que fica na parte mobile do morador.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-300">
            Esta e a versao voltada para o morador, reunindo recursos praticos
            para consulta, organizacao da rotina e comunicacao com a
            administracao.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {residentModules.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Jornada do morador
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Como o app acompanha a rotina no dia a dia.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-300">
            O aplicativo foi estruturado para reduzir atrito e tornar a gestao
            da residencia mais simples para quem mora no condominio.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/60 via-cyan-300/25 to-transparent md:block" />

          <div className="space-y-6">
            {mobileTimeline.map((item) => (
              <article
                key={item.step}
                className="relative grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur md:grid-cols-[120px_1fr] md:items-start md:pl-12"
              >
                <div className="absolute left-[7px] top-8 hidden h-4 w-4 rounded-full border-4 border-[#07111B] bg-cyan-300 md:block" />

                <div className="inline-flex w-fit rounded-full bg-[#0B1622] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                  Etapa {item.step}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <Copyright />
      </footer>
    </div>
  );
}
