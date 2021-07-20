import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response){

    if(request.method === 'POST'){
        const TOKEN =  '5d3372e2948ed811a1a7c764a643a9';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "980830",
            ...request.body,
            //title: "Comunidade DaviTeixeira.dev",
            //imageUrl: "https://github.com/daviteixeira-btm.png",
            //creatorSlug: "daviteixeira-btm"
        })

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas o POST tem!'
    })
}