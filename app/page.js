import BudgetCalculator from '../components/BudgetCalculator';
import ItineraryTabs from '../components/ItineraryTabs';
import MapSection from '../components/MapSection';
import { itineraryDays, points, variants } from '../data/tripData';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Private family planner · 18.–28. júl 2026 · 4 dospelí</p>
          <h1>Čierna Hora 2026: itinerár, rozpočet a mapa na jednom mieste.</h1>
          <p className="lead">
            Next.js aplikácia pre rodinné review dovolenky s tromi štýlmi pobytu: pôvodný relax plán,
            budget verzia a aktívnejší variant. Všetko stojí na jednej základni pri Budve/Jaz.
          </p>
          <div className="ctaRow">
            <a
              className="primaryButton"
              href="https://www.booking.com/hotel/me/apartmani-andrea-jaz.html?checkin=2026-07-18&checkout=2026-07-28&group_adults=4&no_rooms=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otvoriť ubytovanie
            </a>
            <a className="secondaryButton" href="#rozpocet">Prejsť na kalkulačku</a>
          </div>
        </div>
        <aside className="heroCard">
          <span className="tag">Apartmani Andrea-jaz · 730 EUR / 10 nocí</span>
          <div className="statGrid">
            <div><small>Typ appky</small><strong>Interaktívna</strong></div>
            <div><small>Repo</small><strong>Private</strong></div>
            <div><small>Framework</small><strong>Next.js</strong></div>
            <div><small>Mapa</small><strong>Leaflet</strong></div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <p className="eyebrow">3 varianty pobytu</p>
          <h2>Štýl dovolenky</h2>
        </div>
        <div className="variantGrid">
          {variants.map((variant) => (
            <article className="variantCard" key={variant.id}>
              <span className="variantBadge">{variant.label}</span>
              <h3>{variant.title}</h3>
              <p>{variant.description}</p>
              <ul>
                {variant.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="variantPrice">{variant.price}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="itinerar">
        <div className="sectionHeading">
          <p className="eyebrow">Deň po dni</p>
          <h2>Interaktívny itinerár</h2>
        </div>
        <ItineraryTabs days={itineraryDays} />
      </section>

      <section className="section" id="rozpocet">
        <div className="sectionHeading">
          <p className="eyebrow">Kalkulačka</p>
          <h2>Rozpočet dovolenky</h2>
        </div>
        <BudgetCalculator />
      </section>

      <section className="section" id="mapa">
        <div className="sectionHeading">
          <p className="eyebrow">Miesta a logistika</p>
          <h2>Interaktívna mapa</h2>
        </div>
        <MapSection points={points} />
      </section>
    </main>
  );
}
