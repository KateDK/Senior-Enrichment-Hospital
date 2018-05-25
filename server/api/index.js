'use strict';

const router = require('express').Router();

const { Student, Campus } = require('../db');

//Students:
router.get('/students', async (req, res, next) => {
  try {
    const students = await Student.findAll({ include: [{ all: true }] });

    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get('/students/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id, {
      include: [{ all: true }],
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

router.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

//Campuses:
router.get('/campuses', async (req, res, next) => {
  try {
    // todo: Do we really need include all?
    const campuses = await Campus.findAll({ include: [{ all: true }] });
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/campuses/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id, {
      include: [{ all: true }],
    });

    res.json(campus);
  } catch (err) {
    next(err);
  }
});
router.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});
// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
