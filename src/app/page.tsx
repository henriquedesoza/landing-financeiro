const features = [
  {
    icon: "🤖",
    title: "Categorização automática",
    description:
      "Cada lançamento é classificado sozinho, na hora. Sem planilhas, sem digitar categoria.",
  },
  {
    icon: "🔔",
    title: "Alertas de gastos",
    description:
      "Avisos no celular quando você se aproxima do limite de uma categoria ou do orçamento do mês.",
  },
  {
    icon: "🎯",
    title: "Metas e economia",
    description:
      "Defina objetivos e acompanhe o progresso com projeções de quanto você vai economizar.",
  },
];

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Para começar a organizar o dia a dia.",
    items: ["2 contas conectadas", "Categorização automática", "Orçamento mensal"],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 19",
    period: "/mês",
    description: "Para quem quer controle total.",
    items: [
      "Contas ilimitadas",
      "Alertas inteligentes",
      "Metas e projeções",
      "Relatórios mensais",
    ],
    cta: "Assinar Pro",
    highlighted: true,
  },
  {
    name: "Time",
    price: "R$ 49",
    period: "/mês",
    description: "Para famílias e finanças compartilhadas.",
    items: ["Tudo do Pro", "Até 5 pessoas", "Metas compartilhadas", "Suporte prioritário"],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-lg font-bold tracking-tight">
            Fin<span className="text-emerald-500">ora</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#precos" className="text-sm text-zinc-400 hover:text-zinc-100">
              Preços
            </a>
            <a
              href="#precos"
              className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-500"
            >
              Criar conta
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Suas finanças no lugar, <span className="text-emerald-500">sem esforço</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            O Finora conecta suas contas, categoriza cada gasto automaticamente e te avisa
            antes de estourar o orçamento. Você cuida da vida, o dinheiro a gente cuida.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#precos"
              className="w-full rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 hover:bg-emerald-400 sm:w-auto"
            >
              Começar grátis
            </a>
            <a
              href="#contato"
              className="w-full rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 hover:border-zinc-500 sm:w-auto"
            >
              Falar com a equipe
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="precos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Preços simples
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            Comece de graça e evolua quando quiser. Sem fidelidade, cancele quando quiser.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  p.highlighted
                    ? "border-emerald-500 bg-zinc-900"
                    : "border-zinc-800 bg-zinc-900"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-zinc-950">
                    Mais popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-sm text-zinc-400">{p.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-emerald-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-8 rounded-xl px-4 py-3 text-center font-semibold ${
                    p.highlighted
                      ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400"
                      : "border border-zinc-700 text-zinc-100 hover:border-zinc-500"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="rounded-3xl bg-emerald-500 px-6 py-14 text-center text-zinc-950 sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pronto para colocar as contas em ordem?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-emerald-950/80">
              Leva menos de dois minutos para conectar sua primeira conta.
            </p>
            <a
              href="#precos"
              className="mt-8 inline-block rounded-xl bg-zinc-950 px-8 py-3 font-semibold text-white hover:bg-zinc-800"
            >
              Criar conta grátis
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-zinc-500 sm:px-6">
          {/* shortcut: ano fixo porque o Next 16 bloqueia new Date() no prerender, atualizar manualmente a cada ano */}
          © 2026 Finora. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
