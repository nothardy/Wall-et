const supertest = require('supertest');
const app = require('../src/app.js');

const { Account, Card, Transaction, conn } = require('../src/db.js')

const api = supertest(app);

const user = {
    mail: 'Wal@gmail.com',
    password: 'ddfqe4332',
    fullname: 'Walter Rodriguez',  
    dni: '4458795',
    ubication: 'Hurlingham',
    birth_date: '03/11/99', 
    cvu: 'ffas5f',
    photo: 'fdsfsdaf',
}

const admin = {
         mail: 'Weeel@gmail.com',
        password: 'de4332',
        fullname: 'Wr Rodriguez',  
        dni: '4458ttwe35',
        ubication: 'Hurngham',
        birth_date: '06/11/99', 
        cvu: 'ffas',
        photo: 'asdaf',
        admin: true
}

describe('test routes', () => {
    beforeEach(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    describe('Route home-user', () => {
        beforeEach(() => Account.sync()
            .then(() => Account.create(admin)));

        test('info', async () => {
            await api 
                    .get('/home')
                    .send({mail: 'Weeel@gmail.com'})
                    .expect(200)
                   
        })
    })
})