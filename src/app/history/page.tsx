import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Историја | Борец Баскет",
  description:
    "Историјата на КК Борец Баскет од Велес — од основањето во 2009 година до денес.",
};

export default function HistoryPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">Историја</span>
      </h1>
      <p className="mb-14 text-white/40 text-sm uppercase tracking-widest font-heading">
        Историја на Борец Баскет
      </p>

      {/* ── За клубот ───────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="space-y-5 text-white/75 leading-relaxed">
          <h2 className="font-heading text-3xl text-white pt-2">
            За клубот
          </h2>
          <p>
            <strong className="text-white">КК Борец Баскет</strong> е
            кошаркарски клуб од{" "}
            <strong className="text-white">Велес</strong>, Македонија,
            основан во <strong className="text-white">2009 година</strong>.
            Клубот настапува во домашната сала{" "}
            <strong className="text-white">Спортска сала Гемиџии</strong> со
            капацитет од околу 3 500 гледачи, а клупските бои се{" "}
            <span className="text-brand-red font-semibold">
              црвена и бела
            </span>
            .
          </p>
          <p>
            Иако името „Борец" е длабоко вткаено во велешката кошаркарска
            традиција, КК Борец Баскет не е формален правен наследник на
            претходните велешки клубови — КК Борец, КК Жито Вардар и КК Велес
            2000. Клубот е самостоен проект роден со цел да ја обнови и
            продолжи кошаркарската приказна во градот.
          </p>

          {/* Quick-facts table */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 overflow-hidden text-sm">
            <table className="w-full">
              <tbody>
                {[
                  ["Основан", "2009"],
                  ["Град", "Велес, Македонија"],
                  ["Сала", "Спортска сала Гемиџии"],
                  ["Капацитет", "~3 500"],
                  ["Бои", "Црвена и бела"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-white/10 last:border-0">
                    <td className="px-4 py-3 text-white/50 w-36">{label}</td>
                    <td className="px-4 py-3 text-white font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Историја ────────────────────────────────────────────── */}
      <AnimatedSection>
        <div className="space-y-6 text-white/75 leading-relaxed mt-16">
          <h2 className="font-heading text-3xl text-white">Историја</h2>

          {/* 2010/11 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2010/11 — Дебитантска сезона
            </h3>
            <p>
              Во сезоната 2010/11, клубот за прв пат пријавил сениорска
              екипа — во Третата лига. Почетокот беше одличен: второто место
              на крајот на сезоната им донесе промоција во Втората лига, и тоа
              само во првиот обид.
            </p>
          </div>

          {/* 2011/12 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red/60 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2011/12 — Втора лига
            </h3>
            <p>
              Дебитирајќи на повисоко ниво, Борец Баскет ја заврши сезоната
              на 7-мо место во Втората лига — достоен резултат за новодојденец
              на тоа ниво.
            </p>
          </div>

          {/* 2012/13 */}
          <div className="relative pl-5 border-l-2 border-white/15">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white/20 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2012/13 — Пауза
            </h3>
            <p>
              Сезоната 2012/13 клубот не настапуваше на натпреварувања, но
              работата зад сцената продолжи.
            </p>
          </div>

          {/* 2013/14 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2013/14 — Вицешампион на Трета лига
            </h3>
            <p>
              По паузата, клубот се врати со одлучност. Борец Баскет ја
              заврши сезоната 2013/14 на второ место во Третата лига —
              вицешампион — и повторно обезбеди промоција во Втората лига.
            </p>
          </div>

          {/* 2014/15 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red/60 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2014/15 — Изедначување на врвот
            </h3>
            <p>
              Амбициите растеа. Клубот заврши со ист број бодови како уште
              две екипи на второто место, но поради полошата меѓусебна
              разлика — Борец Баскет паѓа на 4-то место.
            </p>
          </div>

          {/* 2015/16 */}
          <div className="relative pl-5 border-l-2 border-white/15">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white/20 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2015/16 — Одбиена промоција
            </h3>
            <p>
              Првакот Т-Баскет, иако беше унапреден во Првата лига, се
              откажа поради ненаоѓање на соодветна сала. На Борец Баскет му
              следуваше покана за учество, но исто така поради ненаоѓање на
              соодветна сала, мораше да одбие. Дополнително, клубот се откажа
              и од Втората лига и не пријави екипа за натпреварување.
            </p>
          </div>

          {/* 2016/17 */}
          <div className="relative pl-5 border-l-2 border-white/15">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white/20 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2016/17 — „Борец Еуробрик"
            </h3>
            <p>
              Во оваа сезона клубот настапуваше под спонзорското
              име <em>Борец Еуробрик</em>. Екипата се откажа после двете
              третини од сезоната и заврши на последното седмо место на
              табелата.
            </p>
          </div>

          {/* 2017/18 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red/60 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2017/18 — Враќање во Трета лига
            </h3>
            <p>
              Клубот продолжи да гради и да ги решава интерните прашања,
              настапувајќи повторно во Третата лига.
            </p>
          </div>

          {/* 2018/19 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red/60 border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2018/19 — Нов формат на лигата
            </h3>
            <p>
              Втората лига доби нова структура — подели се на Источна и
              Западна група. Борец Баскет, настапувајќи во Источната група, ја
              заврши сезоната на 5-то место — солиден резултат во
              реорганизираниот натпревар.
            </p>
          </div>

          {/* 2019/20 */}
          <div className="relative pl-5 border-l-2 border-brand-red/40">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-brand-red border-2 border-black" />
            <h3 className="font-heading text-xl text-white mb-1">
              2019/20 — КОВИД прекин
            </h3>
            <p>
              На полусезона, клубот доби звучно појачување — поранешниот
              сениорски репрезентативец{" "}
              <strong className="text-white">Владимир Брчков</strong>, чие
              искуство и квалитет ги подигна очекувањата на целиот клуб.
              Борец Баскет атакуваше на 4-тата позиција кога пандемијата
              КОВИД-19 ги запре сите натпреварувања по 13. коло. Лигата беше
              суспендирана, а сезоната остана незавршена — вистинска
              неправда за еден клуб во добра форма.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Сезона 2025/26 ──────────────────────────────────────── */}
      <AnimatedSection>
        <div className="space-y-5 text-white/75 leading-relaxed mt-16">
          <div className="inline-block mb-1 px-3 py-1 text-xs font-heading uppercase tracking-widest bg-brand-red/20 text-brand-red rounded-full border border-brand-red/30">
            Историска сезона
          </div>
          <h2 className="font-heading text-3xl text-white">
            Сезона 2025/26 — Нова ера
          </h2>

          <p>
            Сезоната 2025/26 е без преседан во историјата на КК Борец Баскет.
            Македонскиот кошаркарски систем доживеа реструктурирање —
            Втората лига беше преименувана во{" "}
            <strong className="text-white">Прва лига</strong>, со нови
            правила кои за прв пат дозволуваа ангажирање на странски играчи.
          </p>

          <p>
            Раководството на клубот не го пропушти моментот. Борец Баскет
            стана еден од пионерите во лигата и потпиша двајца американски
            играчи:{" "}
            <strong className="text-white">Derrick Dion Ellis</strong> и{" "}
            <strong className="text-white">Zion Timothy James Young</strong>.
            Нивното пристигнување го вознемири целиот натпревар.
          </p>

          <p>
            Елис особено оставаше трага: во 10 натпревари просечно
            постигнуваше{" "}
            <strong className="text-white">19,2 поени</strong> — бројки кои
            зборуваат сами за себе. Резултатот? Борец Баскет забележа{" "}
            <strong className="text-white">9 победи и само 1 пораз</strong>,
            со што го дели првото место во{" "}
            <strong className="text-white">Група Б</strong> и обезбеди
            настап во плеј-офот — историски резултат за велешкиот клуб.
          </p>

          {/* Season stats highlight */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { stat: "19.2", label: "просечни поени\n(Derrick Ellis)" },
              { stat: "9–1", label: "победи/порази\nво Група Б" },
              { stat: "#1", label: "место во\nГрупа Б" },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-5"
              >
                <div className="font-heading text-4xl text-brand-red mb-1">
                  {stat}
                </div>
                <div className="text-white/50 text-xs leading-tight whitespace-pre-line">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <p className="pt-2">
            Приказната на сезоната 2025/26 сè уште се пишува. За клуб кој
            започна во Третата лига 2010/11, патот до плеј-офот во Прва лига
            со странски засилувања е доказ дека стрпливоста и вложувањето во
            клубот даваат плодови. Велес повторно има кошарка на врвот.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
