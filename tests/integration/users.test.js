const request = require('supertest');
let server;

describe("/users", () => {
    
    beforeEach(()=>{
        server = require('../../index');
    });

    afterEach( async () => {
        await server.close();
    });

    describe('GET /', ()=> {
        it('Should return 200', async () => {
            const result = await request(server).get('/users/');
        });
    });  
});





/*

const moreOrLess = (a, b) => {
    if(a>b) return a;
    if(b>a) return b;
    if(b==a) return null;
}

const getLetters = () => ['a','b','d'];

const getObject = () => { return {id: "398h3982h93f9h", name: "ferral", feral: true}};

const myRegisterFunc = (username) => {
    if(!username) throw new Error("No username");

    if(username.length < 4) throw new Error('Invalid username');

    getLetters().forEach((element) => {
        username = username.concat(element);
    })

    return username;
}


describe('myRegisterFunc', () => {
    it('should throw', ()=>{
        expect(() => { myRegisterFunc() }).toThrow();
    });

    it('should throw under 4', ()=>{
        const invalids = ['fer', 'dir', 'hel', 'me', 'a'];
        invalids.forEach((element) => {
            expect(() => { myRegisterFunc(element) }).toThrow();
        });    
    });

    it('should return input back on sucess', () => {
        const usersName = "dennis";
        const result = myRegisterFunc(usersName);
     //   expect(result).toBe(usersName);
    });
    
});

describe('moreOrLess', ()=> {
    it('Should A test', () => {
        const result = moreOrLess(1,2);
        expect(result).toBe(2);
    });
    
    it('Should B test', () => {
        const result = moreOrLess(2,1);
        expect(result).toBe(2);
    });
});

describe ('getLetters' , ()=> {
    it('should return 3 letters', ()=> {
        const result = getLetters();

        expect(result).toEqual(expect.arrayContaining(['a','b','d']));
    });
});

describe ('getObject' , ()=> {
    it('should return 2 element', ()=> {
        const result = getObject();

        expect(result).toMatchObject({id: "398h3982h93f9h", name: "ferral"});
    });
});
*/