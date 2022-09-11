import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../backend/server.js';



chai.use(chaiHttp);
const { expect } = chai;

/**
 * @description Test for Air Quality Endpoint
 */
describe('Random Latitude and Longitude', () => {
    it('Retrieve Air Pollution for Random Latitude and Longitude', (done) => {
    chai
        .request(app)
        .get('/api/air_quality?lat=48.856613&lon=2.352222')
        .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.type).to.equal('application/json');
        expect(res.body).to.be.an('object');
        done(err);
        });
        });

it('Error if Latitude and Longitude is not provided', (done) => {
    chai
        .request(app)
        .get('/api/air_quality')
        .end((err, res) => {
        expect(res).to.have.status(404);
        done(err);
        });
        });
it(' if Longitude is provided', (done) => {
    chai
        .request(app)
        .get('/api/air_quality/france')
        .end((err, res) => {
        expect(res).to.have.status(201);
        done(err);
        });
        });
it('if Latitude is provided', (done) => {
    chai
        .request(app)
        .get('/api/air_quality/france')
        .end((err, res) => {
        expect(res).to.have.status(201);
        done(err);
        });
        });
})