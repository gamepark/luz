import { MaterialGameSetup } from '@gamepark/rules-api'
import { LuzOptions } from './LuzOptions'
import { LuzRules } from './LuzRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class LuzSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, LuzOptions> {
  Rules = LuzRules

  setupMaterial(_options: LuzOptions) {
    // TODO
  }

  start() {
    this.startPlayerTurn(RuleId.TheFirstStep, this.players[0])
  }
}
