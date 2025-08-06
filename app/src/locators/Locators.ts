import { LocationType } from '@gamepark/luz/material/LocationType'
import { MaterialType } from '@gamepark/luz/material/MaterialType'
import { PlayerColor } from '@gamepark/luz/PlayerColor'
import { Locator } from '@gamepark/react-game'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {}
