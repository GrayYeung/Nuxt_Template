import { Index, mongoose, prop } from '@typegoose/typegoose'
import { BaseDocumentEntity } from './BaseDocumentEntity'

@Index({ background: true })
export class ExampleEntity extends BaseDocumentEntity {
  @prop({ required: true, type: String })
  name: string

  @prop({ required: true, type: mongoose.Schema.Types.Array })
  keywords: string[]
}
