import { ValidationError } from "class-validator";
import type { IValidationError } from "../types/IValidationError.js";

export const formatErrors = (errors: ValidationError[]) => {
  const formattedErrors: IValidationError[] = errors.map((error) => ({
    field: error.property,
    messages: Object.values(error.constraints ?? {}),
  }));
  return formattedErrors;
};