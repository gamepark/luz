/** @jsxImportSource @emotion/react */
import { LuzOptionsSpec } from '@gamepark/luz/LuzOptions'
import { LuzRules } from '@gamepark/luz/LuzRules'
import { LuzSetup } from '@gamepark/luz/LuzSetup'
import { GameProvider, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { gameAnimations } from './animations/GameAnimations'
import { App } from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider
      game="luz"
      Rules={LuzRules}
      optionsSpec={LuzOptionsSpec}
      GameSetup={LuzSetup}
      material={Material}
      locators={Locators}
      animations={gameAnimations}
    >
      <App />
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
