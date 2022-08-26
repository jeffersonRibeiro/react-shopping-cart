const { spec, request } = require('pactum');

request.setBaseUrl('https://petstore.swagger.io/v2');
request.setDefaultTimeout(5000)


it('get inventory', async () => {
    await spec()
        .get('/store/inventory')
        .expectStatus(200);
});

it('add new pet', async () => {
    await spec()
        .post('/pet')
        .withJson({
            "id": 0,
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

it('createAndFind', async () => {
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
        .get('/pet/{id}')
        .withPathParams('id', postID)
        .expectStatus(200)
        .expectJsonLike({
            "name": "DOGZZZZ",
        });
});

it('CreateAndDelete', async () => {
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
        .delete('/pet/{id}')
        .withPathParams('id', postID)
        .expectStatus(200)
});

it('deleteError', async () => {

    await spec()
        .delete('/pet/{id}')
        .withPathParams('id', 12301230123)
        .expectStatus(404)
});

it('createAndUpdate', async () => {
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
