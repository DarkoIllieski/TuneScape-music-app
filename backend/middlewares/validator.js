import { body, validationResult } from "express-validator";

export const validationRules = [
  body("email")
    .isEmail()
    .withMessage("This is not a correct format email")
    .normalizeEmail()
    .matches(/\./)
    .withMessage("This is not a correct format email"),
  // body("password")
  //   .isString()
  //   .withMessage("Password should be a string")
  //   .isLength({ min: 6 })
  //   .withMessage("Password is too short")
  //   .matches(/[\W_]/)
  //   .withMessage("Password should contain at least one special character"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      res.json({
        success: false,
        message: errors.array().map((err) => ({ [err.param]: err.msg })),
      });
    }
  },
];
