import { AnyParamConstructor, ReturnModelType } from '@typegoose/typegoose/lib/types'
import { getModelForClass } from '@typegoose/typegoose'
import { db } from '../server'

export function getOptimisticModel<U extends AnyParamConstructor<any>, QueryHelpers>(
  cl: U,
): ReturnModelType<U, QueryHelpers> {
  return getModelForClass(cl, {
    existingMongoose: db,
    schemaOptions: {
      timestamps: true,
      optimisticConcurrency: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
      autoCreate: true,
      // collection: getCollectionName(cl.name),
    },
  })
}
