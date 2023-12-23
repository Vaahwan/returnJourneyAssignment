const request = require('supertest');
const app = require('./Task4'); 

describe('API Endpoints', () => {
  let server;

  // listening the app for testing
  beforeAll(() => {
    server = app.listen(3001); 
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('GET /products', () => {
    test('should return an empty array initially', async () => {
      const response = await request(server).get('/products');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('POST /products', () => {
    // Test if user is sending post request with a object in body
    test('should create a new product', async () => {
      const response = await request(server).post('/products').send({
        productName: 'Test Product',
        productPrice: 19.99,
      });

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        productName: 'Test Product',
        productPrice: 19.99,
        productId: expect.any(Number),
      });
    });
  });

  describe('GET /products/:id', () => {
    // Test if user is sending product id which is not present
    test('should return 404 for non-existent product', async () => {
      const response = await request(server).get('/products/999');
      expect(response.status).toBe(404);
      expect(response.text).toBe('product not found');
    });

    // Test if user is sending product id which is present
    test('should return a object for existing product', async()=>{
        const response = await request(server).get('/products/0');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            productName: 'Test Product',
            productPrice: 19.99,
            productId: expect.any(Number),
        });
    })
  });

  describe('PUT /products/:id', () => {
    // Test for updating product with given id
    test('should update an existing product', async () => {
      const updatedProduct = {
        productName: 'Updated Product',
        productPrice: 39.99,
      };

      // Update a product
      const response = await request(server).put('/products/0').send(updatedProduct);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        productName: 'Updated Product',
        productPrice: 39.99,
        productId: expect.any(Number),
      });
    });

    // Test if given id is not present in the products array
    test('should return 404 for non-existent product', async () => {
        const response = await request(server).put('/products/999');
        expect(response.status).toBe(404);
        expect(response.text).toBe('product not found');
    });
  });

  describe('DELETE /products/:id', () => {
    // Test for deleting a product with given id
    test('should delete an existing product', async () => {
        
      // Delete a product
      const response = await request(server).delete('/products/0');

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        productName: 'Updated Product',
        productPrice: 39.99,
        productId: expect.any(Number),
      });
    });

    // Test if given id is not present in the products array
    test('should return 404 for non-existent product', async () => {
        const response = await request(server).put('/products/999');
        expect(response.status).toBe(404);
        expect(response.text).toBe('product not found');
    });
  });
});
