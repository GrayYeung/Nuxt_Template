import { getOptimisticModel } from '../core'
import { ExampleEntity } from '../entities'

const exampleModel = getOptimisticModel(ExampleEntity)

const defaultObj = {
  name: 'userA',
  keywords: ['happy', 'joy'],
}

export const initExampleDatabase = async (): Promise<ExampleEntity | undefined> => {
  const count = await exampleModel.countDocuments()

  if (count === 0) {
    console.log('initExampleEntity')
    const model = (await new exampleModel(defaultObj).save()).toObject() as ExampleEntity
    return model
  }
}
