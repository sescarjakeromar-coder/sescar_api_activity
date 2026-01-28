const express = require('express');
const router = express.Router();
const rooms = require ('../models/roomModel');

//Get
router.get('/rooms', (req, res) => {
  const { type, price, isBooked, feature } = req.query;

  const filteredRooms = rooms
    .filter(
      room =>
        !type || room.type.toLowerCase() === type.toLowerCase()
    )
    .filter(
      room =>
        !price || room.price <= parseFloat(price)
    )
    .filter(
      room =>
        isBooked === undefined ||
        room.isBooked === (isBooked === 'true')
    )
    .filter(
      room =>
        !feature ||
        room.feature.some(f =>
          f.toLowerCase() === feature.toLowerCase()
        )
    );

  if (filteredRooms.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No rooms found matching the criteria',
    });
  }

  res.status(200).json({
    status: 200,
    message: 'Retrieved rooms successfully',
    data: filteredRooms,
  });
});

module.exports = router;

router.post('/rooms', (req, res) => {
  const { type, price, isBooked, feature } = req.body || {};


  if (
    !type ||
    price === undefined ||
    isBooked === undefined ||
    !Array.isArray(feature)
  ) {
    return res.status(400).json({
      status: 400,
      message:
        'Bad Request: Type, Price, IsBooked, and Feature are required',
    });
  }

  const newRoom = {
    id: rooms.length + 101,
    type,
    price,
    isBooked,
    feature,
  };

  rooms.push(newRoom);

  res.status(201).json({
    status: 201,
    message: 'Room created successfully',
    data: newRoom,
  });
});

router.put('/rooms/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = rooms.findIndex(room => room.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Room with ID ${id} not found`,
    });
  }

  rooms[index] = {
    id,
    ...req.body,
  };

  res.status(200).json({
    status: 200,
    message: 'Room updated successfully',
    data: rooms[index],
  });
});

router.delete('/rooms/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = rooms.findIndex(room => room.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Room with ID ${id} not found`,
    });
  }

  rooms.splice(index, 1);

  res.status(200).json({
    status: 200,
    message: 'Room deleted successfully',
  });
});

module.exports = router;