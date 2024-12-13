namespace Books {
    type GetBooksReaponse = [
        {
            id: number;
            book_images: Array<{
                book_images: string;
            }>;
            book_name: string;
            author: string;
            price: number;
            average_rating: number;
            total_ratings: number;
            janre: Array<{
                janre_name: string;
            }>;
        }
    ];
    type GetBooksRequest = void;
}
