export class Music {

    _id: string;
    artist_bio: 
        {
            first_name: string;
            last_name: string;
            city: string;
        };
    songname: string;
    album: string;
    language: string;
    sold: string;
    available_online: string;
    customer_details: {
            customer_first_name: string;
            customer_last_name: string;
            customer_address: string;
            postal_code: string;
            card_details: string;
        };

}
