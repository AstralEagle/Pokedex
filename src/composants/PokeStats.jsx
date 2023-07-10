import React from 'react';
import PokeBar from './PokeBar';

import MaxStat from '../data/maxStats.json';

const PokeStats = ({ stats }) => {
  return (
    <div>
      <h6 className={'mb-1 mt-3'}>Point de vie</h6>
      <PokeBar stat={stats.hp} max={MaxStat.hp} />
      <h6 className={'mb-1 mt-3'}>Attaque</h6>
      <PokeBar stat={stats.atk} max={MaxStat.atk} />
      <h6 className={'mb-1 mt-3'}>Défence</h6>
      <PokeBar stat={stats.def} max={MaxStat.def} />
      <h6 className={'mb-1 mt-3'}>Attque Spécial</h6>
      <PokeBar stat={stats.spe_atk} max={MaxStat.spe_atk} />
      <h6 className={'mb-1 mt-3'}>Défence Spécial</h6>
      <PokeBar stat={stats.spe_def} max={MaxStat.spe_def} />
      <h6 className={'mb-1 mt-3'}>Vitesse</h6>
      <PokeBar stat={stats.vit} max={MaxStat.vit} />
    </div>
  );
};

export default PokeStats;
