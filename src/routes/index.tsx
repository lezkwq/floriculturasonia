import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin } from "lucide-react";
import heroMobile from "@/assets/2dc442ef-9b55-4e0e-8ad4-3bddb57478f4.jpg";
import heroDesktop from "@/assets/d3f5b22c-a61e-4424-a354-98a905a1007e.jpg";
import fachada from "@/assets/939ca73f-265e-46b3-ba84-b5edaa0a6a13.jpg";
import rosasBicolor from "@/assets/470185bd-519f-498f-a9d1-0fa6f6a84041.jpg";
import rosaUrso from "@/assets/c28dca0c-5497-4b28-b8e1-9d30568a99cb.jpg";
import bouquetRosa from "@/assets/89192469-16ea-436c-8e87-3e1d8b90599d.jpg";
import bouquetLirios from "@/assets/47ee36a5-9a07-42b7-96f8-1d03cfc648b6.jpg";
import rosasPretas from "@/assets/d2903cc6-3c1b-4082-9ffd-c9bd6a0ee0ad.jpg";
import rosasLuxo from "@/assets/e592d215-7da8-40dc-ba39-003008f07845.jpg";
import cestaPresente from "@/assets/1ce9d1c2-9ce9-476f-b1ce-62ff7ccf0345.jpg";
import girassolChocolate from "@/assets/8cb26021-4a59-479c-b4ee-d6b6580d00e6.jpg";
import coroaFlores from "@/assets/58bf2c0d-5a53-4a49-ab02-cdae56be663d.jpg";
import coroaMargaridas from "@/assets/373e51ec-8324-4538-825f-b821de8ec022.jpg";
import coroaAmarela from "@/assets/0fff41a9-0901-45f7-bda0-6d5b210c5575.jpg";
import girassois from "@/assets/da715e92-580c-4b1f-90d3-249c3e8766e2.jpg";
import lojaInterior from "@/assets/d3e31f8b-8911-4d70-9b05-36ecba80a2f6.jpg";

const PHONE = "5547997420312";
const wa = (message: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Floricultura+S%C3%B4nia+R.+Monsenhor+Gercino+4600+Joinville+SC";
const INSTAGRAM = "https://www.instagram.com/floricultura_sonia/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Floricultura Sônia | Flores e presentes em Joinville" },
      { name: "description", content: "Buquês, cestas personalizadas, presentes e coroas de flores. Floricultura Sônia: R. Monsenhor Gercino, 4600, Joinville. Fale pelo WhatsApp." },
      { property: "og:title", content: "Floricultura Sônia | Flores e presentes em Joinville" },
      { property: "og:description", content: "Flores, buquês e presentes para marcar momentos especiais. Peça pelo WhatsApp ou visite a loja." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bouquets = [
  { img: rosasBicolor, name: "Rosas vermelhas e brancas" },
  { img: bouquetRosa, name: "Buquê em tons de rosa" },
  { img: bouquetLirios, name: "Lírios e flores coloridas" },
  { img: rosasPretas, name: "Rosas em embrulho especial" },
  { img: girassois, name: "Girassóis para alegrar o dia" },
  { img: rosasLuxo, name: "Buquê de rosas" },
];

const reviews = [
  "Lugar top variedades em presentes e um ótimo preço",
  "Muitas opções de presente, flores, cestas, tudo lindo e perfeito",
  "Muito bem atendido, loja topppppp",
  "Excelente ambiente e atendimento nota 10! vou voltar com certeza!",
  "Atendimento maravilhoso, tudo perfeito, feito com muito carinho",
  "Bom atendimento e atenção com cliente",
  "Excelente atendimento super indico",
  "Parabéns preço justo e muito capricho",
  "Ótima floricultura, muitas opções de presentes e um bom atendimento.",
  "Bom preço e atendimento muito bom",
  "Tem tudo que preciso para datas especiais",
  "Muito linda a floricultura bastante opções pra presentear",
];

function WaIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WaButton({ message, children, light = false }: { message: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a href={wa(message)} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${light ? "bg-white text-foreground hover:bg-white/90 focus-visible:outline-white" : "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary"}`}>
      <WaIcon />{children}
    </a>
  );
}

const occasions = ["Aniversário", "Amor", "Dia das Mães", "Agradecimento", "Homenagem", "Outra ocasião"];
const colors = ["Vermelho", "Rosa", "Branco", "Amarelo", "Colorido", "Surpreenda-me"];

function OrderBuilder() {
  const [occasion, setOccasion] = useState("Aniversário");
  const [color, setColor] = useState("Vermelho");
  const [mode, setMode] = useState("Entrega");
  const message = `Olá, Floricultura Sônia! Gostaria de consultar opções para presentear.\n• Ocasião: ${occasion}\n• Cores: ${color}\n• Prefiro: ${mode}\nPodem me enviar opções e valores?`;
  const chips = (items: string[], value: string, onSelect: (item: string) => void) => (
    <div className="flex flex-wrap gap-2">{items.map((item) => <button key={item} type="button" onClick={() => onSelect(item)} aria-pressed={value === item} className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${value === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white hover:border-primary"}`}>{item}</button>)}</div>
  );
  return (
    <div className="space-y-6">
      <fieldset className="space-y-3"><legend className="mb-3 font-display text-2xl">Qual é a ocasião?</legend>{chips(occasions, occasion, setOccasion)}</fieldset>
      <fieldset className="space-y-3"><legend className="mb-3 font-display text-2xl">Tem uma cor em mente?</legend>{chips(colors, color, setColor)}</fieldset>
      <fieldset className="space-y-3"><legend className="mb-3 font-display text-2xl">Como quer receber?</legend>{chips(["Entrega", "Retirada na loja"], mode, setMode)}</fieldset>
      <div className="border-l-2 border-primary/40 bg-white px-4 py-3 text-sm whitespace-pre-line text-muted-foreground">{message}</div>
      <WaButton message={message}>Continuar pelo WhatsApp</WaButton>
    </div>
  );
}

function ReviewTicker() {
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const paused = manuallyPaused || hovered;
  const quotes = [...reviews, ...reviews];
  return (
    <div className={`review-marquee ${paused ? "is-paused" : ""}`} onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 pb-6 lg:px-8">
        <p className="text-sm text-white/70">Relatos de quem já esteve na loja</p>
        <button type="button" onClick={() => setManuallyPaused((value) => !value)} aria-pressed={manuallyPaused} className="min-h-10 rounded-md border border-white/30 px-4 text-xs font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{manuallyPaused ? "Retomar avaliações" : "Pausar avaliações"}</button>
      </div>
      <div className="overflow-hidden">
        <div className="review-track flex w-max gap-4" onTouchStart={() => setManuallyPaused(true)} onClick={() => setManuallyPaused(true)} aria-label="Avaliações de clientes; toque para pausar">
          {quotes.map((quote, index) => <blockquote key={`${index}-${quote}`} className="flex w-[min(75vw,22rem)] shrink-0 items-center border-l border-white/35 px-5 py-2 text-xl leading-snug font-display sm:w-[22rem] sm:px-7">“{quote}”</blockquote>)}
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main>
        <section id="inicio" className="hero relative h-svh min-h-[640px] text-white">
          <picture className="absolute inset-0 block h-full w-full">
            <source media="(max-width: 767px)" srcSet={heroMobile} />
            <img src={heroDesktop} alt="Buquê colorido erguido contra o céu azul" className="h-full w-full object-cover object-center" fetchPriority="high" />
          </picture>
          <header className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
            <a href="#inicio" className="font-display text-xl font-semibold tracking-tight sm:text-2xl" aria-label="Floricultura Sônia, início">Floricultura Sônia</a>
            <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Navegação principal">
              <a href="#flores" className="hover:underline hover:underline-offset-4">Flores</a><a href="#presentes" className="hover:underline hover:underline-offset-4">Presentes</a><a href="#loja" className="hover:underline hover:underline-offset-4">A loja</a>
            </nav>
            <WaButton message="Olá, Floricultura Sônia! Gostaria de conhecer as opções de flores e presentes." light>Fale conosco</WaButton>
          </header>
          <div className="hero-copy relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-[clamp(2rem,8vh,5rem)] sm:px-8 md:absolute md:top-[27%] md:left-0 md:right-0 md:px-12 md:pt-0">
            <div className="max-w-[36rem] md:max-w-[21rem]">
              <h1 className="max-w-[24rem] text-[2.65rem] leading-[0.98] font-medium tracking-[-0.035em] sm:text-6xl md:text-[3.5rem]">Flores que dizem o que palavras não dizem.</h1>
              <p className="mt-4 max-w-[21rem] text-sm leading-relaxed sm:mt-5 sm:text-base">Buquês, cestas e presentes para marcar momentos especiais.</p>
              <div className="mt-5 sm:mt-7"><WaButton message="Olá, Floricultura Sônia! Quero escolher flores ou um presente.">Escolher pelo WhatsApp</WaButton></div>
            </div>
          </div>
        </section>

        <section id="flores" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end sm:mb-14"><h2 className="max-w-2xl text-4xl leading-[1.04] font-medium sm:text-5xl md:text-6xl">Flores para os momentos que ficam.</h2><p className="max-w-md text-base leading-relaxed text-muted-foreground md:justify-self-end">Rosas, lírios e girassóis. Veja alguns dos buquês e arranjos da Floricultura Sônia.</p></div>
            <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {bouquets.map((item) => <a key={item.name} href={wa(`Olá! Vi no site “${item.name}” e gostaria de consultar opções e valores.`)} target="_blank" rel="noopener noreferrer" className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><img src={item.img} alt={item.name} loading="lazy" className="aspect-[4/4.7] w-full object-cover" /><h3 className="mt-3 text-2xl font-medium sm:text-3xl">{item.name}</h3></a>)}
            </div>
          </div>
        </section>

        <section id="presentes" className="grid bg-secondary md:grid-cols-2">
          <div className="grid grid-cols-2 gap-1 sm:gap-2"><img src={cestaPresente} alt="Cesta de presente com chocolates" loading="lazy" className="aspect-[4/5] w-full object-cover" /><img src={rosaUrso} alt="Buquê de rosas vermelhas com ursinho" loading="lazy" className="mt-8 aspect-[4/5] w-full object-cover" /></div>
          <div className="flex items-center px-5 py-14 sm:px-12 lg:px-20"><div className="max-w-xl"><h2 className="text-4xl leading-[1.05] font-medium sm:text-5xl">Presentes para celebrar do seu jeito.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">Cestas personalizadas, buquês de chocolate e outras opções para surpreender alguém especial.</p><ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-foreground/15 pt-5 text-base"><li>Cestas personalizadas</li><li>Buquês de chocolate</li><li>Buquês de rosas</li><li>Presentes</li></ul><div className="mt-8"><WaButton message="Olá, Floricultura Sônia! Quero consultar as opções de cestas e presentes.">Consultar opções</WaButton></div></div></div>
        </section>

        <section id="pedido" className="bg-white py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-12 lg:px-8"><div className="lg:col-span-5"><h2 className="text-4xl leading-[1.05] font-medium sm:text-5xl">Escolha com calma. A gente conversa pelo WhatsApp.</h2><p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Selecione a ocasião, a cor e a forma de receber. A mensagem chega pronta para você enviar.</p></div><div className="border-t border-border pt-6 sm:pt-8 lg:col-span-7 lg:col-start-6"><OrderBuilder /></div></div></section>

        <section id="homenagens" className="bg-[#274c69] py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 md:grid-cols-2 md:items-end"><h2 className="max-w-2xl text-4xl leading-[1.05] font-medium sm:text-5xl">Coroas de flores para prestar sua homenagem.</h2><p className="max-w-md leading-relaxed text-white/80 md:justify-self-end">Para consultar opções e atendimento, fale diretamente com a Floricultura Sônia.</p></div><div className="mt-9 grid gap-1 sm:grid-cols-3 sm:gap-3"><img src={coroaFlores} alt="Coroa de flores com rosas vermelhas" loading="lazy" className="aspect-[4/4.5] w-full object-cover"/><img src={coroaMargaridas} alt="Coroa com rosas vermelhas e margaridas" loading="lazy" className="aspect-[4/4.5] w-full object-cover"/><img src={coroaAmarela} alt="Coroa de flores amarelas e brancas" loading="lazy" className="aspect-[4/4.5] w-full object-cover"/></div><div className="mt-7"><WaButton message="Olá, Floricultura Sônia. Gostaria de consultar sobre coroas de flores." light>Consultar coroas</WaButton></div></div></section>

        <section id="avaliacoes" className="bg-[#18374d] py-14 text-white sm:py-20"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 pb-8 sm:flex-row sm:items-end sm:justify-between lg:px-8"><h2 className="max-w-2xl text-4xl leading-tight font-medium sm:text-5xl">O que dizem de nós.</h2><p className="text-sm text-white/75"><strong className="mr-2 text-2xl font-medium text-white">4,5</strong>128 avaliações no Google</p></div><ReviewTicker /></section>

        <section id="loja" className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:px-8"><img src={lojaInterior} alt="Interior da Floricultura Sônia com cestas e presentes" loading="lazy" className="aspect-[5/4] w-full object-cover"/><div className="lg:pl-10"><h2 className="max-w-xl text-4xl leading-[1.05] font-medium sm:text-5xl">Flores e presentes na Rua Monsenhor Gercino.</h2><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">Visite a Floricultura Sônia no bairro João Costa. Você também pode pedir entrega ou retirar na loja.</p><address className="mt-7 space-y-2 not-italic"><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary"/><span>R. Monsenhor Gercino, 4600<br/>João Costa, Joinville – SC, 89230-335</span></p><p className="pl-8 font-medium">(47) 99742-0312</p><p className="pl-8 text-sm text-muted-foreground">Segunda-feira a sábado</p></address><div className="mt-7 flex flex-wrap gap-3"><WaButton message="Olá, Floricultura Sônia! Gostaria de tirar uma dúvida.">WhatsApp</WaButton><a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-md border border-foreground/25 px-5 py-3 text-sm font-semibold hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Como chegar</a></div><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm underline underline-offset-4">@floricultura_sonia</a></div></section>
      </main>

      <footer className="bg-[#18374d] py-7 text-sm text-white/75"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:text-left lg:px-8"><p><strong className="text-white">Floricultura Sônia</strong> · Joinville, SC</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Instagram</a></div></footer>
    </div>
  );
}
