/* eslint-disable max-classes-per-file, max-len */
'use strict'

/**
 * Base class for all errors throwen by our app
 */
class AppError extends Error {
  constructor(message, type, code) {
    super()
    this.message = message
    this.type = type
    this.code = code
  }
}

/**
 * 500 ERROR
 * Throw this error when some internal error occures
 */
class InternalError extends AppError {
  constructor(message) {
    super(message || 'Internal error occured', 'ERROR_INTERNAL', 500)
  }
}

/**
 * 404 ERROR
 * Throw this when requested route was not found
 */
class NotFoundError extends AppError {
  constructor(message) {
    super(message || 'Sorry... team of highly trained ponies are working on fixing your issue', 'NOT_FOUND', 404)
  }
}

/**
 * 204 ERROR
 * Throw this when no content was found
 */
class NoContentError extends AppError {
  constructor(message) {
    super(message || 'No content was found', 'NO_CONTENT', 204)
  }
}

/**
 * 400 ERROR
 * Throw this when data validation failes
 */
class ValidationError extends AppError {
  constructor(message) {
    super(message || 'Unvalid data on input', 'VALIDATION_ERROR', 400)
  }
}

/**
 * 401 ERROR
 * Throw this when user authorization failed
 */
class UnauthorizedError extends AppError {
  constructor(message) {
    super(message || 'Failed to authorize user', 'AUTHORIZATION_ERROR', 401)
  }
}

/**
 * 400 ERROR
 * Throw this when user already exist
 */
class UserExistError extends AppError {
  constructor(message) {
    super(message || 'User already exist', 'USER_EXIST', 400)
  }
}

module.exports = {
  AppError,
  InternalError,
  NotFoundError,
  NoContentError,
  ValidationError,
  UnauthorizedError,
  UserExistError
}
