import { nanoid } from 'nanoid'
import { isNil, isNotNil } from '../../model/isNil'
import { Bar, ChordProgression, ChordSymbol } from '../../model/types'
import { CloneBarAction } from '../actionTypes'
import { AppState } from '../types'
import { updateRecord, insertAt } from '../../model/utils'

export function cloneBarReducer(
  state: AppState,
  action: CloneBarAction,
): AppState {
  const { barId, progressionId } = action.payload
  const bar = state.bars[barId]
  const progression = state.progressions[progressionId]
  const chords = (bar?.chords ?? [])
    .map((chordId) => state.chords[chordId])
    .filter(isNotNil)

  if (isNil(bar) || isNil(progression)) {
    return state
  }

  const index = progression.bars.indexOf(barId)

  if (index < 0) {
    return state
  }

  const clonedChords = chords.map(
    (chord): ChordSymbol => ({ ...chord, id: nanoid() }),
  )

  const clonedBar: Bar = {
    ...bar,
    id: nanoid(),
    chords: clonedChords.map((chord) => chord.id),
  }

  const updatedProgression: ChordProgression = {
    ...progression,
    bars: insertAt(progression.bars, clonedBar.id, index),
  }

  return {
    ...state,
    progressions: updateRecord(state.progressions, [updatedProgression]),
    bars: updateRecord(state.bars, [clonedBar]),
    chords: updateRecord(state.chords, clonedChords),
  }
}
