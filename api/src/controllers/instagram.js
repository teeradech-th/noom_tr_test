import '../database';
import { Instagram } from '../models';
import { validationResult } from 'express-validator';

const index = (req, res) => {
  console.log('hi index');
  const page = req.query.page || 1;
  const limit = req.query.limit || process.env.DEFAULT_PAGE_SIZE || 4;
  const sort = `created_at-`;
  Instagram.paginate({}, {
    page,
    limit,
    sort
  }, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.json(result);
    }
  });
}

const create = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(422).json(err)
  }
  else {
    let newIg = req.body;
    Instagram.create(newIg).then(ig => {
      return res.json(ig);
    });
  }
}

const show = async (req, res) => {
  Instagram.findById(req.params.id, (err, ig) => {
    if (err) {
      return res.status(422).json(err);
    } else {
      return res.json(ig);
    }
  });
}

const update = async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) { res.status(422).json(err) }
  let updateIg = req.body;
  Instagram.findByIdAndUpdate(req.params.id, updateIg, { new: true }, (err, ig) => {
    if (err) {
      return res.status(422).json(err)
    } else {
      return res.json(ig);
    }
  });
}

const destroy = async (req, res) => {
  Instagram.findByIdAndRemove(req.params.id, (err, ig) => {
    if (err) {
      return res.status(422).json(err)
    } else {
      return res.json(ig);
    }
  })
}

export default {
  index,
  create,
  show,
  update,
  destroy
}
