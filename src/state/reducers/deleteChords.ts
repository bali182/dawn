import { mapRecord, removeByKeys } from '../../model/utils'
import { DeleteChordsAction } from '../actionTypes'
import { AppState } from '../types'
import { Bar } from '../../model/types'
import { removeOrphanedTransitions } from './utils'

export function deleteChordsReducer(
  state: AppState,
  action: DeleteChordsAction,
): AppState {
  const { chordIds } = action.payload
  const chords = removeByKeys(chordIds, state.chords)
  const bars = mapRecord(state.bars, (bar): Bar => {
    if (bar.chords.some((chordId) => chordIds.includes(chordId))) {
      const chrds = bar.chords.filter((chordId) => !chordIds.includes(chordId))
      return { ...bar, chords: chrds }
    }
    return bar
  })
  return removeOrphanedTransitions({
    ...state,
    chords,
    bars,
  })
}
