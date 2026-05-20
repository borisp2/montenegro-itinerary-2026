'use client';

import { useMemo, useState } from 'react';

const variantMultipliers = {
  relax: 1,
  budget: 0.88,
  active: 1.24
};

export default function BudgetCalculator() {
  const [people, setPeople] = useState(4);
  const [nights, setNights] = useState(10);
  const [accommodation, setAccommodation] = useState(730);
  const [car, setCar] = useState(430);
  const [foodPerDay, setFoodPerDay] = useState(120);
  const [extras, setExtras] = useState(220);
  const [variant, setVariant] = useState('relax');

  const totals = useMemo(() => {
    const multiplier = variantMultipliers[variant];
    const totalFood = foodPerDay * nights * multiplier;
    const totalCar = car * multiplier;
    const totalExtras = extras * multiplier;
    const totalGroup = accommodation + totalFood + totalCar + totalExtras;
    const totalPerPerson = totalGroup / people;
    const totalPerPersonPerDay = totalPerPerson / nights;

    return {
      totalFood,
      totalCar,
      totalExtras,
      totalGroup,
      totalPerPerson,
      totalPerPersonPerDay
    };
  }, [people, nights, accommodation, car, foodPerDay, extras, variant]);

  return (
    <div className="budgetLayout">
      <form className="calculatorCard">
        <div className="inputGrid">
          <label>
            <span>Počet osôb</span>
            <input type="number" min="1" value={people} onChange={(e) => setPeople(Number(e.target.value) || 1)} />
          </label>
          <label>
            <span>Počet nocí</span>
            <input type="number" min="1" value={nights} onChange={(e) => setNights(Number(e.target.value) || 1)} />
          </label>
          <label>
            <span>Ubytovanie spolu (EUR)</span>
            <input type="number" min="0" value={accommodation} onChange={(e) => setAccommodation(Number(e.target.value) || 0)} />
          </label>
          <label>
            <span>Auto a presuny (EUR)</span>
            <input type="number" min="0" value={car} onChange={(e) => setCar(Number(e.target.value) || 0)} />
          </label>
          <label>
            <span>Jedlo za deň pre skupinu (EUR)</span>
            <input type="number" min="0" value={foodPerDay} onChange={(e) => setFoodPerDay(Number(e.target.value) || 0)} />
          </label>
          <label>
            <span>Vstupy a rezerva (EUR)</span>
            <input type="number" min="0" value={extras} onChange={(e) => setExtras(Number(e.target.value) || 0)} />
          </label>
        </div>

        <fieldset className="variantSwitch">
          <legend>Variant</legend>
          <button type="button" className={variant === 'relax' ? 'active' : ''} onClick={() => setVariant('relax')}>Pôvodný</button>
          <button type="button" className={variant === 'budget' ? 'active' : ''} onClick={() => setVariant('budget')}>Budget</button>
          <button type="button" className={variant === 'active' ? 'active' : ''} onClick={() => setVariant('active')}>Aktívny</button>
        </fieldset>
      </form>

      <aside className="resultCard">
        <span className="tag">Výsledok kalkulačky</span>
        <div className="resultList">
          <div><small>Jedlo spolu</small><strong>{totals.totalFood.toFixed(0)} EUR</strong></div>
          <div><small>Auto a presuny</small><strong>{totals.totalCar.toFixed(0)} EUR</strong></div>
          <div><small>Extras</small><strong>{totals.totalExtras.toFixed(0)} EUR</strong></div>
          <div><small>Skupina spolu</small><strong>{totals.totalGroup.toFixed(0)} EUR</strong></div>
          <div><small>Na osobu</small><strong>{totals.totalPerPerson.toFixed(0)} EUR</strong></div>
          <div><small>Na osobu / deň</small><strong>{totals.totalPerPersonPerDay.toFixed(1)} EUR</strong></div>
        </div>
      </aside>
    </div>
  );
}
