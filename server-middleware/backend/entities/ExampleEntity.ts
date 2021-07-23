import { Index, mongoose, prop } from '@typegoose/typegoose'
import { Role } from '../../gen/types'
import { BaseDocumentEntity } from './BaseDocumentEntity'

@Index({ background: true })
export class ExampleEntity extends BaseDocumentEntity {
  @prop({ required: true, type: String })
  name: string

  @prop({ required: true, type: mongoose.Schema.Types.Array })
  keywords: string[]

  @prop({ required: true, type: Boolean })
  isVerified: boolean

  @prop({ required: true, type: String, enum: Role })
  role: Role
}
