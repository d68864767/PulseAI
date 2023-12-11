// server/models/seeders/20220101000001-seedDataStreams.js

const { DataStream } = require('../index');

const seedDataStreams = async () => {
  try {
    await DataStream.bulkCreate([
      {
        data: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        data: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      },
      {
        data: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
      },
    ]);
    console.log('Data streams seeded successfully.');
  } catch (error) {
    console.error('Error seeding data streams:', error);
  }
};

module.exports = seedDataStreams;
