import * as migration_20260414_051857_initial from './20260414_051857_initial';

export const migrations = [
  {
    up: migration_20260414_051857_initial.up,
    down: migration_20260414_051857_initial.down,
    name: '20260414_051857_initial'
  },
];
