export async function GET(request) {
    const users = [
        {id: 1, name: 'asd'},
        {id: 1, name: 'asd'},
        {id: 1, name: 'asd'},
    ];

    return new Response(JSON.stringify(users))

    //https://localhost:3000/api/Invoice
}