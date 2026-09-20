import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Gift,
  LockKeyhole,
  Medal,
  PencilLine,
  Printer,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const CHECKOUTS = {
  ESSENCIAL_CHECKOUT_URL: "",
  COMPLETO_CHECKOUT_URL: "",
  UPGRADE_CHECKOUT_URL: "",
} as const;

const activities = [
  { label: "Caminhos e labirintos", src: "/ctivities/ChatGPT Image 20_09_2026, 13_56_21.png" },
  { label: "Traçados e movimentos", src: "/ctivities/ChatGPT Image 20_09_2026, 13_58_16.png" },
  { label: "Precisão e limites", src: "/ctivities/ChatGPT Image 20_09_2026, 14_04_41.png" },
  { label: "Letras e escrita", src: "/ctivities/ChatGPT Image 20_09_2026, 14_40_23.png" },
];

const testimonials = [
  "/ctivities/ChatGPT Image 20_09_2026, 15_13_15.png",
  "/ctivities/ChatGPT Image 20_09_2026, 15_14_57.png",
  "/ctivities/ChatGPT Image 20_09_2026, 15_16_56.png",
  "/ctivities/ChatGPT Image 20_09_2026, 15_19_49.png",
];

const faqs = [
  ["O produto é físico?", "Não. Este é um produto 100% digital. Você recebe o material para baixar e pode imprimir as atividades."],
  ["Qual a diferença entre os dois pacotes?", "O Pacote Essencial possui 150 atividades. O Pacote Completo possui 500 atividades e oferece uma variedade maior de exercícios e progressão de conteúdo."],
  ["Preciso imprimir todas as atividades de uma vez?", "Não. Você pode escolher as atividades e imprimir somente as páginas que desejar."],
  ["Posso imprimir novamente?", "Você poderá utilizar o arquivo de acordo com os termos de uso informados na compra."],
  ["Como recebo o material?", "O acesso é digital e as instruções de acesso são disponibilizadas após a confirmação do pagamento."],
  ["Serve para qualquer criança?", "As atividades foram desenvolvidas como material educativo complementar. Cada criança possui seu próprio ritmo, então os responsáveis podem selecionar as atividades mais adequadas ao momento dela."],
  ["Isso substitui acompanhamento profissional?", "Não. O material possui finalidade educativa e não substitui avaliação, orientação ou acompanhamento de profissionais quando necessários."],
  ["Existe garantia?", "Sim. A compra conta com o período de garantia informado nesta página, conforme as condições aplicáveis."],
];

function goToCheckout(url: string, label: string) {
  if (!url) {
    console.info(`Configure ${label} em CHECKOUTS antes de publicar.`);
    return;
  }
  window.location.href = url;
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function ActivitySheet({ label, src, rotate = "" }: { label: string; src: string; rotate?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg ${rotate}`}>
      <img src={src} alt={label} className="block h-auto w-full object-contain" />
      <p className="py-3 text-center text-xs font-bold text-slate-500">{label}</p>
    </div>
  );
}

function Index() {
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialTouchStart = useRef<number | null>(null);

  const testimonialSlides = [testimonials.slice(0, 3), testimonials.slice(1, 4)];
  const showPreviousTestimonial = () => setTestimonialIndex((index) => (index - 1 + testimonialSlides.length) % testimonialSlides.length);
  const showNextTestimonial = () => setTestimonialIndex((index) => (index + 1) % testimonialSlides.length);

  useEffect(() => {
    if (!upgradeOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setUpgradeOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [upgradeOpen]);

  return (
    <main className="overflow-x-hidden bg-white text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:pt-16">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-5xl">
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ajude seu filho a ganhar mais <span className="text-sky-600">segurança e controle</span> na hora de escrever
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Centenas de atividades imprimíveis, divertidas e progressivas para praticar movimentos, traçados, precisão e habilidades importantes para a escrita.
            </p>
            <img
              src="https://drive.google.com/thumbnail?id=1t0Af2kR4X1dfzNgeOXGGu95DhITRloWF&sz=w1600"
              alt="Atividades educativas imprimíveis para coordenação motora e preparação para a escrita"
              className="mx-auto mt-4 h-auto w-full max-w-[1000px] object-contain"
            />
            <div className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
              {["Atividades prontas para imprimir", "Prática progressiva", "Diferentes tipos de exercícios", "Material digital", "Acesso após a compra"].map((item) => (
                <div key={item} className="flex items-center justify-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="h-3.5 w-3.5" /></span>{item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-500">Produto digital • Imprima as páginas que desejar</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Material digital" title="Veja o que você vai receber" subtitle="Um material pensado para transformar o momento de praticar em uma experiência mais leve, visual e variada." />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {activities.map((item, i) => <ActivitySheet key={item.label} label={item.label} src={item.src} rotate={i % 2 ? "translate-y-5" : ""} />)}
            </div>
            <div className="space-y-4">
              {[
                ["Coordenação e controle do lápis", "Caminhos, movimentos e exercícios para praticar o controle durante os traçados.", Target],
                ["Precisão", "Atividades que exigem atenção aos limites, direções e espaços.", PencilLine],
                ["Preparação para a escrita", "Movimentos progressivamente mais próximos daqueles utilizados na formação das letras.", BookOpen],
                ["Letras e escrita", "Na versão completa, a criança avança para atividades envolvendo letras, sílabas, palavras e pequenas frases.", Star],
                ["500 atividades na versão completa", "Grande variedade para evitar que a prática fique repetitiva.", Sparkles],
              ].map(([title, text, Icon]: any) => (
                <div key={title} className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-600"><Icon className="h-5 w-5" /></div>
                  <div><h3 className="font-extrabold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-xs font-black tracking-[.18em] text-white sm:text-sm">
            <Download className="h-4 w-4 text-sky-300" /> BAIXE <span className="text-slate-500">•</span> IMPRIMA <span className="text-slate-500">•</span> PRATIQUE
          </div>
        </div>
      </section>

      <section className="bg-amber-50/70 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="E ainda tem bônus 🎁" subtitle="Recursos extras para ajudar os responsáveis a organizar e acompanhar os momentos de prática." />
          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {[
              ["Guia rápido para os responsáveis", "Orientações simples para organizar os momentos de prática.", "/ctivities/ChatGPT Image 20_09_2026, 15_55_41.png"],
              ["Calendário de atividades", "Uma forma simples de acompanhar as atividades realizadas.", "/ctivities/ChatGPT Image 20_09_2026, 15_55_50.png"],
              ["Certificado de conclusão", "Um certificado imprimível para tornar o final da jornada mais especial.", "/ctivities/ChatGPT Image 20_09_2026, 15_56_04.png"],
            ].map(([title, description, image], i) => (
              <div key={title} className="relative flex h-full min-w-0 flex-col rounded-2xl border border-amber-100 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-3 lg:p-4">
                <img src={image} alt={title} className="mx-auto block h-auto w-full max-w-[320px] rounded-xl object-contain" />
                <div className="px-1 pb-1 pt-5">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-700">Bônus {i + 1}</p>
                  <h3 className="mt-2 text-xl font-black text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Veja o que as famílias estão falando</h2>
          <p className="mx-auto mt-3 mb-10 max-w-2xl text-center text-sm text-slate-500 sm:text-base">Arraste para o lado e confira alguns dos resultados enviados por nossos clientes.</p>
          <div
            className="relative mx-auto w-full max-w-[1180px] touch-pan-y px-0 sm:px-4"
            onTouchStart={(event) => {
              testimonialTouchStart.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (testimonialTouchStart.current === null) return;
              const endX = event.changedTouches[0]?.clientX ?? testimonialTouchStart.current;
              const distance = endX - testimonialTouchStart.current;
              testimonialTouchStart.current = null;
              if (Math.abs(distance) < 45) return;
              if (distance < 0) showNextTestimonial();
              else showPreviousTestimonial();
            }}
          >
            <button
              type="button"
              aria-label="Depoimentos anteriores"
              onClick={showPreviousTestimonial}
              className="absolute right-14 -top-14 z-10 grid h-9 w-9 place-items-center rounded-full border border-amber-100 bg-amber-50 text-slate-600 shadow-sm transition hover:bg-amber-100 hover:text-slate-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="overflow-hidden">
              <div
                key={testimonialIndex}
                className="grid grid-cols-3 gap-4"
                style={{ animation: "testimonialFade 300ms ease-out" }}
              >
                {testimonialSlides[testimonialIndex].map((src, imageIndex) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Depoimento de cliente ${testimonialIndex + imageIndex + 1}`}
                    draggable={false}
                    className="block h-auto w-full min-w-0 select-none rounded-2xl border border-amber-100 bg-amber-50/30 object-contain"
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Próximos depoimentos"
              onClick={showNextTestimonial}
              className="absolute right-2 -top-14 z-10 grid h-9 w-9 place-items-center rounded-full border border-amber-100 bg-amber-50 text-slate-600 shadow-sm transition hover:bg-amber-100 hover:text-slate-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-5 flex justify-center gap-2" aria-label="Selecionar grupo de depoimentos">
            {testimonialSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Mostrar grupo de depoimentos ${index + 1}`}
                aria-current={testimonialIndex === index ? "true" : undefined}
                onClick={() => setTestimonialIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${testimonialIndex === index ? "scale-110 bg-sky-600" : "bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
          <style>{`@keyframes testimonialFade { from { opacity: 0; transform: translateX(8px); } to { opacity: 1; transform: translateX(0); } }`}</style>
        </div>
      </section>

      <section id="ofertas" className="scroll-mt-6 bg-slate-950 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Escolha seu pacote" title="Escolha a melhor opção para começar" subtitle="Você recebe o material digital e pode imprimir as atividades para utilizar quando precisar." />
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <span className="mb-5 self-start rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-black text-amber-800">PROMOÇÃO POR TEMPO LIMITADO</span>
              <p className="text-sm font-black tracking-wider text-slate-500">PACOTE ESSENCIAL</p><h3 className="mt-1 text-3xl font-black text-slate-950">150 ATIVIDADES</h3>
              <div className="my-7 h-px bg-slate-100" />
              <ul className="flex-1 space-y-3 text-sm text-slate-700">
                {["150 atividades imprimíveis", "Exercícios variados", "Coordenação e controle do lápis", "Traçados e precisão", "Preparação para a escrita", "Material em PDF", "Acesso digital"].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{x}</li>)}
              </ul>
              <div className="mt-8"><p className="text-sm font-bold text-slate-500">Pagamento único</p><p className="text-5xl font-black tracking-tight text-slate-950"><span className="text-2xl">R$</span> 9,90</p></div>
              <button onClick={() => setUpgradeOpen(true)} className="mt-6 w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800">QUERO O PACOTE ESSENCIAL</button>
            </div>

            <div className="relative flex flex-col rounded-3xl bg-white p-6 shadow-2xl ring-4 ring-sky-400 sm:p-8 lg:-translate-y-3">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-5 py-2 text-xs font-black text-white shadow-lg">MAIS COMPLETO</span>
              <p className="mt-4 text-sm font-black tracking-wider text-sky-600">PACOTE COMPLETO</p><h3 className="mt-1 text-3xl font-black text-slate-950">500 ATIVIDADES</h3>
              <div className="my-7 h-px bg-slate-100" />
              <ul className="flex-1 space-y-3 text-sm text-slate-700">
                {["500 atividades imprimíveis", "Maior variedade de exercícios", "Progressão de dificuldade", "Coordenação e controle", "Traçados e precisão", "Preparação para letras", "Atividades com letras", "Sílabas", "Palavras", "Pequenas frases", "Todos os bônus", "Material em PDF", "Acesso digital"].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />{x}</li>)}
              </ul>
              <div className="mt-8">
                <div className="flex items-center gap-3"><p className="text-sm font-bold text-slate-400 line-through">DE R$ 49,90</p><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-black text-emerald-700">50% OFF</span></div>
                <p className="mt-1 text-5xl font-black tracking-tight text-sky-600"><span className="text-2xl">R$</span> 23,90</p>
              </div>
              <button onClick={() => goToCheckout(CHECKOUTS.COMPLETO_CHECKOUT_URL, "COMPLETO_CHECKOUT_URL")} className="mt-6 w-full rounded-2xl bg-sky-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-700">QUERO AS 500 ATIVIDADES</button>
              <p className="mt-3 text-center text-xs font-semibold text-slate-500">Pagamento único • Sem mensalidade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-7 text-center sm:p-12">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-emerald-100 text-emerald-700"><ShieldCheck className="h-10 w-10" /></div>
          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">Você compra com garantia</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">Você terá 7 dias de garantia para conhecer o material. Caso esteja dentro das condições aplicáveis e não queira permanecer com a compra, poderá solicitar o reembolso dentro desse período.</p>
          <p className="mx-auto mt-6 inline-block rounded-2xl bg-emerald-600 px-5 py-3 text-lg font-black text-white">7 DIAS DE GARANTIA</p>
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-bold text-slate-700">
            <span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4" /> Pagamento seguro</span><span className="flex items-center gap-2"><Download className="h-4 w-4" /> Produto digital</span><span className="flex items-center gap-2"><Printer className="h-4 w-4" /> Material imprimível</span>
          </div>
        </div>
      </section>

      <section className="bg-sky-50/60 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle title="Perguntas frequentes" subtitle="As principais dúvidas sobre o material e a forma de acesso." />
          <div className="space-y-3">
            {faqs.map(([question, answer], i) => {
              const open = openFaq === i;
              return <div key={question} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
                <button aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-extrabold text-slate-900">
                  {question}<ChevronDown className={`h-5 w-5 shrink-0 text-sky-600 transition ${open ? "rotate-180" : ""}`} />
                </button>
                {open && <div className="px-5 pb-5 text-sm leading-6 text-slate-600">{answer}</div>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-slate-600"><span>Termos de Uso</span><span>Política de Privacidade</span><span>Contato/Suporte</span></div>
          <p className="text-sm font-semibold text-slate-700">Produto digital. Nenhum material físico será enviado.</p>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500">Material educativo complementar. Os resultados da prática podem variar de criança para criança.</p>
        </div>
      </footer>

      {upgradeOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="upgrade-title" className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm" onMouseDown={(e) => e.target === e.currentTarget && setUpgradeOpen(false)}>
          <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button aria-label="Fechar oferta" onClick={() => setUpgradeOpen(false)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"><X className="h-5 w-5" /></button>
            <div className="pr-10"><span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-black text-amber-800"><Gift className="h-3.5 w-3.5" /> OFERTA ESPECIAL DE UPGRADE</span>
              <h2 id="upgrade-title" className="mt-4 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Espere! Quer levar muito mais atividades pagando menos?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Antes de continuar com o pacote de 150 atividades, você pode aproveitar uma condição especial para levar a versão completa.</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5"><p className="text-xs font-black text-slate-500">ESSENCIAL</p><p className="mt-1 text-2xl font-black">150 atividades</p><p className="mt-3 text-xl font-black">R$ 9,90</p></div>
              <div className="rounded-2xl border-2 border-sky-400 bg-sky-50 p-5"><p className="text-xs font-black text-sky-600">VERSÃO COMPLETA</p><p className="mt-1 text-2xl font-black">500 atividades</p><p className="mt-2 text-xs font-bold text-slate-400 line-through">De R$ 49,90</p><p className="text-3xl font-black text-sky-600">R$ 17,90</p></div>
            </div>
            <p className="mt-5 rounded-xl bg-emerald-50 p-3 text-center text-sm font-extrabold text-emerald-800">São 350 atividades adicionais por apenas R$ 8 a mais.</p>
            <button onClick={() => goToCheckout(CHECKOUTS.UPGRADE_CHECKOUT_URL, "UPGRADE_CHECKOUT_URL")} className="mt-5 w-full rounded-2xl bg-sky-600 px-5 py-4 text-sm font-black text-white shadow-lg transition hover:bg-sky-700">SIM, QUERO 500 ATIVIDADES POR R$ 17,90</button>
            <button onClick={() => goToCheckout(CHECKOUTS.ESSENCIAL_CHECKOUT_URL, "ESSENCIAL_CHECKOUT_URL")} className="mt-3 w-full px-4 py-3 text-xs font-bold text-slate-500 underline underline-offset-4 hover:text-slate-800">Não, quero continuar apenas com as 150 atividades por R$ 9,90</button>
          </div>
        </div>
      )}
    </main>
  );
}
