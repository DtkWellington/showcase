import { useState } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Controle de Entrada",
    description:
      "gestãoautomatizada de entrada e saida de veiculos com leitura de placas.",
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/acesso-pista/entrada.png",
  },
  {
    title: "Monitoramento em Tempo Real",
    description:
      "Acompanhe todas as movimentacoes atraves de um painel intuitivo.",
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/acesso-pista/monitoramento.png",
  },
  {
    title: "Relatorios Detalhados",
    description:
      "Geracao de relatorios completos sobre fluxo de veiculos e ocorrencias.",
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/acesso-pista/relatorios.png",
  },
  {
    title: "Integraçãocom Catracas",
    description:
      "comunicação com sistemas de catraca e cancelas para controle total.",
    image:
      "https://upsxlmiuvthqqxvwhzar.supabase.co/storage/v1/object/public/img/acesso-pista/integracao.png",
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

export default function DetkAcessoPistaPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#07111B] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#151C2A]/20 blur-3xl" />
          <div className="absolute right-[-100px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#91A8F3]/10 blur-3xl" />
          <div className="absolute bottom-[-140px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#151C2A]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md hover:bg-white/10"
            >
              ← Voltar ao Showcase
            </Link>

            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
              DETK Acesso Pista
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                  <span className="bg-gradient-to-r from-[#151C2A] to-[#91A8F3] bg-clip-text text-transparent">
                    DETK Acesso Pista
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                  Sistema de controle de acesso para pistas com identificacao
                  automatizada, monitoramento 24h e seguranca avancada.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://acesso-pista.grupodetk.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-[#151C2A] to-[#91A8F3] px-6 py-4 text-center text-base font-semibold text-white shadow-[0_20px_60px_rgba(21,28,42,0.4)] transition hover:scale-[1.02]"
                >
                  Acessar Sistema
                </a>
                <Link
                  to="/"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10"
                >
                  Ver Demo
                </Link>
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-400">Automacao</p>
                  <p className="mt-2 font-medium text-white">
                    Processos automatizados
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-400">Seguranca</p>
                  <p className="mt-2 font-medium text-white">
                    Controle rigoroso
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-sm text-slate-400">Monitoramento</p>
                  <p className="mt-2 font-medium text-white">
                    Acompanhamento 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-2xl justify-center">
              <div className="absolute inset-auto top-16 h-72 w-72 rounded-full bg-[#151C2A]/20 blur-3xl" />
              <div className="relative grid w-full max-w-2xl grid-cols-2 gap-5">
                <div className="translate-y-8 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <div className="flex aspect-[9/19] w-full items-center justify-center rounded-[22px] bg-gradient-to-r from-[#151C2A] to-[#91A8F3]/30">
                    <span className="text-sm text-slate-400">Interface</span>
                  </div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  <div className="flex aspect-[9/19] w-full items-center justify-center rounded-[22px] bg-gradient-to-r from-[#151C2A] to-[#91A8F3]/30">
                    <span className="text-sm text-slate-400">Monitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#151C2A] to-[#91A8F3]" />
          <h2 className="text-3xl font-bold md:text-5xl">
            Recursos essenciais
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Ferramentas robustas para controle de acesso em pistas e garagens.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md transition hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() =>
                  setSelectedImage({
                    src: feature.image,
                    alt: feature.title,
                  })
                }
                className="block w-full cursor-zoom-in overflow-hidden rounded-t-[30px] bg-[#0B1622] text-left"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/10] w-full object-contain bg-[#0B1622] transition duration-300 group-hover:scale-[1.02]"
                />
              </button>

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

      <footer className="border-t border-white/10 px-6 py-8">
        <Copyright />
      </footer>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07111B]/92 px-6 py-10 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Fechar imagem"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Fechar
          </button>

          <div className="w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#151C2A] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-full rounded-[24px] object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
