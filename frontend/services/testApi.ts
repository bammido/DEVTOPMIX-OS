import jwt from 'jsonwebtoken'
const delay= (amount = 750) => new Promise ( resolve =>  setInterval(resolve, amount))


export  const signInReq = async () =>{
    await delay()

    return {
        token: jwt.sign({userId: "662fae9d-ef66-40e1-9932-111e70dbe3a9"}, 
        "123456", 
        {expiresIn: 60 * 60 * 1 /* 1H */}),
        colaboradorData: {
            nome: 'bryan',
            id: "662fae9d-ef66-40e1-9932-111e70dbe3a9",
            email: 'bryan@email.com'
        }
    }
}

export const recover = async ()=>{
    await delay()

    return {
        nome: 'bryan',
        id: "662fae9d-ef66-40e1-9932-111e70dbe3a9",
        email: 'bryan@email.com'
    }
}