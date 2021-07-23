import { Example } from '../../gen/types'
import { ExampleEntity } from '../entities'

export type EntityConverter<T, R> = (self: T) => R

type ExamplePojo = Readonly<ExampleEntity>
type ExamplePojoOptional = ExamplePojo | null

export const toExampleGql: EntityConverter<ExamplePojo, Example> = (item: ExamplePojo) => {
  const example = <Example>{
    ...item,
    id: item._id.toHexString(),
  }
  return example
}

export const toExampleOptionalGql: EntityConverter<ExamplePojoOptional, Example | null> = (
  item: ExamplePojoOptional,
) => (item ? toExampleGql(item) : null)
