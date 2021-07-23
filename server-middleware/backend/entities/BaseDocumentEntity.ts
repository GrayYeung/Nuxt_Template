import { Types } from 'mongoose'

// const updateVersioningPlugin = require('mongoose-update-versioning')
// @plugin(updateVersioningPlugin)
export abstract class BaseDocumentEntity {
  readonly _id: Types.ObjectId

  readonly updatedAt: Date

  readonly createdAt: Date

  /**
   * use countDocuments instead
   */
  static count: never
}
