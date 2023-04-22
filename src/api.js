const BASE_API = 'https://api.b7web.com.br/devbarber/api';

/* REQUISIÇÕES */
export default {
    checkToken: async token => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email, password) => {
        /*      console.log("URL", `${BASE_API}/auth/login`)
        console.log("BODY", JSON.stringify({email, password})) */

        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });
        const json = await req.json();
        return json;
        /*
        Usuario: usersoulmed@gmail.com
        Senha: soulmed */
    },
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        });
        const json = await req.json();
        return json;

        /* {"error":"","data":{"id":955,"name":"usersoulmed","avatar":"https:\/\/api.b7web.com.br\/devbarber\/media\/avatars\/default.png","email":"usersoulmed@gmail.com"},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmI3d2ViLmNvbS5iclwvZGV2YmFyYmVyXC9hcGlcL3VzZXIiLCJpYXQiOjE2MTg2MDI1NzAsIm5iZiI6MTYxODYwMjU3MCwianRpIjoiWGFqWTBpdG51SHpWZk0wOSIsInN1YiI6OTU1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.xYwoLBzCu1sevQVIBNRG2Kz62xPiEqOLo5RJax2pCE4"} */
    },
};
