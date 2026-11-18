import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, MapPin, Star } from "lucide-react";
import fachadaBuque from "@/assets/b6d8a6af-5c42-4eb8-bafa-70e6e88fcc32.jpg";
import fachada from "@/assets/939ca73f-265e-46b3-ba84-b5edaa0a6a13.jpg";
import rosasBicolor from "@/assets/470185bd-519f-498f-a9d1-0fa6f6a84041.jpg";
import rosaUrso from "@/assets/c28dca0c-5497-4b28-b8e1-9d30568a99cb.jpg";
import bouquetRosa from "@/assets/89192469-16ea-436c-8e87-3e1d8b90599d.jpg";
import bouquetLirios from "@/assets/47ee36a5-9a07-42b7-96f8-1d03cfc648b6.jpg";
import rosasPretas from "@/assets/d2903cc6-3c1b-4082-9ffd-c9bd6a0ee0ad.jpg";
import rosasVermelhas from "@/assets/d39ef77d-2731-4479-b2e3-a87986810fb5.jpg";
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
  { img: rosasBicolor, name: "Rosas vermelhas e brancas", type: "Buquês" },
  { img: bouquetRosa, name: "Um gesto cheio de carinho", type: "Buquês" },
  { img: bouquetLirios, name: "Lírios e flores coloridas", type: "Buquês" },
  { img: rosasPretas, name: "Rosas em embrulho especial", type: "Buquês" },
  { img: girassois, name: "Girassóis para alegrar o dia", type: "Buquês" },
  { img: rosasLuxo, name: "Buquê de rosas", type: "Buquês" },
  { img: rosaUrso, name: "Flores com um mimo especial", type: "Presentes" },
  { img: cestaPresente, name: "Cesta de presentes", type: "Cestas" },
  { img: girassolChocolate, name: "Flores com chocolate", type: "Presentes" },
];

const reviews = [
  { text: "Lugar top, variedades em presentes e um ótimo preço." },
  { text: "Muitas opções de presente, flores, cestas; tudo lindo, perfeito." },
  { text: "Parabéns, preço justo e muito capricho." },
];

function WaIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WaButton({ message, children, big = false }: { message: string; children: React.ReactNode; big?: boolean }) {
  return (
    <a href={wa(message)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-accent font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:brightness-105 active:scale-95 ${big ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"}`}>
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
    <div className="flex flex-wrap gap-2">{items.map((item) => <button key={item} type="button" onClick={() => onSelect(item)} aria-pressed={value === item} className={`rounded-full border px-4 py-2 text-sm transition ${value === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white hover:border-primary"}`}>{item}</button>)}</div>
  );
  return (
    <div className="space-y-6">
      <fieldset className="space-y-3"><legend className="mb-3 font-display text-xl">Qual é a ocasião?</legend>{chips(occasions, occasion, setOccasion)}</fieldset>
      <fieldset className="space-y-3"><legend className="mb-3 font-display text-xl">Tem uma cor em mente?</legend>{chips(colors, color, setColor)}</fieldset>
      <fieldset className="space-y-3"><legend className="mb-3 font-display text-xl">Como quer receber?</legend>{chips(["Entrega", "Retirada na loja"], mode, setMode)}</fieldset>
      <div className="rounded-2xl border border-dashed border-border bg-white/80 p-4 text-sm whitespace-pre-line text-muted-foreground">{message}</div>
      <WaButton message={message} big>Continuar pelo WhatsApp</WaButton>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-bold tracking-[0.2em] text-accent uppercase">{children}</p>;
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden pb-20 md:pb-0">
      <div className="bg-wine-deep px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-primary-foreground sm:text-sm">Flores, cestas e presentes para celebrar cada momento</div>
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Floricultura Sônia, início">
          <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><span aria-hidden className="text-2xl">✿</span></span>
          <span className="font-display text-xl font-bold leading-none sm:text-2xl">Floricultura <span className="text-primary">Sônia</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <a href="#flores" className="hover:text-primary">Flores</a><a href="#presentes" className="hover:text-primary">Presentes</a><a href="#homenagens" className="hover:text-primary">Homenagens</a><a href="#loja" className="hover:text-primary">A loja</a>
        </nav>
        <a href={wa("Olá, Floricultura Sônia! Gostaria de conhecer as opções de flores e presentes.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"><WaIcon /><span className="hidden sm:inline">Fale conosco</span><span className="sm:hidden">WhatsApp</span></a>
      </header>

      <main>
        <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-5 pb-16 lg:grid-cols-2 lg:px-8 lg:pt-10 lg:pb-24">
          <div className="relative z-10 py-4 lg:py-12">
            <Eyebrow>JOINVILLE · FLORES E PRESENTES</Eyebrow>
            <h1 className="max-w-2xl text-5xl leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl">Um presente que <span className="text-primary">fala por você.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Buquês, cestas personalizadas e presentes para transformar carinho em surpresa. A Floricultura Sônia está na Rua Monsenhor Gercino, em Joinville.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4"><WaButton message="Olá, Floricultura Sônia! Quero escolher um presente." big>Escolher pelo WhatsApp</WaButton><a href="#flores" className="inline-flex items-center gap-2 font-semibold underline decoration-primary/40 underline-offset-4">Conheça a loja <ArrowDown className="size-4" /></a></div>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><span className="text-amber-500">★★★★★</span><strong className="text-foreground">4,5</strong></span><span>128 avaliações no Google</span><span className="hidden text-border sm:inline">•</span><span>Entrega e retirada na loja</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -right-8 -bottom-8 hidden h-3/4 w-3/4 rounded-[2rem] bg-secondary lg:block" />
            <img src={fachadaBuque} alt="Buquê colorido em frente à fachada vermelha da Floricultura Sônia" className="relative aspect-[4/4.3] w-full rounded-[1.7rem] object-cover object-center shadow-xl sm:aspect-[5/4] lg:aspect-[4/4.2]" />
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg sm:bottom-5 sm:left-[-1.25rem]"><span className="flex size-10 items-center justify-center rounded-full bg-secondary text-xl">✿</span><span><strong className="block text-sm">Floricultura Sônia</strong><span className="text-xs text-muted-foreground">Flores e presentes em Joinville</span></span></div>
          </div>
        </section>

        <section id="flores" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Eyebrow>FEITOS PARA PRESENTEAR</Eyebrow><h2 className="max-w-2xl text-4xl leading-tight font-semibold sm:text-5xl">Flores que deixam o momento na memória.</h2></div><p className="max-w-sm leading-relaxed text-muted-foreground">Rosas, lírios, girassóis e arranjos cheios de cor. Veja algumas das criações da Sônia.</p></div>
            <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {bouquets.slice(0, 6).map((item, i) => <a key={item.name} href={wa(`Olá! Vi no site “${item.name}” e gostaria de consultar opções e valores.`)} target="_blank" rel="noopener noreferrer" className={`group ${i === 1 ? "lg:mt-10" : ""}`}><div className="overflow-hidden rounded-2xl bg-secondary"><img src={item.img} alt={item.name} loading="lazy" className="aspect-[4/4.5] w-full object-cover transition duration-500 group-hover:scale-[1.035]" /></div><div className="mt-4 flex items-start justify-between gap-3"><div><span className="text-xs font-bold tracking-[0.14em] text-accent uppercase">{item.type}</span><h3 className="mt-1 text-2xl font-semibold">{item.name}</h3></div><ArrowRight className="mt-5 size-5 shrink-0 text-primary transition group-hover:translate-x-1" /></div></a>)}
            </div>
          </div>
        </section>

        <section id="presentes" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-5"><img src={cestaPresente} alt="Cesta de presente com chocolates e flores" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" /><img src={rosaUrso} alt="Arranjo de rosas vermelhas com ursinho" loading="lazy" className="mt-8 aspect-[4/5] w-full rounded-2xl object-cover" /></div>
          <div className="lg:pl-8"><Eyebrow>MAIS DO QUE FLORES</Eyebrow><h2 className="text-4xl leading-tight font-semibold sm:text-5xl">Uma surpresa do jeitinho que você imaginou.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Além dos buquês, a loja reúne cestas personalizadas, buquês de chocolate e presentes. Escolha uma ideia e consulte pelo WhatsApp.</p><div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white p-4"><span className="text-2xl">🎁</span><h3 className="mt-2 text-xl font-semibold">Cestas personalizadas</h3></div><div className="rounded-2xl bg-white p-4"><span className="text-2xl">🍫</span><h3 className="mt-2 text-xl font-semibold">Buquês de chocolate</h3></div><div className="rounded-2xl bg-white p-4"><span className="text-2xl">🌹</span><h3 className="mt-2 text-xl font-semibold">Buquês de rosas</h3></div><div className="rounded-2xl bg-white p-4"><span className="text-2xl">🎀</span><h3 className="mt-2 text-xl font-semibold">Presentes</h3></div></div><div className="mt-8"><WaButton message="Olá, Floricultura Sônia! Quero consultar as opções de cestas e presentes." big>Consultar opções</WaButton></div></div>
        </section>

        <section id="pedido" className="bg-secondary py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8"><div className="lg:col-span-5"><Eyebrow>É SÓ CHAMAR</Eyebrow><h2 className="text-4xl leading-tight font-semibold sm:text-5xl">Vamos encontrar o presente certo?</h2><p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">Conte a ocasião, a cor e se prefere entrega ou retirada. Sua mensagem fica pronta para continuar a conversa no WhatsApp.</p><img src={fachada} alt="Fachada da Floricultura Sônia na Rua Monsenhor Gercino" loading="lazy" className="mt-8 hidden aspect-[4/3] w-full rounded-2xl object-cover lg:block" /></div><div className="rounded-3xl bg-white p-6 shadow-sm sm:p-9 lg:col-span-7"><OrderBuilder /></div></div></section>

        <section id="homenagens" className="bg-wine-deep py-16 text-primary-foreground sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><Eyebrow>COM TODO O RESPEITO</Eyebrow><h2 className="text-4xl leading-tight font-semibold sm:text-5xl">Homenagens em forma de flores.</h2></div><p className="max-w-xl text-lg leading-relaxed text-primary-foreground/75">A Floricultura Sônia também prepara coroas de flores para momentos de despedida. Para consultar opções e atendimento, fale diretamente com a equipe.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-3"><img src={coroaFlores} alt="Coroa de flores em homenagem" loading="lazy" className="aspect-[4/4.5] w-full rounded-2xl object-cover"/><img src={coroaMargaridas} alt="Coroa com rosas vermelhas e margaridas" loading="lazy" className="aspect-[4/4.5] w-full rounded-2xl object-cover"/><img src={coroaAmarela} alt="Coroa de flores amarelas e brancas" loading="lazy" className="aspect-[4/4.5] w-full rounded-2xl object-cover"/></div><div className="mt-8"><WaButton message="Olá, Floricultura Sônia. Gostaria de consultar sobre coroas de flores.">Consultar pelo WhatsApp</WaButton></div></div></section>

        <section id="avaliacoes" className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><Eyebrow>QUEM JÁ CONHECE</Eyebrow><h2 className="text-4xl leading-tight font-semibold sm:text-5xl">Carinho reconhecido por Joinville.</h2></div><div className="flex items-center gap-3"><span className="text-5xl font-semibold">4,5</span><span><span className="block text-amber-500">★★★★★</span><span className="text-sm text-muted-foreground">128 avaliações no Google</span></span></div></div><div className="mt-8 grid gap-4 md:grid-cols-3">{reviews.map((review) => <blockquote key={review.text} className="rounded-2xl bg-background p-6"><div className="mb-3 flex gap-1 text-amber-500" aria-label="Avaliação de cinco estrelas">{[1,2,3,4,5].map((n) => <Star key={n} className="size-4 fill-current" />)}</div><p className="font-display text-xl leading-relaxed">“{review.text}”</p><p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Avaliação no Google</p></blockquote>)}</div></div></section>

        <section id="loja" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:px-8"><div className="overflow-hidden rounded-3xl"><img src={lojaInterior} alt="Interior da Floricultura Sônia com cestas e presentes" loading="lazy" className="aspect-[5/4] w-full object-cover" /></div><div><Eyebrow>VENHA VISITAR</Eyebrow><h2 className="text-4xl leading-tight font-semibold sm:text-5xl">Um mundo de flores e presentes na loja.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Encontre a Floricultura Sônia no bairro João Costa. Há entrega, retirada na loja e compras presenciais.</p><address className="mt-7 space-y-2 not-italic"><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary"/><span>R. Monsenhor Gercino, 4600<br/>João Costa, Joinville – SC, 89230-335</span></p><p className="pl-8 font-medium">(47) 99742-0312</p><p className="pl-8 text-sm text-muted-foreground">Segunda-feira a sábado</p></address><div className="mt-7 flex flex-wrap gap-3"><WaButton message="Olá, Floricultura Sônia! Gostaria de tirar uma dúvida.">Fale pelo WhatsApp</WaButton><a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary"><MapPin className="size-4"/>Como chegar</a></div><div className="mt-4 flex gap-4 text-sm"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">Instagram</a><a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">Ver no Google Maps</a></div></div></section>
      </main>

      <footer className="bg-[#171417] py-8 text-sm text-white/70"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left lg:px-8"><p><strong className="text-white">Floricultura Sônia</strong> · Flores e presentes em Joinville, SC</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">@floricultura_sonia</a></div></footer>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden"><a href={wa("Olá, Floricultura Sônia! Quero consultar as opções de flores e presentes.")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-accent-foreground"><WaIcon/>Fale com a Floricultura Sônia</a></div>
      <a href={wa("Olá, Floricultura Sônia! Quero consultar as opções de flores e presentes.")} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Floricultura Sônia pelo WhatsApp" className="fixed right-6 bottom-6 z-50 hidden size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg md:flex"><WaIcon className="size-7"/></a>
    </div>
  );
}
