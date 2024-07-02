import {
  toAnyAscHigherChrom,
  toAnyAscLowerChrom,
  toAnyDescAscLowerChrom,
  toAnyHigherChrom,
} from '../strategies/chordTonesWithChromaticLeadingTone'
import { AppState } from './store'

export const initialState: AppState = {
  config: {
    tuning: ['G2', 'D2', 'A1', 'E1'],
  },
  progressions: {
    default: {
      id: 'default',
      bars: [
        'default-first-bar',
        'default-second-bar',
        'default-third-bar',
        'default-fourth-bar',
        'default-fifth-bar',
      ],
    },
  },
  bars: {
    'default-first-bar': {
      id: 'default-first-bar',
      chords: ['default-first-bar-dm'],
    },
    'default-second-bar': {
      id: 'default-second-bar',
      chords: ['default-second-bar-f'],
    },
    'default-third-bar': {
      id: 'default-third-bar',
      chords: ['default-third-bar-bb'],
    },
    'default-fourth-bar': {
      id: 'default-fourth-bar',
      chords: ['default-fourth-bar-g', 'default-fourth-bar-a'],
    },
    'default-fifth-bar': {
      id: 'default-fifth-bar',
      chords: ['default-fith-bar-dm'],
    },
  },
  chords: {
    'default-first-bar-dm': {
      id: 'default-first-bar-dm',
      name: 'D',
      type: 'MINOR',
      root: 'D2',
      path: toAnyAscLowerChrom.id,
    },
    'default-second-bar-f': {
      id: 'default-second-bar-f',
      name: 'F',
      type: 'MAJOR',
      root: 'F1',
      path: toAnyAscHigherChrom.id,
    },
    'default-third-bar-bb': {
      id: 'default-third-bar-bb',
      name: 'Bb',
      type: 'MAJOR',
      root: 'Bb2',
      path: toAnyDescAscLowerChrom.id,
    },
    'default-fourth-bar-g': {
      id: 'default-fourth-bar-g',
      name: 'G',
      type: 'MAJOR',
      root: 'G1',
      path: toAnyHigherChrom.id,
    },
    'default-fourth-bar-a': {
      id: 'default-fourth-bar-a',
      name: 'A',
      type: 'DOMINANT-SEVENTH',
      root: 'A1',
      path: toAnyHigherChrom.id,
    },
    'default-fith-bar-dm': {
      id: 'default-fith-bar-dm',
      name: 'D',
      type: 'MINOR',
      root: 'D2',
    },
  },
}
