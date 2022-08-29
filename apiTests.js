const { spec, request } = require('pactum');

function getRandomNum() {
    return Math.floor(Math.random() * (100000000000000 - 10000000) + 10000000)
}

request.setBaseUrl('https://petstore.swagger.io/v2');
request.setDefaultTimeout(5000)


it('get inventory', async () => {
    await spec()
        .get('/store/inventory')
        .expectStatus(200);
});

it('add new pet with a valid ID', async () => {
    const validID = getRandomNum()
    await spec()
        .post('/pet')
        .withJson({
            "id": validID,
            "category": {
                "id": 9293,
                "name": "categoryName"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(200)
        .expectJsonLike({
            "category": {
                "id": 9293,
                "name": "categoryName"
            }
        });
});

it('add new pet with a invalid ID', async () => {
    const invalidID = '123456z'
    await spec()
        .post('/pet')
        .withJson({
            "id": invalidID,
            "category": {
                "id": 9293,
                "name": "categoryName"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(500)
});

it('add new pet where id is too long', async () => {
    const longID = 12345678901234567890
    await spec()
        .post('/pet')
        .withJson({
            "id": longID
        })
        .expectStatus(500)
});

it('create a pet and then search for it', async () => {
    const postID = await spec()
        .post('/pet')
        .withBody({
            "id": getRandomNum(),
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "DOGZZZZ",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(200)
        .returns('id');

    await spec()
        .get('/pet/{id}')
        .withPathParams('id', postID)
        .expectStatus(200)
        .expectJsonLike({
            "name": "DOGZZZZ",
        });
});

it('Search for a pet with invlaid id', async () => {
    await spec()
        .get('/pet/{id}')
        .withPathParams('id', getRandomNum() + 'z')
        .expectStatus(404)
});

it('Create a pet and delete it', async () => {
    const postID = await spec()
        .post('/pet')
        .withBody({
            "id": getRandomNum(),
        })
        .expectStatus(200)
        .returns('id');

    await spec()
        .delete('/pet/{id}')
        .withPathParams('id', postID)
        .expectStatus(200)
});

it('Delete with an invalid pet id', async () => {

    await spec()
        .delete('/pet/{id}')
        .withPathParams('id', 'dddddd')
        .expectStatus(404)
});

it('Create a pet then update it', async () => {
    const postID = await spec()
        .post('/pet')
        .withBody({
            "id": 959234,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "DOGZZZZ",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(200)
        .returns('id');

    await spec()
        .put('/pet')
        .withBody({
            "id": postID,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(200)
        .expectJsonLike({
            "name": "doggie",
        });
});

it('update pet info with invalid id', async () => {

    await spec()
        .put('/pet')
        .withBody({
            "id": getRandomNum() + 'z',
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(500);
});

it('Create and upload image with valid pet id', async () => {
    const postID = await spec()
        .post('/pet')
        .withBody({
            "id": getRandomNum(),
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "DOGZZZZ",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
        .expectStatus(200)
        .returns('id');

    await spec()
        .post('/pet/{id}/uploadImage')
        .withPathParams('id', postID)
        .withFile('./src/static/cart-icon.png')
        .expectStatus(200);
});

it('upload image with invalid pet id', async () => {
    const wrongID = '1234z552'

    await spec()
        .post('/pet/{id}/uploadImage')
        .withPathParams('id', wrongID)
        .withFile('./src/static/cart-icon.png')
        .expectStatus(404);
});

it('Check the return data type of find by status', async () => {
    await spec()
        .get('/pet/findByStatus?status=pending')
        .expectStatus(200)
        .expectJsonSchema({
            "type": "array"
        });
});

it('place an order with valid info', async () => {
    await spec()
        .post('/store/order')
        .withBody({
            "id": 123321312,
            "petId": 123132123,
            "quantity": 2,
            "status": "placed",
            "complete": true
        })
        .expectStatus(200);

});

it('place an order with invalid info', async () => {
    await spec()
        .post('/store/order')
        .withBody({
            "id": '123321312z',
            "petId": 123132123,
            "quantity": 2,
            "status": "placed",
            "complete": true
        })
        .expectStatus(500);

});

it('place an order with invalid shipDate', async () => {
    await spec()
        .post('/store/order')
        .withBody({
            "id": 123321312,
            "petId": 123132123,
            "quantity": 2,
            "shipDate": "dwaddwaadwdawdaw",
            "status": "placed",
            "complete": true
        })
        .expectStatus(500)
        .expectBodyContains("something bad happened")
});

it('place an order with valid info and search for it', async () => {
    const postID = await spec()
        .post('/store/order')
        .withBody({
            "id": getRandomNum(),
            "petId": 2,
            "quantity": 2,
            "status": "placed",
            "complete": true
        })
        .expectStatus(200)
        .returns('id');

    await spec()
        .get('/store/order/{id}')
        .withPathParams('id', postID)
        .expectStatus(200)
});

it('Search for an invalid order id', async () => {

    await spec()
        .get('/store/order/abbvd3123')
        .expectStatus(404)
});

it('place an order with valid info and delete it', async () => {
    const postID = await spec()
        .post('/store/order')
        .withBody({
            "id": getRandomNum(),
            "petId": 2,
            "quantity": 2,
            "status": "placed",
            "complete": true
        })
        .expectStatus(200)
        .returns('id');

    await spec()
        .delete('/store/order/{id}')
        .withPathParams('id', postID)
        .expectStatus(200)
});

it('delete with invalid id', async () => {
    await spec()
        .delete('/store/order/abc20000')
        .expectStatus(404)
});

it('Check the return data type of the inventory', async () => {
    await spec()
        .get('/store/inventory')
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        });
});

it('Create a single user', async () => {
    await spec()
        .post('/user/createWithArray')
        .withBody([
            {
                "id": 0,
                "username": "fizz",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            }
        ])
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        });
});

it('Create a multi users', async () => {
    await spec()
        .post('/user/createWithArray')
        .withBody([
            {
                "id": 0,
                "username": "fizz",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            },
            {
                "id": 0,
                "username": "fizz1",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            },
            {
                "id": 0,
                "username": "fizz2",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            },
            {
                "id": 0,
                "username": "fizz3",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            }
        ])
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        });
});

it('Create a multi users and search for them', async () => {
    const randomNum = getRandomNum()
    await spec()
        .post('/user/createWithArray')
        .withBody([
            {
                "id": 0,
                "username": randomNum,
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            }
        ])
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        })


    await spec()
        .get(`/user/${randomNum}`)
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        });
});

it('search for an invalid user', async () => {
    await spec()
        .get(`/user/${getRandomNum()}`)
        .expectStatus(404)
});

it('Create a user and delete it and make sure its deleted', async () => {
    const randomNum = getRandomNum()
    await spec()
        .post('/user/createWithArray')
        .withBody([
            {
                "id": 0,
                "username": randomNum,
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
            }
        ])
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        })


    await spec()
        .delete(`/user/${randomNum}`)
        .expectStatus(200)

    await spec()
        .get(`/user/${randomNum}`)
        .expectStatus(404)
});

it('login and logout with valid info', async () => {
    await spec()
        .get('/user/login?username=TestName&password=TestPass')
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        })

    await spec()
        .get('/user/logout')
        .expectStatus(200)
        .expectJsonSchema({
            "type": "object"
        })
});
