import { FC, useMemo } from 'react'
import Select, {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'
import {
  ChordSymbol,
  ChordType,
  Note,
  PitchedNote,
  SelectItem,
} from '../../model/types'
import { getPossiblePitches } from '../../model/utils'
import { useSelector } from 'react-redux'
import { getNoteRange } from '../../model/getNoteRange'
import { INDEX_BY_NOTE } from '../../model/constants'
import { configSlice } from '../../state/config'

export type ChordEditorProps = {
  chord: ChordSymbol
  onChange: (chord: ChordSymbol) => void
}

const NOTES = Object.keys(INDEX_BY_NOTE).map(
  (note): SelectItem<Note> => ({ label: note, value: note as Note }),
)

const CHORD_TYPES_TO_NAMES: Record<ChordType, string> = {
  MAJOR: 'Major',
  'DOMINANT-SEVENTH': 'Dominant 7th',
  'MAJOR-SEVENTH': 'Major 7th',
  MINOR: 'Minor',
  'MINOR-SEVENTH': 'Minor 7th',
  DIMINISHED: 'Diminished',
  'HALF-DIMINISHED': 'Half-Diminished',
  'DIMINISHED-SEVENTH': 'Diminished 7th',
  AUGMENTED: 'Augmented',
  'AUGMENTED-SEVENTH': 'Augmented 7th',
}

const CHORD_TYPES = Object.entries(CHORD_TYPES_TO_NAMES).map(
  ([value, label]): SelectItem<ChordType> => ({
    label,
    value: value as ChordType,
  }),
)

const chordEditorStyle = css`
  display: flex;
  flex-direction: row;
`

const fontChangeProps = (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
  fontSize: '1.2em',
})

const baseProps: StylesConfig = {
  input: fontChangeProps,
  singleValue: fontChangeProps,
  menuList: fontChangeProps,
  placeholder: fontChangeProps,
  control: (provided): CSSObjectWithLabel => ({
    ...provided,
    borderWidth: '0px',
    boxShadow: 'none',
  }),
}

const leftSelectStyles: StylesConfig = {
  ...baseProps,

  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '60px',
  }),
}

const middleSelectStyles: StylesConfig = {
  ...baseProps,
  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '180px',
  }),
}

const rightSelectStyles: StylesConfig = {
  ...(baseProps as any),
  control: (provided, props): CSSObjectWithLabel => ({
    ...baseProps.control!(provided, props)!,
    ':before': {
      content: '"/"',
    },
  }),
  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '60px',
  }),
}

const overrideComponents: SelectComponentsConfig<any, any, any> = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
}

export const ChordEditor: FC<ChordEditorProps> = ({ chord, onChange }) => {
  const nameItem: SelectItem<Note> = {
    label: chord.name,
    value: chord.name,
  }
  const typeItem: SelectItem<ChordType> = {
    label: CHORD_TYPES_TO_NAMES[chord.type],
    value: chord.type,
  }
  const rootItem: SelectItem<PitchedNote> = {
    label: chord.root,
    value: chord.root,
  }

  const tuning = useSelector(configSlice.selectors.getTuning)
  const range = useMemo(() => getNoteRange(tuning), [tuning])

  const possibleRoots = useMemo<SelectItem<PitchedNote>[]>(
    () =>
      getPossiblePitches(chord.name, range).map(
        (root): SelectItem<PitchedNote> => ({ label: root, value: root }),
      ),
    [range, chord.name],
  )

  const onNameChange = (data: SelectItem<Note>): void => {
    const possiblePitches = getPossiblePitches(data.value, range)
    onChange({
      ...chord,
      name: data.value,
      root: possiblePitches[possiblePitches.length - 1]!,
    })
  }
  const onTypeChange = (data: SelectItem<ChordType>): void => {
    onChange({ ...chord, type: data.value })
  }
  const onRootChange = (data: SelectItem<PitchedNote>): void => {
    onChange({ ...chord, root: data?.value! })
  }

  return (
    <div className={chordEditorStyle}>
      <Select
        value={nameItem}
        options={NOTES}
        placeholder="Note"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onNameChange as any}
      />
      <Select
        value={typeItem}
        options={CHORD_TYPES}
        placeholder="Type"
        components={overrideComponents}
        styles={middleSelectStyles}
        onChange={onTypeChange as any}
      />
      <Select
        value={rootItem}
        components={overrideComponents}
        options={possibleRoots}
        placeholder="Root"
        styles={rightSelectStyles}
        onChange={onRootChange as any}
      />
    </div>
  )
}
