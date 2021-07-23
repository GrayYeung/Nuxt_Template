import { getOptimisticModel } from '../core'
import { ExampleEntity } from '../entities'
import { Example, Role } from '../../gen/types'
import { toExampleGql } from '../mapper/entity-schema-converter'

const exampleModel = getOptimisticModel(ExampleEntity)

const defaultObj = {
  name: 'userA',
  keywords: ['happy', 'joy'],
  isVerified: true,
  role: Role.Admin,
}

export const initExampleDatabase = async (): Promise<ExampleEntity | undefined> => {
  const count = await exampleModel.countDocuments()

  if (count === 0) {
    console.log('initExampleEntity')
    const model = (await new exampleModel(defaultObj).save()).toObject() as ExampleEntity
    return model
  }
}

export const getExamples = async (): Promise<Example[]> => {
  const examples = await exampleModel.find().lean()
  return examples.map(toExampleGql)
}
