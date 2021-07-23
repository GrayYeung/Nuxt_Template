export class ErrorConstant extends Error {
  errorCode: number

  constructor(message: string, errorCode: number) {
    super(message)
    this.errorCode = errorCode
  }
}

// export * from './general-error'
