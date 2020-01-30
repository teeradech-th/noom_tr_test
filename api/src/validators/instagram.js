import { check } from 'express-validator';
import isValidPath from 'is-valid-path';
import _ from 'lodash';

const instagramValidator = {
  create: [
    check('title')
      .isLength({ min: 1 }),
    check('image')
      .exists()
      .custom(value => {
        return isValidPath(value);
      })
  ],
  update: [
    check('_id').exists()
  ],
  destroy: [
    check('_id').exists()
  ]
}

export default instagramValidator;
