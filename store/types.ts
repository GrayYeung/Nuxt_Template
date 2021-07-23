import { Example } from '~/gen/composition'

export interface RootState {
  examples: Example[]
}

export interface AnotherState {
  [x: string]: any
  anything: string
}
