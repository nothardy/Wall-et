const supertest = require('supertest');
const app = require('../src/app.js');

const { Account, Card, Transaction, conn } = require('../src/db.js')

const api = supertest(app);

const users = [{
    mail: 'Wal@gmail.com',
    password: 'ddfqe4332',
    fullname: 'Walter Rodriguez',  
    dni: '4458795',
    balance: 898,
    ubication: 'Hurlingham',
    birth_date: '03/11/99', 
    cvu: 'ffas5f',
    balance: 88,
    photo: 'fdsfsdaf',
}, {
    mail: 'Waleeeet@gmail.com',
    password: '4445DDS9Awwa',
    fullname: 'Franquiño',  
    dni: '445778796',
    ubication: 'Hurlingham',
    birth_date: '04/01/97', 
    cvu: 'ffas5sdsdsdwd',
    photo: 'fds',
} , {
    mail: 'Frans@gmail.com',
    password: '4332',
    fullname: 'Agüero',  
    dni: '565jjggr5',
    ubication: 'Ham',
    birth_date: '7/9/98', 
    cvu: 'ffayfyfdyjhvjvs5f',
    photo: 'ojoh8977f',
}]

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
        beforeEach(() => Account.sync({ force: true })
            .then(() => Account.create(admin))
            .then(() => Account.bulkCreate(users))
            ); 
        beforeEach(() => Transaction.sync({ force: true })
            .then(() => api
            .get('/create')
            ));

        test('info', async () => {
            await api 
                    .get('/home?admin=true')
                    //.send({mail: 'Weeel@gmail.com'})
                    .expect(200)
                    .expect(res => {
                        expect(res.body.length).toEqual(3);
                        expect(res.body[1].account_data.mail).toEqual("Wal@gmail.com")
                    })
                   
        })
    
    })
})