# Desafio Blitz de Carreira 3.0 Trybe

1 Instale as dependências
  * `npm install`

2 Rode o nodemon
  * `npm start`


## Requisições

+ Request POST ('/todo')

  + Body

    ```
    {
      "title": "To do List",
      "descroption": "Criar CRUD"
    }  
    ```

  + Response 201

    ```
    {
      "id": 1,
      "createdAt": "2022-05-13T22:06:53.754Z",
      "updatedAt": "2022-05-13T22:06:53.754Z",
      "title": "To do List",
      "descroption": "Criar CRUD"
      "status": "pending"
    }

    ```

+ Request GET ('/')

  + Response 200

    ```
    [
      {
        "id": 1,
        "createdAt": "2022-05-13T22:06:53.754Z",
        "updatedAt": "2022-05-13T22:06:53.754Z",
        "title": "To do List",
        "descroption": "Criar CRUD"
        "status": "pending"
      },
      {
        "id": 2,
        "createdAt": "2022-05-14T02:48:47.678Z",
        "updatedAt": "2022-05-14T02:48:47.678Z",
        "title": "ximira",
        "description": "xelo",
        "status": "pending"
      }
    ]  

    ```

+ Request GET ('/')

  + Body

    ```
    {
      "status": "done"
    }  
    ```

  + Response 200

    ```
    [
      {
        "id": 3,
        "createdAt": "2022-05-13T22:06:53.754Z",
        "updatedAt": "2022-05-13T22:06:53.754Z",
        "title": "Xablau",
        "descroption": "teste"
        "status": "done"
      },
      {
        "id": 4,
        "createdAt": "2022-05-14T02:48:47.678Z",
        "updatedAt": "2022-05-14T02:48:47.678Z",
        "title": "ximira",
        "description": "xelo",
        "status": "done"
      }
    ]  

    ```

+ Request GET ('/todo/:id')

  + Response 200

    ```
    {
      "id": 1,
      "createdAt": "2022-05-13T22:06:53.754Z",
      "updatedAt": "2022-05-13T22:06:53.754Z",
      "title": "To do List",
      "descroption": "Criar CRUD"
      "status": "pending"
    }

+ Request PATCH ('/todo/:id')

  + Body

    ```
    {
      "status": "inProgress"
    }
    ```  

  + Response 200

    ```
    {
      "id": 3,
      "createdAt": "2022-05-13T17:17:03.607Z",
      "updatedAt": "2022-05-13T18:16:45.483Z",
      "title": "xablau",
      "description": "atualizar to do",
      "status": "inProgress"
    }
    ```

+ Request DELETE ('/todo/:id')

  + Response 200

    ```
    {
      "message": "deleted"
    }
    ```