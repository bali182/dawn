import { createRoot } from 'react-dom/client'
import { Tab } from './components/Tab'

const rootDiv = document.getElementById('root')!

createRoot(rootDiv).render(
  <div>
    <Tab id="tab1">
      {`options space=20
      tabstave notation=true key=A time=4/4
   
      notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
      notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4
      text :w, |#segno, ,|, :hd, , #tr
   
      options space=25`}
    </Tab>
  </div>,
)
